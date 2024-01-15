import Todo from './todo.js';
import Project from './project.js';
import { makeTodoItem, makeProjectItem } from './task.js';
// Manages form interactions for creating/editing to-dos and projects.
// Validates user input and triggers actions accordingly.

// template for generating forms
function generateFormTemplate(){
    const generateTodoForm = () => {
        return generateForm(
            'Create New Todo',
            [
                { id: 'todo-name', label: 'Name', type: 'text' },
                { id: 'todo-date', label: 'Date', type: 'date' },
                { id: 'todo-priority', label: 'Important?', type: 'checkbox' }
            ],
            'Submit',
            'todo'
        );
    }
    
    const generateProjectForm = () => {
        return generateForm(
            'Create New Project',
            [
                { id: 'project-name', label: 'Project Name', type: 'text' },
                { id: 'project-description', label: 'Project Description', type: 'textarea' }
            ],
            'Submit',
            'project'
        );
    }
    return { generateTodoForm, generateProjectForm };
}
// function to generate a form element based on the given parameters
function generateForm(title, fields, submitButtonText, formType) {
    const newForm = document.createElement('form');
    newForm.setAttribute('data-form', '');
    newForm.setAttribute('id', `new-${formType}`);
    newForm.setAttribute('class', 'form-container');

    // form title
    const formTitle = document.createElement('h2');
    formTitle.setAttribute('class', 'form-title');
    formTitle.textContent = title;

    newForm.appendChild(formTitle);

    // form input fields
    fields.forEach((field) => {
        const fieldDiv = document.createElement('div');
        fieldDiv.setAttribute('class', 'input-fields');
        if (field.type === 'checkbox') fieldDiv.classList.add('priority');

        const fieldLabel = document.createElement('label');
        fieldLabel.setAttribute('for', field.id);
        fieldLabel.textContent = field.label;

        const fieldInput = document.createElement(field.type === 'textarea' ? 'textarea' : 'input');
        fieldInput.setAttribute('id', field.id);

        if (field.type === 'date') {
            fieldInput.setAttribute('type', 'date');
            fieldInput.setAttribute('placeholder', 'mm/dd/yyyy');
        } else if (field.type === 'checkbox') {
            fieldInput.setAttribute('type', 'checkbox');
        }

        fieldDiv.appendChild(fieldLabel);
        fieldDiv.appendChild(fieldInput);
        newForm.appendChild(fieldDiv);
    });

    // form submission
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('data-btn-submit', '');
    submitButton.textContent = submitButtonText;

    const buttonClose = document.createElement('button');
    buttonClose.setAttribute('type', 'button');
    buttonClose.setAttribute('class', 'btn-close');
    buttonClose.setAttribute('data-btn-close', '');
    buttonClose.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z"></path></svg>
    `;
    newForm.appendChild(submitButton);
    newForm.appendChild(buttonClose);

    return newForm;
}

// function to perform actions based on the form that was submitted
function performAction(formElement) {
    const modal = document.querySelector('.modal');
    modal.classList.remove('display-none');
    document.querySelector('.modal').appendChild(formElement);

    const xButton = document.querySelector('[data-btn-close]');
    xButton.addEventListener('click', () => {
        modal.classList.add('display-none');
        document.querySelector('.modal').removeChild(formElement);
    });

    // listen for form submission
    const submitButton = document.querySelector('[data-btn-submit]');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.querySelector('[data-form]');
        if (form.id === 'new-todo') {
            const todoName = document.getElementById('todo-name').value;
            const todoDate = document.getElementById('todo-date').value;
            const todoPriority = document.getElementById('todo-priority').checked;

            // validate user input
            if (todoName === '' || todoDate === '') {
                alert('Please fill out all fields.');
                return;
            }else{
                // create new todo
                const newTodo = new Todo(todoName, todoDate, todoPriority);
                const newTodoItem = makeTodoItem(newTodo);
                const todoList = document.querySelector('[data-task-list]');
                todoList.appendChild(newTodoItem);

            }
           
        }else{
            const projectName = document.getElementById('project-name').value;
            const projectDescription = document.getElementById('project-description').value;

            // validate user input
            if (projectName === '' || projectDescription === '') {
                alert('Please fill out all fields.');
                return;
            }else{
                // create new project
                const newProject = new Project(projectName, projectDescription);
                const newProjectItem = makeProjectItem(newProject);
                const projectList = document.querySelector('[data-project-list]');
                projectList.appendChild(newProjectItem);
            }
        }
        modal.classList.add('display-none');
        document.querySelector('.modal').removeChild(formElement);
    });
}

// function to handle event listeners for the form
function eventFunctions() {
    const projectFunction = () => {
        const newProject = generateFormTemplate().generateProjectForm();
        performAction(newProject);
    }

    const todoFunction = () => {
        // show the form for creating a new todo
        const newForm = generateFormTemplate().generateTodoForm();
        performAction(newForm);
    }
    return { projectFunction, todoFunction };
}

export const { projectFunction, todoFunction } = eventFunctions();

