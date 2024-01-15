// Acts as the main application module.
// Coordinates interactions between different parts of the application.
// Initializes event listeners and sets up the overall application structure.

import normalize from '../stylesheet/normalize.css'
import style from  '../stylesheet/style.css'
import getAction from './ui.js';
import { createNewProject, createNewTodo } from './form.js';

// Function to initialize the application
function initApp() {
    // const createProject = document.querySelector('[data-create-project-btn]');
    // // need to add function that creates a new project
    // createProject.addEventListener('click', );

    // data action buttons
    // const actionButtons = document.querySelector('[data-action-buttons]');

    // toggle between all todo and important todo
    // const toggle = document.querySelector('[data-btn-toggle]');
    // toggle.addEventListener('click', );

    // create todo
    const createTodo = document.querySelector('[data-create-todo]');

    createTodo.addEventListener('click', createNewTodo);

}
initApp();
getAction();