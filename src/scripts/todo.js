// Defines a Todo class to represent individual to-do items.
// Includes properties like title, dueDate, priority, notes, and checklist.
// Also includes methods to edit any of these properties.

export default class Todo {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    editTitle(newTitle) {
        this.title = newTitle;
    }

    editDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    editPriority(newPriority) {
        this.priority = newPriority;
    }

    getTitle() {
        return this.title;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }
}


