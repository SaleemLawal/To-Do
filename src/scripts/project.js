// Defines a Project class to represent projects or separate lists of to-dos.
// Manages the collection of to-dos within a project.
// Includes methods for adding, updating, and deleting to-dos within the project.
class Project{
    constructor (title, description){
        this.title = title
        this.description = description
        this.todos = []
    }
    addTodo (todo){
        this.todos.push(todo)
    }
    removeTodo (todo){
        this.todos.splice(this.todos.indexOf(todo), 1)
    }
    editTitle(title){
        this.title = title
    }
    editDescription(description){
        this.description = description
    }
    getTitle(){
        return this.title
    }
    getTodos(){
        return this.todos
    }
    getDescription(){
        return this.description
    }
}
export {Project}