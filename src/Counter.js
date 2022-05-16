import React from "react";

class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            counter:1000
        }
    }
    ClickHandler=()=>{
        this.setState((prevState)=>{
            return{ counter: prevState.counter-1 }
        });
    }
    render(){
        return(
            <div>{this.props.render(this.ClickHandler,this.state.counter)}</div>
        )
    }
}
export default Counter