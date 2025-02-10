import { Component } from "react"

class Counter extends Component{
    constructor(){
        super()
            this.state={
                count:0
            }
    }

    handleIncrement=()=>{
        this.setState({count:this.state.count+1})

    }
    handledecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    handlereset=()=>{
        this.setState({count:0})
    }



 render(){
    return(
    <div>
        <h1>counter:{this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handlereset}>Reset</button>
        <button onClick={this.handledecrement}>-</button>
    </div>
    )
 }

}export  default Counter
