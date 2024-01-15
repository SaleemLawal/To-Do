// Acts as the main application module.
// Coordinates interactions between different parts of the application.
// Initializes event listeners and sets up the overall application structure.

import normalize from '../stylesheet/normalize.css'
import style from  '../stylesheet/style.css'
import getAction from './ui.js';
import { projectFunction, todoFunction } from './form.js';

// Function to initialize the application
function initApp() {
    const createProject = document.querySelector('[data-create-project-btn]');
    const createTodo = document.querySelector('[data-create-todo]');
    // need to add function that creates a new project and todo when the buttons are clicked
    createProject.addEventListener('click', projectFunction);
    createTodo.addEventListener('click', todoFunction);
}
initApp();
getAction();