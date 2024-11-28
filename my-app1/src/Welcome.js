import React ,{Component} from "react";

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={
            message: "Welcome to the world of React"
        };
    }
    changeMessage=() =>{
        this.setState({
            message: "You have clicked the button"
        });
    };
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <p>Hello,{this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <button onClick={()=>this.changeMessage()}>Click me</button>
            </div>
        );
    }
}
export default Welcome;