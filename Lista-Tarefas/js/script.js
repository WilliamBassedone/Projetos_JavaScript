// FUNÇÃO QUE ADICIONA TAREFA
function addTask() {
    // TÍTULO DA TAREFA
    const taskTitle = document.querySelector("#task-title").value;
    if (taskTitle) {
        // CLONA TEMPLATE
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);
        // ADICIONA TÍTULO
        newTask.querySelector(".task-title").textContent = taskTitle;
        // REMOVER CLASSES DESNECESSÁRIAS
        newTask.classList.remove("template");
        newTask.classList.remove("hide");
        // ADICIONA TAREFA NA LISTA
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);
        // LIMPAR TEXTO
        document.querySelector("#task-title").value = "";
        // ADICIONA O EVENTO DE REMOVER
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function () {
            removeTask(this);
        });
        // ADICIONA EVENTO DE COMPLETAR TAREFA
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function () {
            completeTask(this);
        });
    }
}
// FUNÇÃO DE REMOVER TAREFA
function removeTask(task) {
    task.parentNode.remove(true);
}

// FUNÇÃO DE COMPLETAR A TAREFA
function completeTask(task) {
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle("done");
}

// EVENTO DE ADICIONAR TAREFA
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    addTask();
});