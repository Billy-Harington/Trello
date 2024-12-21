import { TaskType } from "../utils/types"

export function Todo(item: TaskType) {
    const todo = document.createElement('div')
    const p = document.createElement('p')

    todo.classList.add('todo')
    todo.draggable = true
    p.innerHTML = item.description


    todo.ondragstart = () => {
        setTimeout(() => {
            todo.style.display = "none"
            todo.id = "active"
        }, 0)

    }

    todo.ondragend = () => {
        todo.style.display = "block"
        todo.id = ""
    }

    todo.append(p)
    return todo
}