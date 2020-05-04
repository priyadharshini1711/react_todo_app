import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  markComplete=() => {
    console.log('Hello')
  }

  render() {
      return this.props.todos.map((todo,index)=>(
      <TodoItem index={index} key={index} todo={todo} markComplete={this.props.markComplete} delTodo={() =>this.props.delTodo(index)}/>
      ));
  }
}

//Prop types
// Todos.proptypes = {
//     todos: PropTypes.array.isRequired
// }

export default Todos;

