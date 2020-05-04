import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid/v4';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/About';
class App extends Component { 
  
  constructor(props){
    super(props);
    this.state = {
      todos:[
        {
          id: 0,
          title:'React App',
          completed: false
        },
        {
          id: 1,
          title:'skillrack',
          completed: false
        },
        {
          id: 2,
          title:'complete sql exercise',
          completed: false
        },
      ]
    }
    

  
  

  }
  

  //completed todos toggle
  markComplete=(index)=>{
    // this.setState({todos: this.state.todos.map((todo,idx )=> {
    //   if(idx === index) {
    //     todo.completed = !todo.completed
    //   }
    //   return todo;
    // })});

    let list = [...this.state.todos]
    list.map((item,idx)=> {
      if(idx === index){
        list[idx].completed = !list[idx].completed;
      }
    });
    this.setState({todos: list})
  }

  //delete todo
  delTodo=(index)=>{
    this.setState({ todos:[...this.state.todos.filter((todo,idx) => idx!==index
      )]
  });
  }

  //addTodo
  addTodo= (title) => {
    const newtodo = {
      id: this.state.todos.length,
      title: title,
      completed: false
    }
    this.setState({todos:[...this.state.todos, newtodo]});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props=>(
              <React.Fragment>
                <AddTodo addTodo = {this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} 
                delTodo={this.delTodo}/>

              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
            
          </div>
        </div>  
      </Router>
    );
  }
}

export default App;
