import normalize from '../stylesheet/normalize.css'
import style from  '../stylesheet/style.css'
import navigation from './ui.js';
import { makeProject, makeTodo } from './form.js';
import initStorage from './storage.js';
import {renderGeneral} from './ui.js';

// initialize local storage
initStorage();
renderGeneral();

// Function to initialize the application
export default function createButtonListener() {
    // gets the create buttons for projects and todos
    const createProject = document.querySelector('[data-create-project-btn]');
    const createTodo = document.querySelector('[data-create-todo]');
    // add event listeners to the create buttons
    createProject.addEventListener('click', makeProject);
    // check if the create todo button exists
    if (createTodo) createTodo.addEventListener('click', makeTodo);
}


// localStorage.clear();
navigation();
