function agregarTarea() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    // Solo agregar si el campo no está vacío
    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        // Botón para marcar como completada
        li.addEventListener('click', function () {
            li.classList.toggle('completada');
        });

        // Botón para eliminar tarea
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = ' X';
        deleteBtn.classList.add('borrar');
        deleteBtn.onclick = function () {
            li.remove();
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Limpiar el campo de entrada
        taskInput.value = '';
    }
}