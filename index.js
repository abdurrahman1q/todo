let todos = [];

function notTodo(taskInputValue) {
    if (taskInputValue) {
        todos.push(taskInputValue);
    }
    
}

document.getElementById('push').addEventListener('click', function () {
    const taskInputValue = document.getElementById('to_do_add').value;
    notTodo(taskInputValue)

    const taskList = document.getElementById('itemBox');

    taskList.innerHTML = '';

    for (item of todos) {
        const li = document.createElement('li');
        li.innerText = item;
        taskList.appendChild(li);
        
    }
    
})

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#todo input').value.length == 0){
        alert("Please Enter a Todo")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#todo input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}