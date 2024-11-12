import React from "react";
import Greeting from "./Greeting";
import Sample from "./Sample";
import Welcome from "./Welcome";

function Helloworld(){
    return <h1>Hello world</h1>;
  
}

function App(){
    return (
        <div>
            <Helloworld/>
            <Greeting name= "Khush" age={20}/>
            <Greeting/>
            <Welcome name="Bob" age={44}/>
            <Welcome name="John" age={30}/>
          
        </div>
    );
}
export default App;