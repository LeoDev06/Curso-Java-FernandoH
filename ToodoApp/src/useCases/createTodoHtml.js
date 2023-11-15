import { Todo } from "../todos/models/todo.model";

/**
 * Creacion de un todo en el dom
 * @param {Todo} todo 
 */

export const createTodoHtml = (todo) => {
  if(!todo) throw new Error('Todo is required');

  const {done, description, id} = todo;

  const html = `
    <div class="view">
        <input class="toggle" type="checkbox" ${ done ? 'checked': ''}>
        <label>${ description }</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  `;

  const elementList = document.createElement('li');
  elementList.innerHTML = html;
  elementList.setAttribute('data-id', id);

  if(todo.done) elementList.classList.add('completed');


  return elementList;
}
