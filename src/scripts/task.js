
function makeTodoItem(todoObj){
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('task');
    todoDiv.setAttribute('data-task', '');

    const todoTitle = document.createElement('p');
    todoTitle.textContent = todoObj.getTitle();

    const todoDueDate = document.createElement('p');
    todoDueDate.textContent = todoObj.getDueDate();

    const todoPriority = document.createElement('p');
    todoPriority.textContent = (todoObj.getPriority() ? 'Important' : 'Not Important');

    todoDiv.appendChild(todoTitle);
    todoDiv.appendChild(todoDueDate);
    todoDiv.appendChild(todoPriority);

    return todoDiv;

}

function makeProjectItem(projectObj){
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-item');
    projectDiv.setAttribute('data-project-item', '');

    const miniArrow = document.createElement('p');
    miniArrow.innerHTML = `
    <svg width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M11.7 15.3q-.475.475-1.087.212Q10 15.25 10 14.575v-5.15q0-.675.613-.937q.612-.263 1.087.212l2.6 2.6q.15.15.225.325q.075.175.075.375t-.075.375q-.075.175-.225.325Z"></path></svg>
    `

    const projectTitle = document.createElement('p');
    projectTitle.textContent = projectObj.getTitle();

    projectDiv.appendChild(miniArrow);
    projectDiv.appendChild(projectTitle);
    
    return projectDiv;
}
export { makeTodoItem, makeProjectItem };