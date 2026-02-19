console.log("JS connected");
const input = document.getElementById("taskinput");
const button = document.getElementById("addtask");
const list = document.getElementById("tasklist");
button.addEventListener("click", function () {
    const taskText = input.value.trim();
    if (taskText === '') {
        return;
    }
    const li = document.createElement("li");
    li.textContent = taskText;

    input.value = '';



    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";


    deleteBtn.addEventListener("click", function () {

        list.removeChild(li);
    });
    doneBtn.addEventListener("click", function () {
        li.classList.toggle("completed");


    });
    li.appendChild(deleteBtn);
    li.appendChild(doneBtn);
    list.appendChild(li);
}
);


