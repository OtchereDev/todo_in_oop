const todo_form = document.querySelector('form')
const todo_filter = document.querySelector('#todo_filter')

// function for localStorage
function loadTodo() {

    if (localStorage.getItem('todo') !== null) {
        const LSTodo = JSON.parse(localStorage.getItem('todo'))

        LSTodo.forEach(todo => {
            const todoObject = new Todo(todo)
            todoObject.addTodo()
        })

    }

}

loadTodo()

function addTodoLS(todo) {

    if (localStorage.getItem('todo') !== null) {
        const LSTodo = JSON.parse(localStorage.getItem('todo'))
        console.log(LSTodo)
        LSTodo.push(todo)
        localStorage.setItem('todo', JSON.stringify(LSTodo))

    } else {
        const LSTodo = []
        LSTodo.push(todo)
        localStorage.setItem('todo', JSON.stringify(LSTodo))
    }


}

// delete Todo from LS

function TodoLSDelete(todo_text) {


    if (localStorage.getItem('todo') !== null) {
        const LSTodo = JSON.parse(localStorage.getItem('todo'))
        LSTodo.forEach((todo, idx) => {
            if (todo.trim() === todo_text.trim()) {
                const index = idx;
                LSTodo.splice(index, 1)


            }
        })
        localStorage.setItem('todo', JSON.stringify(LSTodo))

    }

}

todo_form.addEventListener('submit', e => {
    e.preventDefault()
    const todo = todo_form.todo.value
    if (todo.trim()) {
        const todoObject = new Todo(todo)
        todoObject.addTodo()
            // set to local storage
        addTodoLS(todo)
        todo_form.reset()
    }
})

todo_list.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        TodoLSDelete(
            e.target.parentElement.parentElement.textContent.slice(0, -1))
        e.target.parentElement.parentElement.remove()
    }
})

function filterTodo(term) {
    Array.from(todo_list.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo) => {
            todo.classList.add('filter')
        })

    Array.from(todo_list.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach(todo => {
            todo.classList.remove('filter')
        })
}

todo_filter.addEventListener('keyup', e => {
    filterTodo(todo_filter.value)
})