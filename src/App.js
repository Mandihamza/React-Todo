import React, { Component } from 'react';

import { todos } from "./data"; 
import "./components/Todo.css"

import TodoList from './components/TodoList';

class App extends Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  toggleTodo = itemId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (itemId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Keep your kitty organized with Catodos. Get started right meow!</h2>
        <TodoList 
        todos={this.state.todos}
        toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
