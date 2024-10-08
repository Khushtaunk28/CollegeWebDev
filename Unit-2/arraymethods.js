//intialization
let fruits =["apple", "orange","kiwi"];
console.log(fruits)

//push()
fruits.push("strawberry")
console.log(fruits)

//pop
fruits.pop()
console.log(fruits)

//shift
fruits.shift()
console.log(fruits)


//unshift
fruits.unshift("pineapple")
console.log(fruits)

//splice()
fruits.splice(1,1,"hello","bye")
console.log(fruits)

//slice
let e=fruits.slice(1,3)
console.log(e)

//concat()
let newnum=[2,1,4]
let allnew=newnum.concat(fruits)
console.log(allnew)

//foreach
console.log("for each iterate")
allnew.forEach(function(i){
    console.log(i)

});

//find()
let findarr=allnew.find(function(fruits){
    return fruits== "apple"
});

//sort
allnew.sort();
console.log(allnew)


//reverse
allnew.reverse()
console.log(allnew)