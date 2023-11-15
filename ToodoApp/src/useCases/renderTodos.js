import { Todo } from "../todos/models/todo.model";
import { createTodoHtml } from "./createTodoHtml";

let element;

/**
 * Funcion que muestra los todos
 * @param {String} elementIdHtml 
 * @param {Todo} todos 
 */
export const renderTodos = (elementIdHtml, todos = []) => {

  //TODO: referencia al html
  if(!element) 
    element = document.querySelector(elementIdHtml);

  if (!element) throw new Error(`Element ${elementIdHtml} is required`);

  //? purgando el contenido del renderTodo
  element.innerHTML = '';

  todos.forEach( todo => {
    element.append(createTodoHtml(todo));
  });
}
