import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAttack=this.handleAttack.bind(this);
        this.handleDefense=this.handleDefense.bind(this);
        this.state = {
            count: 0,
        };
    }

    handleAttack(){
        //alert("Attack clicked");
        this.setState({ count: this.state.count + 1})
    }
    handleDefense(){
        //alert("Defense clicked");
        this.setState({ count: this.state.count - 1})
    }
    render(){
        return (
            <div className="row text-white" style={{padding: "1em"}}>
                <h1>Counter: {this.state.count}</h1>
                    <button onClick={this.handleAttack} style={{width:"200px"}}>+1</button>
                    <button onClick={this.handleDefense} style={{width:"200px"}}>-1</button>
            </div>
        )
    ;}
}

export default Counter