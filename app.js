// const todo_list = document.querySelector('.todo_list')
const todo_form = document.querySelector('form')

// localStorage.getItem

todo_form.addEventListener('submit', e => {
    e.preventDefault()
    const todo = todo_form.todo.value
    if (todo.trim()) {
        const todoObject = new Todo(todo)
        todoObject.addTodo()
        localStorage.setItem(todo, todo)
        todo_form.todo.value = ''
    }
})

todo_list.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        e.target.parentElement.parentElement.remove()
    }
})