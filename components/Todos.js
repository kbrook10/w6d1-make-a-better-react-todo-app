import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TodoItem from './TodoItem'

// const Todos = (props) => {
class Todos extends Component{ //Todos is the instance and Component is the parent
    constructor(props){  //'constructor' takes in components
        super(props) //This super connects to the parent properties
        this.typing = this.typing.bind(this) //Everything time we make a new method we must use the 'bind'
        this.enter = this.enter.bind(this)
        this.markDone = this.markDone.bind(this)
        this.updatedTodos = this.updatedTodos.bind(this)
        this.state = { //Whatever does get added to state doesn't get remembered...This sets state of component
            newTodo: '', //Refers to the new Todo string
            todos: [], //Refers to the current array status
        } //These are all the things this component knows about itself...These are little variables that the component knows about itself...Metadata
    }
    componentDidMount() { //This says do something special code once view on DOM
        var localTodos = JSON.parse(localStorage.getItem('todos'))

        if (todos) { //This if means we have something...
            this.setState({
                todos: localTodos,
            });
        }
    }

    typing(e){
        // console.log('typing...')
        this.setState({
            newTodo: e.target.value //This is how we captue the properties we want to change...This allows us to transform the users input
        })
    }

    enter(e){
        if (e.key === 'Enter') {
            var updatedTodos = this.state.todos //We can't modify the state directly b/c it would override our memory...
            updatedTodos.push({ //This is the new value copy to adjust the copy of the 'this.state'
                text: e.target.value,
                done: false,
            })
            this.setState({
                newTodo: '',
                todos: updatedTodos,
            })
        }
    }

    markDone(currentTodoIndex){
        var updatedTodos = this.state.todos //Making copy of todos array
        updatedTodos[currentTodoIndex].done = !updatedTodos[currentTodoIndex].done //Tests 'true' or 'false', first pass the value is 'Not True', which is false

    }

    updateTodos(updatedTodos) {
        this.setState({
            todos: updatedTodos
        })
            localStorage.setItem('todos', JSON.stringify(updatedTodos))
    }

    render(){
        var TaskItems = this.state.todos.map((task, i) =>{ //This 'this.state' references the above instance
            return <TodoItem item={task} key={i} markDone={() => this.markDone(i)} /> //'this.markDone' this calls the function to know which item is being called done...
        })
        return (  //React renders / displays this view...
            <div>
                <div className="input-group col-sm-12">
                    <input type="text" className="form-control" placeholder="Add ToDo Item Here..." value={this.state.newTodo} onChange={this.typing} onKeyPress={this.enter} />
                    <span className="input-group-btn">
                        <button id="addBtn" className="btn btn-secondary header-btnTextColor" type="button">+ Add</button>
                    </span>
                </div>
                <div>
                    {TaskItems}
                </div>
            </div> //The 'onChange' refers to anything changing on the input field box to let the component know
        )
    }
}

export default Todos
