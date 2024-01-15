// Manages the user interface, including DOM manipulation.
// Handles dynamic rendering of projects, to-dos, and forms.
// Listens for user interactions (e.g., button clicks) and triggers corresponding actions.

// Function to handle user actions and navigate the page
export default function getAction() {
    // adds event listener to the divs in the home-actions container
    const mainActions = document.querySelectorAll('[data-actions]');
    mainActions.forEach(action => {
        action.addEventListener('click', (event) => {
            event.preventDefault();
            const actionClicked = event.currentTarget.querySelector('p').innerHTML;
            navigatePage(actionClicked);
        });
    });
}

// Function to update the screen based on user action
function navigatePage(clicked){
    const title = document.querySelector('[data-title]');
    title.innerHTML = clicked;
    title.setAttribute('data-title', clicked);
    const updateScreen = renderScreen();

    switch (clicked) {
        case 'General':
            updateScreen.renderGeneral();
            break;
        case 'Today':
            updateScreen.renderToday();
            break;
        case 'Upcoming':
            updateScreen.renderUpcoming();
            break;
        case 'Completed':
            updateScreen.renderCompleted();
            break;
        case 'Trash':
            updateScreen.renderTrash();
            break;
        default:
            console.error(`Unhandled action: ${clicked}`);
            break;
    }
}

// Function to render different screens
function renderScreen(){
    const mainContainer = document.querySelector('[data-right-container]');
    const pTag = mainContainer.querySelector('[data-description]');
    const getActionButtons = mainContainer.querySelector('[data-action-buttons]');

    const renderGeneral = () => {
        pTag.innerHTML = 'A general list of tasks';
        if (!getActionButtons) {
            // need to make a new div and generate the buttons, then append it before task-list in main-container div
            const actionButtons = document.createElement('div');
            actionButtons.setAttribute('data-action-buttons', '');
            actionButtons.classList.add('action-buttons');

            // make the buttons
            const allButton = document.createElement('button');
            allButton.classList.add('toggle');
            allButton.textContent = 'All';

            // make create to do button
            const createButton = document.createElement('button');
            createButton.classList.add('create-tasks');
            createButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"></path></svg>
                Create Todo
            `
            // append to the actionButtons div
            actionButtons.appendChild(allButton);
            actionButtons.appendChild(createButton);

            // append to the main container
            mainContainer.insertBefore(actionButtons, mainContainer.querySelector('[data-task-list]'));
        }
        // Render all tasks to be done
    }
    
    const renderToday = () =>{
        pTag.innerHTML = 'A list of tasks for today';
        if (getActionButtons){
            mainContainer.removeChild(getActionButtons);
        }
         
        // render task to be done today
    }
    const renderUpcoming = () =>{
        pTag.innerHTML = 'A list of tasks for the future';
        //  = mainContainer.querySelector('[data-action-buttons]');
        if (getActionButtons){
            mainContainer.removeChild(getActionButtons);
        }
        // render task to be done in the future
    }
    const renderCompleted = () =>{
        pTag.innerHTML = 'A list of completed tasks';
        if (getActionButtons){
            mainContainer.removeChild(getActionButtons);
        }
        // render task done
    }
    const renderTrash = () =>{
        pTag.innerHTML = 'A list of deleted tasks';
       if (getActionButtons){
            mainContainer.removeChild(getActionButtons);
        }
        // render task deleted
    }

    return {renderGeneral, renderToday, renderUpcoming, renderCompleted, renderTrash}
}


