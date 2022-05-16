import React from "react";
class DecrementHoverCounter extends React.Component{
    render(){
        return(
            <h1 onMouseOver={this.props.ClickHandler}>MouseOver: {this.props.counter}</h1>
        )
    }
}
export default DecrementHoverCounter