const todo_list = document.querySelector('.todo_list')

class Todo {
    constructor(todo) {
        this.todo = todo
    }
    createTodo() {
        const html = `<li> ${this.todo} <a href="#"><i class="fas fa-trash-alt"></i></a></li>`
        return html
    }
    addTodo() {
        todo_list.innerHTML += this.createTodo()
    }

}