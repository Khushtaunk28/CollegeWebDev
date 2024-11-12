import React from 'react'
import Proptypes from 'prop-types'


function Greeting({name,age}){
    // return <h2>Welcome,{props.name}!</h2>
    return(
        <div>
            <p>Hello,{name}!</p>
            <p>Age: {age}!</p>
        </div>
    );
}
Greeting.defaultProps={
    name: "Guest",
    age: 18,
};

Greeting.propTypes={
    name: Proptypes.string,
    age : Proptypes.number
};














export default Greeting;