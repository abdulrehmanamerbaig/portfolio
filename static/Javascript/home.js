// Dynamic Text Animation
const dynamic_texts = document.querySelector('.dynamic-text');
const titles = ['Computer Scientist ', 'Web Developer ', 'Data Scientist '];

let current_title = [];
let isDeleting = false;
let i = 0; // Index for titles array
let j = 0; // Index for characters in the current title

function animateText() {
    dynamic_texts.innerHTML = current_title.join(''); // Display the current title dynamically

    if (i < titles.length) {
        if (!isDeleting) {
            // Add characters
            current_title.push(titles[i][j]);
            j++;

            if (j === titles[i].length) {
                isDeleting = true; // Start deleting after the title is complete
            }
        } else {
            // Remove characters
            current_title.pop();
            j--;

            if (j === 0) {
                isDeleting = false; // Stop deleting and move to the next title
                i = (i + 1) % titles.length; // Loop back to the first title
            }
        }
    }

    setTimeout(animateText, isDeleting ? 50 : 100); // Adjust speed based on the action
}

animateText();

// Decor Line Scroll Behavior
function decorFix() {
    const decorSideline = document.querySelector('.decor-line');

    if (!decorSideline) {
        console.error('Element with class "decor-line" not found.');
        return;
    }

    window.addEventListener('scroll', () => {
        // Add 'fixed_decorline' class when scrolling past 500px
        if (window.scrollY >= 500) {
            decorSideline.classList.add('fixed_decorline');
        } else {
            decorSideline.classList.remove('fixed_decorline');
        }
    });
}

decorFix();


// Update Hash Link on Scroll
function updateHashLink() {
    const sections = document.querySelectorAll('section'); // Get all section elements
    let currentSectionId = ''; // Variable to store the ID of the current visible section

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // Check if the section is visible in the viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionId = '#' + section.id;
        }
    });

    // Update the hash link in the URL without causing a page jump
    if (currentSectionId) {
        window.history.replaceState(null, null, currentSectionId);
    }
}

// Highlight Active Navigation Link
function highlightActiveLink() {
    const currentSection = window.location.hash; // Get the current URL hash
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link'); // Get all navigation links

    navLinks.forEach((link) => {
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Call functions on page load
    highlightActiveLink();

    // Update hash link on scroll
    window.addEventListener('scroll', updateHashLink);

    // Highlight active link on scroll and hash change
    window.addEventListener('scroll', highlightActiveLink);
    window.addEventListener('hashchange', () => {
        setTimeout(highlightActiveLink, 1); // Slight delay to ensure proper highlighting
    });
    window.addEventListener('load', highlightActiveLink);
});
