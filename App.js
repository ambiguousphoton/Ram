import logo from './logo.svg';
import './App.css';
import Singletodo from './SingleTodo';
import React, { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state ={
       todos: [],
       currenttodo: ""
    };
  }
  onInputChange = e =>{
    this.setState({currenttodo: e.target.value})
  }

  onClk =  () =>{
     let todoscopy = this.state.todos.slice();
     todoscopy.push(this.state.currenttodo);
     this.setState({todos:todoscopy, currenttodo:""});
  }

  render() {
    let bulletedtodo  = this.state.todos.map((e,i)=>{
      return(
        < Singletodo todo={e}/>
      );
  });


    return(
    <div>
       <input placeholder='enter todo'   value={this.state.currenttodo}  onChange={this.onInputChange}/>
       <button onClick={this.onClk}>ADD!</button>
       <br/>
       {this.state.todos.length === 0 ? " => No todos yet" :<ul>{bulletedtodo}</ul>}
    </div>
    );
  }
}

export default App;
