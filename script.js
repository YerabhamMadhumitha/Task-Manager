let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
console.log("JS connected");
const input = document.getElementById("taskinput");
const button = document.getElementById("addtask");
const list = document.getElementById("tasklist");
tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) {
        li.classList.add("completed");
    }


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";

    deleteBtn.addEventListener("click", function () {
        tasks = tasks.filter(t => t.text !== task.text);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        list.removeChild(li);
    });
    doneBtn.addEventListener("click", function () {

        li.classList.toggle("completed");

        tasks = tasks.map(t => {
            if (t.text === task.text) {
                return { ...t, completed: !t.completed };
            }
            return t;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    li.appendChild(deleteBtn);
    li.appendChild(doneBtn);
    list.appendChild(li);

});



button.addEventListener("click", function () {
    const taskText = input.value.trim();

    if (taskText === '') {
        return;
    }
    tasks.push({ text: taskText, completed: false });
    //JSON.stringify(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));


    const li = document.createElement("li");
    li.textContent = taskText;

    input.value = '';

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";




    deleteBtn.addEventListener("click", function () {
        tasks = tasks.filter(t => t.text !== taskText);

        localStorage.setItem("tasks", JSON.stringify(tasks));
        list.removeChild(li);
    });
    doneBtn.addEventListener("click", function () {

        li.classList.toggle("completed");

        tasks = tasks.map(t => {
            if (t.text === taskText) {
                return { ...t, completed: !t.completed };
            }
            return t;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    li.appendChild(deleteBtn);
    li.appendChild(doneBtn);
    list.appendChild(li);
}
);


