import React from "react";
import DecrementClickCounter from "./DecrementClickCounter";
import DecrementHoverCounter from "./DecrementHoverCounter";
import Counter from "./Counter";
class App extends React.Component {
  render(){
  return (
    <>
    <Counter render={(decrementEvent,counter)=><DecrementClickCounter ClickHandler={decrementEvent}counter={counter}/>}/>
    <Counter render={(decrementEvent,counter)=><DecrementHoverCounter ClickHandler={decrementEvent}counter={counter}/>}/>
    </>
  );
  }
}

export default App;
