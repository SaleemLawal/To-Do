// Manages form interactions for creating/editing to-dos and projects.
// Validates user input and triggers actions accordingly.
function GenerateForm(){
    // form creation 
    const newForm = document.createElement('form');
    newForm.setAttribute('id', 'new-form');
    newForm.setAttribute('class', 'form-container');
    newForm.setAttribute('action', '#');
    newForm.setAttribute('method', 'post');

    // form title
    const formTitle = document.createElement('h2');
    formTitle.setAttribute('class', 'form-title');
    formTitle.textContent = 'Create New Todo';

    // Name Div
    const nameDiv = document.createElement('div');
    nameDiv.setAttribute('class', 'input-fields');
    // name
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name';

    const inputName = document.createElement('input');
    inputName.setAttribute('id', 'todo-name');
    
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(inputName);

    // date
    const dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'input-fields');

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'Date';

    const inputDate = document.createElement('input');
    inputDate.setAttribute('id', 'todo-date');
    inputDate.setAttribute('type', 'date');
    inputDate.setAttribute('placeholder', 'mm/dd/yyyy');

    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(inputDate);

    // priority
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('priority');

    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Important?';

    const inputPriority = document.createElement('input');
    inputPriority.setAttribute('type', 'checkbox');
    inputPriority.setAttribute('id', 'todo-priority');


    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(inputPriority);

    // form submission
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('data-btn-submit', '');
    submitButton.textContent = 'Submit';

    const buttonClose = document.createElement('button');
    buttonClose.setAttribute('type', 'button');
    buttonClose.setAttribute('class', 'btn-close');
    buttonClose.setAttribute('data-btn-close', '');
    buttonClose.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z"></path></svg>
    `

    // append all elements to the form
    newForm.appendChild(formTitle);
    newForm.appendChild(nameDiv);
    newForm.appendChild(dateDiv);
    newForm.appendChild(priorityDiv);
    newForm.appendChild(submitButton);
    newForm.appendChild(buttonClose);

    return newForm;
}

function GenerateProject(){
    const newProject = document.createElement('form');
    newProject.setAttribute('id', 'new-project');
    newProject.setAttribute('class', 'form');
    newProject.setAttribute('action', '#');
    newProject.setAttribute('method', 'post');

    // form title
    const formTitle = document.createElement('h2');
    formTitle.setAttribute('class', 'form-title');
    formTitle.textContent = 'Create New Project';

    // form input fields
    const inputFields = document.createElement('div');
    inputFields.setAttribute('class', 'input-fields');
    // name
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Project Name';

    const inputName = document.createElement('input');
    inputName.setAttribute('id', 'project-name');
    nameLabel.appendChild(inputName);

    // project description
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent = 'Project Description';

    const inputDescription = document.createElement('input');
    inputDescription.setAttribute('id', 'project-description');
    descriptionLabel.appendChild(inputDescription);

    // form submission
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'project-submit');
    submitButton.textContent = 'Submit';

    inputFields.appendChild(nameLabel);
    inputFields.appendChild(descriptionLabel);

    newProject.appendChild(formTitle);
    newProject.appendChild(inputFields);
    newProject.appendChild(submitButton);
}

function eventFunctions() {
    const createNewProject = () => {
        // generate a blur effect on the main container
        // show the form for creating a new project

        // add event listener to the submit button

        // when the submit button is clicked, create a new project object and add it to the project list

        // hide the form

        // remove the blur effect

        // update the screen

    }

    const createNewTodo = () => {

        // show the form for creating a new todo
        const newForm = GenerateForm();
        const modal = document.querySelector('.modal');
        modal.classList.remove('display-none');
        document.querySelector('.modal').appendChild(newForm);

        // add event listener to the submit button
        const submitButton = document.querySelector('[data-btn-submit]');
        submitButton.addEventListener('click', () => {
            // get the values from the form
            const name = document.querySelector('#todo-name').value;
            const date = document.querySelector('#todo-date').value;
            const priority = document.querySelector('#todo-priority').checked;

            // create a new todo object
            const newTodo = TodoItem(name, date, priority);
            // add it to the todo list
            todoList.push(newTodo);
            // update the screen
            const updateScreen = renderScreen();
            updateScreen.renderGeneral();
        });

        // add event listener to the x button
        const xButton = document.querySelector('[data-btn-close]');
        xButton.addEventListener('click', () => {
            modal.classList.add('display-none');
            document.querySelector('.modal').removeChild(newForm);
        });

    }
    return { createNewProject, createNewTodo };
}

export const { createNewProject, createNewTodo } = eventFunctions();

