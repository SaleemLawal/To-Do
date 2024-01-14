// Defines a Todo class to represent individual to-do items.
// Includes properties like title, dueDate, priority, notes, and checklist.
// Also includes methods to edit any of these properties.

export default function createTodo(title, dueDate, priority){
    const makeTodo = () => {
        let title = title
        let dueDate = dueDate
        let priority = priority
        return {title, dueDate, priority}
    }
    const editTitle = (newTitle) => {
        title = newTitle
    }
    const editDueDate = (newDueDate) => {
        dueDate = newDueDate
    }
    const editPriority = (newPriority) => {
        priority = newPriority
    }
    const getTitle = () => title
    const getDueDate = () => dueDate
    const getPriority = () => priority

    return {makeTodo, editTitle, editDueDate, editPriority, getTitle, getDueDate, getPriority}
}