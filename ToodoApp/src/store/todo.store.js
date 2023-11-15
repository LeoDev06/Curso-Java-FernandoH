import {Todo} from '../todos/models/todo.model';

export const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending'
}

const state = {
  todos:[],
  filter: Filters.All,
}

const initStore = () => {
  loadStore();
  console.log('Init Store 🥑')
}

const loadStore = () => {
  //verificar si existe el state
  if(!localStorage.getItem('state')) return;

  const { todos = [], filter = Filters.All } = JSON.parse( localStorage.getItem('state') );
  state.todos = todos;
  state.filter = filter;
}

const saveStateLocalStorage = () => {
  localStorage.setItem('state', JSON.stringify(state));
}

const addTodos = (description) => {
  if(!description) throw new Error("Description is required");
  state.todos.push( new Todo(description));

  saveStateLocalStorage();
}

const getTodos = ( filter = Filters.All) =>{
  switch(filter){
    case Filters.All:
      return [...state.todos];
    
    case Filters.Completed:
      return state.todos.filter( todo => todo.done);

    case Filters.Pending:
      return state.todos.filter( todo => !todo.done);
    
    default:
      throw new Error(`Option ${filter} not valid.`);
  }
}

const toggleTodo = (todoId) => {
  if(!todoId) throw new Error('Id of element is required');
  
  state.todos = state.todos.map((todo) => {
    if(todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });

  saveStateLocalStorage();
}

const deleteTodo = (todoId) => {
  if(!todoId) throw new Error('The id was not found');
  state.todos = state.todos.filter(todo => todo.id !== todoId);
  saveStateLocalStorage();
}

const deleteCompleted = () => {
  state.todos = state.todos.filter(todos => !todos.done);
  saveStateLocalStorage();
}

const selectedFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
  saveStateLocalStorage();
}

const getCurrentFilter = () => {
  return state.filter;
}

export default {
  initStore,
  loadStore,
  addTodos,  
  deleteTodo,
  deleteCompleted,
  getTodos,
  toggleTodo,
  selectedFilter,
  getCurrentFilter,
}