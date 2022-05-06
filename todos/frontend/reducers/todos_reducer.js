import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';
import { receiveTodos, receiveTodo } from '../actions/todo_actions';


const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {

        case RECEIVE_TODOS:
          action.todos.forEach( (todo) => {
            nextState[todo.id] = todo;
          })
          return nextState;

        case RECEIVE_TODO:
          nextState[action.todo.id] = action.todo;
          return nextState;

        case REMOVE_TODO:
            delete nextState[action.id];
          return nextState;

        default:
          return state;
    } 
};

export default todosReducer;