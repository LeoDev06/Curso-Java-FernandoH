import todoStore, { Filters } from "../store/todo.store";


let element;

/**
 * Actualiza el contador de las tareas pendientes
 * @param {String} elementIdHtml 
 */
export const renderPendingTodo = (elementIdHtml) => {
  if(!element)
    element = document.querySelector(elementIdHtml);

  if(!element) throw new Error(`Element ${elementIdHtml} not found`);

  element.innerHTML = todoStore.getTodos(Filters.Pending).length;

}
