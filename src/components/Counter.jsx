import React from "react";
import attack from "../images/attack.png"
import defend from "../images/defend.png"

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAttack=this.handleAttack.bind(this);
        this.handleDefense=this.handleDefense.bind(this);
        this.state = {
            count: 0,
        };
    }

    handleAttack = () => {
        //alert("Attack clicked");
        this.setState((previousState) => {
            let newCount = previousState.count + Math.round(Math.random() * 10);
            return {
                count: newCount,
            };
        });
        //this.setState({ count: this.state.count + 1})
    }
    handleDefense = () => {
        //alert("Defense clicked");
        this.setState((previousState) => {
            let newCount = previousState.count - Math.round(Math.random() * 10);
            return {
                count: newCount,
            };
        });
        //this.setState({ count: this.state.count - 1})
    }
    handleRandomPlay = () => {
        let playMode = Math.round(Math.random());
        if (playMode == 0) {
            this.handleAttack();
        } else{
            this.handleDefense();
        }
    }
    handleReset = () => {
        //alert("Defense clicked");
        this.setState(() => {
            return {
                count: 0,
            };
        });
    }
    render(){
        return (
            <div className="row text-white text-center" style={{padding: "1em"}}>
                <h1>Game score: {this.state.count}</h1>
                <p>You win at +20 points and lose at -20</p>
                <p>Last Play: </p>
                <h3>Game Status: </h3>
                <div className="col-6 col-md-3 offset-md-3">
                    <img
                        style={{
                            width: "100%",
                            cursor: "pointer",
                            border: "1px solid red"
                        }}
                        className="p-4 rounded" 
                        src={attack} 
                        onClick={this.handleAttack}
                    />
                </div>
                <div className="col-6 col-md-3 offset-mr-3">
                    <img
                        style={{
                            width: "100%",
                            cursor: "pointer",
                            border: "1px solid green"
                        }}
                        className="p-4 rounded" 
                        src={defend}
                        onClick={this.handleDefense}
                    />
                </div>
                <div className="col-12 col-md-4 offset-md-4">
                    <button className="btn btn-secondary w-100 mt-2"
                    onClick={this.handleRandomPlay}>Random Play</button>
                    <br />
                    <button className="btn btn-warning w-100 mt-2"
                    onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        )
    ;}
}

export default Counter