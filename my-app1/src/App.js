import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import UserProfile from "./UserProfile";
const App=()=>{
const user={ name: "John"};
return(
    <div>
        <h1>My App</h1>
        <ErrorBoundary>
            <UserProfile user={user}/>
        </ErrorBoundary>
    </div>
);
}
export default App;



// import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
// function Home(){
//     return <h1>Welcome to the home page</h1>;
// }

// function About(){
//     return <h1>This  is the about page </h1>;
// }

// function Contact(){
//     return <h1>Here is the contact page</h1>;
// }
// function App(){
//     return (
//         <Router>
//             <nav>
//                 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
//             </nav>    
//             <Routes>
//                 <Route path="/" element={<Home/>}/>
//                 <Route path="/about" element={<About/>}/>
//                 <Route path="/contact" element={<Contact/>}/>
//             </Routes>
//         </Router>
//     );
// }
// // import Greeting from "./Greeting";
// // import Sample from "./Sample";
// // import Welcome from "./Welcome";

// // function Helloworld(){
// //     return <h1>Hello world</h1>;
  
// // }

// // function App(){
// //     return (
// //         <div>
// //             <Helloworld/>
// //             <Greeting name= "Khush" age={20}/>
// //             <Greeting/>
// //             <Welcome name="Bob" age={44}/>
// //             <Welcome name="John" age={30}/>
          
// //         </div>
// //     );
// // }
// export default App;
// // import { useState,useEffect } from "react";
// // import ReactDom from "react-dom/client";
// // function Timer(){
// //     const [count,setCount]=useState(0);
// //     useEffect(()=>{
// //         const interval=setInterval(()=>{
// //             setCount(count=>count+1);
// //         },2000);
// //     },[]);
// //     return <h1>It has been rendered {count}</h1>;
// // }
// // const root =ReactDom.createRoot(document.getElementById("root"));