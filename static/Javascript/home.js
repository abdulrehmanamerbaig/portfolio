let dynamic_texts = document.querySelector('.dynamic-text')
const titles = ['Computer Scientist ', 'Web Developer ', 'Data Scientist ']

let current_title = []
let isDeleting = false

let i = 0
let j = 0

function animation(){
    dynamic_texts.innerHTML = current_title.join('')
    if (i <= titles.length){
        if (!isDeleting){
            current_title.push(titles[i][j])
            j ++
            if (j == titles[i].length){
                i ++;
                isDeleting = true
            }
            
        }
        
        if (isDeleting){
            current_title.pop()
            j--
            if (j == 0){
                isDeleting = false

            }
        }
    }
    if (i == titles.length){
        i = 0
    }
    if (isDeleting){
        setTimeout(animation, 50)
    }
    else{
        setTimeout(animation, 100)
    }
}

animation()

function decor_fix(){
    const decor_sideline = document.querySelector('.decor-line')
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 500){
            decor_sideline.classList.add('decor-line')
        }
        else{
            decor_sideline.classList.remove('fixed_decorline')

        }
    })
}
decor_fix()

// Function to handle scrolling and update the hash link
function updateHashLink() {
    var sections = document.querySelectorAll('section'); // Get all section elements
    var currentSectionId = ''; // Variable to store the ID of the current visible section

    sections.forEach(function (section) {
        // Check if the section is visible in the viewport
        var rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionId = '#' + section.id;
        }
    });

    // Update the hash link in the URL without causing a page jump
    if (currentSectionId) {
        window.history.replaceState(null, null, currentSectionId);
    }
}

// Call the function on scroll

document.addEventListener('DOMContentLoaded', function() {
// Your JavaScript code here
function highlightActiveLink() {

// Get the current URL hash, which represents the section ID being visited
var currentSection = window.location.hash;

// Find the corresponding link and add the 'active' class
var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(function (link) {
    if (link.getAttribute('href') === currentSection) {
        
        link.classList.add('active');
        return
    } else {
        link.classList.remove('active');
    }
} 
)
}

// Call the function on page load and whenever the hash changes (to handle navigation within the same page)
window.addEventListener('scroll', updateHashLink);
window.addEventListener('load', highlightActiveLink);

window.addEventListener('hashchange', function() {
    setTimeout(highlightActiveLink, 1); // Delay of 50 milliseconds
});
window.addEventListener('scroll', highlightActiveLink);
});

// Cheat Codes:
// Always use array for your requirements. 
// In that context, I used array `current_title` and used push and pop functions. Then used join to remove commas.