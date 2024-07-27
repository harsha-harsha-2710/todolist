document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newTaskForm');
    const taskList = document.getElementById('tasks');
    let i = 1;
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const title = form.elements.taskTitle.value;
        const deadline = form.elements.taskDeadline.value;
        const priority = form.elements.taskPriority.value;
        const description = form.elements.taskDescription.value;
        let colour = '';
        if(priority==='High')
            colour = 'red';
        else if(priority==='Medium')
            colour = 'green';
        else
            colour = 'blue';

        // Create task element
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <div class = "task">
            <div style='width:70%'><h4>${title}</h4>
            <p><strong>Deadline:</strong> ${deadline}</p>
            <p style = 'color:${colour}'><strong>Priority:</strong> ${priority}</p>
            <p>${description}</p></div>
            <div style = 'display:flex;justify-content:center;align-items:center;'>
            <button onclick = 'remove(${i})'>remove</button></div>
            </div>
        `;
        taskItem.classList.add(`task-item`);
        taskItem.classList.add(`task-${i++}`);

        // Add task to task list
        taskList.appendChild(taskItem);

        // Clear form fields
        form.reset();
    });
});
function remove(n) {
    const it = document.querySelector(`.task-${n}`);
    const taskList = document.getElementById('tasks');
    taskList.removeChild(it);
}