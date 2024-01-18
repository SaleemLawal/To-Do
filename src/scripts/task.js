export function makeTodoItem(todoObj){
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('task');
    todoDiv.setAttribute('data-task', '');
    todoDiv.setAttribute('data-task-id', todoObj.getId());

    // make checkbox to show if task is complete
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('data-task-checkbox', '');
    todoDiv.appendChild(checkbox);

    // make title
    const todoTitle = document.createElement('p');
    todoTitle.textContent = todoObj.getTitle();
    todoDiv.appendChild(todoTitle);

    // due date 
    const todoDueDate = document.createElement('p');
    todoDueDate.textContent = todoObj.getDueDate();
    todoDiv.appendChild(todoDueDate);

    const editDiv = document.createElement('div');
    editDiv.classList.add('todo-div-btn');

    // edit button
    const editButton = document.createElement('button');
    editButton.classList.add('todo-edit-btn');
    editButton.setAttribute('data-task-edit', '');
    editButton.innerHTML = `
    <svg width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15q.362.15.637.425l4.85 4.85q.275.275.425.637q.15.363.15.763V12h-2V9h-4q-.425 0-.712-.288Q13 8.425 13 8V4H6v16h6v2Zm0-2V4v16Zm12.3-5.475l1.075 1.075l-3.875 3.85v1.05h1.05l3.875-3.85l1.05 1.05l-4 4q-.15.15-.338.225q-.187.075-.387.075H14.5q-.2 0-.35-.15q-.15-.15-.15-.35v-2.25q0-.2.075-.387q.075-.188.225-.338Zm3.175 3.175L18.3 14.525l1.45-1.45q.275-.275.7-.275q.425 0 .7.275l1.775 1.775q.275.275.275.7q0 .425-.275.7Z"></path></svg>
    `
    editDiv.appendChild(editButton);

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('todo-delete-btn');
    deleteButton.setAttribute('data-task-delete', '');
    deleteButton.innerHTML = `
    <svg width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6v13q0 .825-.587 1.413Q17.825 21 17 21ZM7 6v13h10V6Zm2 10q0 .425.288.712Q9.575 17 10 17t.713-.288Q11 16.425 11 16V9q0-.425-.287-.713Q10.425 8 10 8t-.712.287Q9 8.575 9 9Zm4 0q0 .425.288.712q.287.288.712.288t.713-.288Q15 16.425 15 16V9q0-.425-.287-.713Q14.425 8 14 8t-.712.287Q13 8.575 13 9ZM7 6v13V6Z"></path></svg>
    `
    editDiv.appendChild(deleteButton);
    todoDiv.appendChild(editDiv);

    const todoPriority = document.createElement('p');
    todoPriority.textContent = (todoObj.getPriority() ? 'Important' : 'Not Important');
    todoPriority.classList.add(`todo-card-${todoObj.getPriority() ? 'important' : 'not-important'}`);
    todoPriority.setAttribute('data-task-priority', (todoObj.getPriority() ? 'Important' : 'not-important'));
    todoDiv.appendChild(todoPriority);
    return todoDiv;

}

export function makeProjectItem(projectObj){
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-item');
    projectDiv.setAttribute('data-project-item', '');


    // edit button
    const editButton = document.createElement('button');
    editButton.classList.add('todo-edit-btn');
    editButton.setAttribute('data-task-edit', '');
    editButton.innerHTML = `
    <svg width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15q.362.15.637.425l4.85 4.85q.275.275.425.637q.15.363.15.763V12h-2V9h-4q-.425 0-.712-.288Q13 8.425 13 8V4H6v16h6v2Zm0-2V4v16Zm12.3-5.475l1.075 1.075l-3.875 3.85v1.05h1.05l3.875-3.85l1.05 1.05l-4 4q-.15.15-.338.225q-.187.075-.387.075H14.5q-.2 0-.35-.15q-.15-.15-.15-.35v-2.25q0-.2.075-.387q.075-.188.225-.338Zm3.175 3.175L18.3 14.525l1.45-1.45q.275-.275.7-.275q.425 0 .7.275l1.775 1.775q.275.275.275.7q0 .425-.275.7Z"></path></svg>
    `
    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('todo-delete-btn');
    deleteButton.setAttribute('data-task-delete', '');
    deleteButton.innerHTML = `
    <svg width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6v13q0 .825-.587 1.413Q17.825 21 17 21ZM7 6v13h10V6Zm2 10q0 .425.288.712Q9.575 17 10 17t.713-.288Q11 16.425 11 16V9q0-.425-.287-.713Q10.425 8 10 8t-.712.287Q9 8.575 9 9Zm4 0q0 .425.288.712q.287.288.712.288t.713-.288Q15 16.425 15 16V9q0-.425-.287-.713Q14.425 8 14 8t-.712.287Q13 8.575 13 9ZM7 6v13V6Z"></path></svg>
    `

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
