import React, { Component } from 'react';

class TodoItem extends Component {
    getStyle = (isCompleted) =>{
        console.log(this.props.todo.completed);
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: isCompleted ?
            'line-through' : 'none'
        }
    }
    
  render() {
      const {title,completed } = this.props.todo;
      const {index} = this.props;
      
      return (
          <div style={this.getStyle(this.props.todo.completed)}>
              <p>
                  <input 
                    checked={completed} 
                    type="checkbox" 
                    onChange={() => this.props.markComplete(index)} />{' '} {title}
                  <button onClick={this.props.delTodo} style={btnStyle} >x</button>
                  </p>
          </div>


      );
  }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border:'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',

}



export default TodoItem;
