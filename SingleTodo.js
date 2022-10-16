import React ,{Component} from 'react';
class Singletodo extends Component{
    constructor(){
         super();
    
    }
    render(){
        return(
                <li>{this.props.todo}<button>Done</button></li>
        );
    }
}
export default Singletodo;