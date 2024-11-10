const prompt_box = document.getElementById("task");
const taskList = document.getElementById("task-list");
function addTask(){
    if (prompt_box.value === ''){
        alert("Write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = prompt_box.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span)
    }
    prompt_box.value = "";
    saveData();
}
taskList.addEventListener("click", function(in_){
    if (in_.target.tagName === "LI"){
        in_.target.classList.toggle("checked");
        saveData();
    }
    else if(in_.target.tagName === "SPAN"){
        in_.target.parentElement.remove();
        saveData();
    }
})
function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}
function showTasks(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTasks();