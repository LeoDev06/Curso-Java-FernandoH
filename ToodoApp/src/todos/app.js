// *!Importando html usamos raw para importar 
// *!el archivo en crudo sin necesidad de que 
// *!sea una funcion de javaScript
import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store';
import { renderTodos } from '../useCases/renderTodos';
import { renderPendingTodo } from '../useCases/renderPendingTodo';

const elementIDsHtml = {
  TodoInput: '#new-todo-input',
  TodoPendingCount: '#pending-count',

  TodoList: '.todo-list',
  TodoFilters: '.filtro',
  TodoDeleteComplete: '.clear-completed',
}

/**
 * Funcion principal de la aplicacion
 * @param {String} elementIdHtml 
 */

export const App = (elementIdHtml) => {

  const updatePendingCount = () => {
    renderPendingTodo(elementIDsHtml.TodoPendingCount);
  }
  
  //TODO: Estamos mostrando todos los todos
  const DisplayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(elementIDsHtml.TodoList, todos);
    updatePendingCount();
  }

  // ? Cuando la funcion app se llama
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementIdHtml).append(app);
    DisplayTodos();
  })();

  //! REFERENCIAS HTML
  const newDescriptionInput = document.querySelector(elementIDsHtml.TodoInput);
  const todoListUL = document.querySelector(elementIDsHtml.TodoList);
  const todoFilter = document.querySelectorAll(elementIDsHtml.TodoFilters);
  const deleteCompleted = document.querySelector(elementIDsHtml.TodoDeleteComplete);

  //! Listeners
  newDescriptionInput.addEventListener( 'keyup', (event) =>{
    //Al oprimir enter tenemos que 13 es el valor de la tecla enter en el event
    if (event.keyCode !== 13) return;
    //Validando que el todo no venga vacio o con espacios
    if(event.target.value.trim().length === 0) return;

    todoStore.addTodos(event.target.value);
    DisplayTodos();

    //Purgamos el input
    event.target.value = '';
  });

  todoListUL.addEventListener('click',(event) => {
    //Recuperando el elemento data-id del padre mas cercano mediante closest
    const elementID = event.target.closest('[data-id]');
    //Recuperamos unicamente el id del todo seleccionado y cambiamos el estado
    todoStore.toggleTodo(elementID.getAttribute('data-id'));
    DisplayTodos();
  });

  todoListUL.addEventListener('click',(event) => {
    const isDestroyElement = event.target.className === 'destroy';
    const elementID = event.target.closest('[data-id]');
    if ( !elementID || !isDestroyElement ) return;

    todoStore.deleteTodo(elementID.getAttribute('data-id'));
    DisplayTodos();
  });

  deleteCompleted.addEventListener('click', () => {
    todoStore.deleteCompleted();
    DisplayTodos();
  });

  todoFilter.forEach(element => {
    element.addEventListener('click', (element) =>{
      todoFilter.forEach(elementhtml => elementhtml.classList.remove('selected'))
      element.target.classList.add('selected');

      switch(element.target.text){
        case 'Todos':
          todoStore.selectedFilter(Filters.All);
        break;

        case 'Pendientes':
          todoStore.selectedFilter(Filters.Pending);
        break;

        case 'Completados':
          todoStore.selectedFilter(Filters.Completed);
        break;
      }

      DisplayTodos();
    });
  });
}