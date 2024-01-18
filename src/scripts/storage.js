export default function initStorage() {
    const categories = ['project', 'generalTodos', 'todayTodos', 'upcomingTodos', 'completedTodos', 'deletedTodos'];

    categories.forEach(category => {
        if (!localStorage[category]) {
            localStorage[category] = JSON.stringify([]);
        }
    });
}

function saveTodo(category, todo) {
    const todos = JSON.parse(localStorage[category]);
    todos.push(todo);
    localStorage[category] = JSON.stringify(todos);
}

function getTodos(category) {
    return JSON.parse(localStorage[category]);
}

export function saveGeneralTodos(todo) {
    saveTodo('generalTodos', todo);
}

export function getGeneralTodos() {
    return getTodos('generalTodos');
}

export function saveProject(project) {
    saveTodo('project', project);
}

export function getProject() {
    return getTodos('project');
}

export function saveTodayTodos(todo) {
    saveTodo('todayTodos', todo);
}

export function getTodayTodos() {
    return getTodos('todayTodos');
}

export function saveUpcomingTodos(todo) {
    saveTodo('upcomingTodos', todo);
}

export function getUpcomingTodos() {
    return getTodos('upcomingTodos');
}

export function saveCompletedTodos(todo) {
    saveTodo('completedTodos', todo);
}

export function getCompletedTodos() {
    return getTodos('completedTodos');
}

export function saveDeletedTodos(todo) {
    saveTodo('deletedTodos', todo);
}

export function getDeletedTodos() {
    return getTodos('deletedTodos');
}
