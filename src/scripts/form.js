// Manages form interactions for creating/editing to-dos and projects.
// Validates user input and triggers actions accordingly.
function GenerateForm(){
    // form creation 
    const newForm = document.createElement('form');
    newForm.setAttribute('id', 'new-form');
    newForm.setAttribute('class', 'form');
    newForm.setAttribute('action', '#');
    newForm.setAttribute('method', 'post');

    // form title
    const formTitle = document.createElement('h2');
    formTitle.setAttribute('class', 'form-title');
    formTitle.textContent = 'Create New Todo';

    // form input fields
    const inputFields = document.createElement('div');
    inputFields.setAttribute('class', 'input-fields');
    // name
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name';

    const inputName = document.createElement('input');
    inputName.setAttribute('id', 'todo-name');
    nameLabel.appendChild(inputName);

    // date
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'Date';

    const inputDate = document.createElement('input');
    inputDate.setAttribute('id', 'todo-date');
    inputDate.setAttribute('type', 'date');
    inputDate.setAttribute('placeholder', 'mm/dd/yyyy');
    dateLabel.appendChild(inputDate);

    // priority
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Important?';

    const inputPriority = document.createElement('input');
    inputPriority.setAttribute('type', 'checkbox');
    inputPriority.setAttribute('id', 'todo-priority');

    priorityLabel.appendChild(inputPriority);

    // form submission
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'todo-submit');
    submitButton.textContent = 'Submit';

    inputFields.appendChild(nameLabel);
    inputFields.appendChild(dateLabel);
    inputFields.appendChild(priorityLabel);

    newForm.appendChild(formTitle);
    newForm.appendChild(inputFields);
    newForm.appendChild(submitButton);

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

export { GenerateForm, GenerateProject };
