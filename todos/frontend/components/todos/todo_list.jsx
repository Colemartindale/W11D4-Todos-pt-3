import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import { uniqueId } from '../../util/util';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTodos();
    };

    render() {
        let todos = this.props.todos;
        return (
            <div> 
               <ul>
                    {todos.map(todo=> {
                        return (<TodoListItem todo={todo} removeTodo={this.props.removeTodo} receiveTodo={this.props.receiveTodo} key={todo.id} />)
                    })}
                </ul> 
                <TodoForm createTodo={this.props.createTodo} receiveTodo={this.props.receiveTodo} />
            </div>
        )
    }
}


export default TodoList;