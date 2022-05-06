import React from 'react';
import { uniqueId } from '../../util/util';

export default class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            title: "",
            body: ""
        }
    }

    handleChange(key) {
        return (event) => {
            
            this.setState({[key]: event.target.value})
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.createTodo(Object.assign({done:false},this.state)).then(
            ()=> this.setState({title: '', body:''})
        )
    }
    

    render() {
        return <div>

            <h1>TodoForm</h1>
            <form onSubmit={this.handleSubmit} > 
                <input type="text" placeholder="Enter Title: " value={this.state.title} onChange={this.handleChange("title")}>
                    
                </input>
                <input type="text" placeholder="Enter Body: " value={this.state.body} onChange={this.handleChange("body")}>

                </input>

                <button>Submit</button>
            </form>
        </div>

    }
}