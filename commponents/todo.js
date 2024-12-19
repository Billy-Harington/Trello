function Todo(item) {
    const todo = document.createElement('div')
    const p = document.createElement('p')
    
    todo.classList.add('todo')
    todo.draggable = "true"
    p.innerText = item

    todo.append(p)
    return todo
}