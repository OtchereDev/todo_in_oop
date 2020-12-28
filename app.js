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
// function TodoLSDelete(todos, todo_text) {
//     const todo_lists = JSON.parse(todos)
//     console.log(todo_lists)
//     todo_lists.forEach((todo, idx) => {
//         if (todo.trim() === todo_text.trim()) {
//             const index = idx;
//             todo_lists.splice(index, index)
//             localStorage.setItem('todo', JSON.stringify(todo_lists))
//                 // console.log(todo)

//         } else {


//         }

//     })

// }

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
        // TodoLSDelete(localStorage.getItem('todo'),
        //     e.target.parentElement.parentElement.textContent.slice(0, -1))
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