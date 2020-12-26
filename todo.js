const todo_list = document.querySelector('.todo_list')

class Todo {
    constructor(todo) {
        this.todo = todo
    }
    createTodo() {
        const html = `<li> ${this.todo} <span><a href="#">X</a></span></li>`
        return html
    }
    addTodo() {
        todo_list.innerHTML += this.createTodo()
    }
    deleteTodo(e) {
        e.target.parentElement.parentElement.remove()
    }
}