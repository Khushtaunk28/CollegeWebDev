var a=10;
let b="hello world";
console.log(a+" "+b)
{
    //var is accessible out the scope also
    var n=10;
    console.log(n)
}
{
    //let is not accessible outside the scope
    let n=22;
    console.log(n)
}
//const have same scope as let
const pi=22/7;
//pi=10;
console.log(pi)