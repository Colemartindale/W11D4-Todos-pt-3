export const fetchTodos = () => (
    $.ajax({
        url: '/api/todos',
        method: 'GET'
    })
)

export const createTodo = (todo) => (
    $.ajax({
        url: '/api/todos',
        method: 'POST',
        data: {
            todo: todo
        }
    })
)