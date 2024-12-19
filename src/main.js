
const place = document.querySelector('todos_container')
const dialog = document.querySelector("dialog")

const create_card = document.querySelectorAll('.create_card')

create_card.forEach((card)=>{
  card.onclick =() => {
    dialog.showModal();
  };
})


const saveButton = document.querySelector('.save_card');
const closeButton = document.querySelector('.close_modal');
const cardInput = document.querySelector('.card_input');






closeButton.onclick = () => {
  dialog.close(); 
  cardInput.value = ''; 
};


saveButton.onclick = () =>{
    
}
// Находим все элементы с классом card
const cards = document.querySelectorAll('.card');


let draggedTodo = null;


document.ondragstart = (e) => {
  if (e.target.classList.contains('todo')) {
    draggedTodo = e.target;
    e.target.style.opacity = '0.5';}
};


document.ondragend = (e) => {
  if (draggedTodo) {
    draggedTodo.style.opacity = ''; 
    draggedTodo = null; 
  }
};


cards.forEach((card) => {
  card.ondragover = (e) => {
    e.preventDefault(); 
  };

  card.ondrop = (e) => {
    e.preventDefault();
    const todosContainer = card.querySelector('.todos_container');
    if (draggedTodo && todosContainer !== draggedTodo.parentElement) {
      todosContainer.appendChild(draggedTodo); // Перемещаем todo в новый контейнер
    }
  };
});
