export default function initStorage() {
    const categories = ['project', 'generalTodos', 'todayTodos', 'upcomingTodos', 'completedTodos', 'deletedTodos'];

    categories.forEach(category => {
        if (!localStorage[category]) {
            localStorage.setItem(category, JSON.stringify([]));
        }
    });
}

function saveTodoUpdate(category, updatedTodo, update) {
    const todos = JSON.parse(localStorage.getItem(category)) || [];
    
    // Find the index of the todo to be updated
    const todoIndex = todos.findIndex(curr => curr.id === updatedTodo.id);

    // If the todo is found, replace it; otherwise, push the new todo
    if (todoIndex !== -1 && update === 'Append') {
        todos.splice(todoIndex, 1, updatedTodo);
    } else if (todoIndex !== -1 && update === 'Delete') {
        todos.splice(todoIndex, 1);
    }else{
        todos.push(updatedTodo);
    }

    // Save the updated array back to local storage
    localStorage.setItem(category, JSON.stringify(todos));
}

function getTodos(category) {
    return JSON.parse(localStorage.getItem(category));
}

export function saveGeneralTodos(todo, update) {
    saveTodoUpdate('generalTodos', todo, update);
}

export function getGeneralTodos() {
    return getTodos('generalTodos');
}

export function saveProject(project) {
    saveTodoUpdate('project', project);
}

export function getProject() {
    return getTodos('project');
}

export function saveTodayTodos(todo) {
    saveTodoUpdate('todayTodos', todo);
}

export function getTodayTodos() {
    return getTodos('todayTodos');
}

export function saveUpcomingTodos(todo) {
    saveTodoUpdate('upcomingTodos', todo);
}

export function getUpcomingTodos() {
    return getTodos('upcomingTodos');
}

export function saveCompletedTodos(todo) {
    saveTodoUpdate('completedTodos', todo);
}

export function getCompletedTodos() {
    return getTodos('completedTodos');
}

export function saveDeletedTodos(todo) {
    saveTodoUpdate('deletedTodos', todo);
}

export function getDeletedTodos() {
    return getTodos('deletedTodos');
}
