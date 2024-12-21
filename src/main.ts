import { Todo } from "./commponents/todo";
import { ApiClient } from "./utils/apiCall";
import { reload } from "./utils/reload";
import { TaskType } from "./utils/types";

const dialog = document.querySelector<HTMLDialogElement>('dialog');
const createCards = document.querySelectorAll<HTMLDivElement>('.create_card');
const taskForm = document.forms.namedItem('taskForm')

const apiClient = new ApiClient("http://localhost:8080")
const places = document.querySelectorAll<HTMLElement>('.todos_container') as NodeListOf<HTMLElement>;
const todos = await apiClient.read('/todos') as Array<TaskType>

for (const place of places) {
  const parent = place.parentElement as HTMLElement
  place.ondragover = (e) =>{
    e.preventDefault()




  }
  place.ondrop = () =>{
    const activeTask = document.querySelector('#active') as HTMLElement

    place.append(activeTask)
  }
}


if (taskForm) {
  taskForm.onsubmit = async (e) => {
    e.preventDefault()

    const fm = new FormData(taskForm)

    const task = {
      id: crypto.randomUUID(),
      createdAT: new Date().toLocaleDateString(),
      updatedAT: new Date().toLocaleDateString(),

    }

    fm.forEach((val: any, key: any) => task[key] = val)

    apiClient.create('/todos', task)
      .then(async () => {
        apiClient.read('/todos')
        const todos = await apiClient.read('/todos') as Array<TaskType>
        reload({ arr: todos, commponent: Todo, places: places })

        taskForm.reset()

      })

  }
}

reload({ arr: todos, commponent: Todo, places: places })


// modal and sidebar scripts
const saveButton = document.querySelector<HTMLElement>('.submit');
const closeButton = document.querySelector<HTMLElement>('.reject');
const cardInput = document.querySelector<HTMLInputElement>('.card_input');

createCards.forEach((card) => {
  card.onclick = () => {
    dialog?.showModal();
  };
});

closeButton?.addEventListener('click', () => {
  dialog?.close();
  if (cardInput) cardInput.value = '';
});

saveButton?.addEventListener('click', () => {
  dialog?.close()
});

const sidebar = document.querySelector<HTMLElement>('.sidebar')
const main_side = document.querySelector<HTMLDivElement>('.main_side')
const hide = document.querySelector<HTMLElement>('.arrow-button')
const show = document.querySelector<HTMLDivElement>('.returnSlider')



hide?.addEventListener('click', () => {
  if (sidebar && main_side && show) {
    sidebar.style.width = "0";
    main_side.style.width = "100%"
    show.style.display = "block"
  }


})
show?.addEventListener('click', () => {
  if (sidebar && main_side && show) {
    sidebar.style.width = "20%";
    main_side.style.width = "80%"
    show.style.display = "none"
  }
})