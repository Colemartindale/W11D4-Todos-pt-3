import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions';
import { receiveSteps, receiveStep, removeStep } from './actions/step_actions';
import { allTodos } from './reducers/selectors';
import {fetchTodos, createTodo} from "./actions/todo_actions";

document.addEventListener("DOMContentLoaded", () => {
    let content = document.getElementById("root");
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
    window.store = configureStore();
    window.fetchTodos = fetchTodos;
    window.createTodo = createTodo;

    ReactDOM.render(<Root store={window.store} />, content);
    // ReactDOM.render(<App />, content);
});