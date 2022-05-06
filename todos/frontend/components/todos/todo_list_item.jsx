import React from 'react';

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li> 
                <h1>{this.props.todo.title}</h1>
                <button onClick={ () => this.props.removeTodo(this.props.todo.id) }>
                        DELETE
                </button>
            </li>);
    }
}

