import React from "react";
import Greeting from "./Greeting";
import Sample from "./Sample";

function Helloworld(){
    return <h1>Hello world</h1>;
  
}

function App(){
    return (
        <div>
            <Helloworld/>
            <Greeting name="Khush"/>
            <sample/>
        </div>
    );
}
export default App;