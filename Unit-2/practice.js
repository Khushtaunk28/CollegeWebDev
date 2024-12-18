import { h1 } from "framer-motion/client";
import { Component } from "react";
import React from "react";

class CityChanger extends React.Component{
    constructor(props){
        super(props);
        this.state={
            city:"patna",
        };
    }
    componentDidMount(){
        setTimeout(()=>
        {
            this.setState({city:"BLR"});
        },2000);
    }
    getDeriv
    render(){
        return(
            <h1>City Name: {this .state.city}</h1>
        )
    }

}
export default CityChanger;