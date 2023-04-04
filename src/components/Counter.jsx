import React from "react";

class Counter extends React.Component {
    render(){
        return (
            <div className="row text-white" style={{padding: "1em"}}>
                <h1>Counter: </h1>
                    <button style={{width:"200px"}}>+1</button>
                    <button style={{width:"200px"}}>-1</button>
            </div>
        )
    ;}
}

export default Counter