import React from "react";
class DecrementClickCounter extends React.Component{
    render(){
        return(
            <button onClick={this.props.ClickHandler}>Click: {this.props.counter}</button>
        )
    }
}
export default DecrementClickCounter