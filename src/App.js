import React, { Component } from 'react';

import { todos } from "./data"; 

import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  render() {
    return (
      <div>
        <h2>Keep your kitty organized with Catodos. Get started right meow!</h2>
        <TodoList 
        todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
