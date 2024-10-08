//using object literals
let person={
    firstName:"Khush",
    lastName:"Boss",
    age:20,
    occupation: "Business"
};
console.log("Initial object:",person)

//accessing properties(. notation)
console.log("firstname=",person.firstName)
console.log("Lastname=",person.lastName)


//modify properties
person.age=21;
person["occupation"]="Manager";

console.log("After Modification=",person)

//Adding new properties
person.gender="Male"
person["country"]="India"
console.log("after adding extra properties",person)

//delteng prop
delete person.gender

//nested objects

person.address={
    street:"ABC",
    Landmark:"XYZ"
}
console.log("after adding nested properties",person)

//using object methods
person.greet=function(){
    return "Hello  "+ this.firstName+" "+ this.lastName
};
console.log(person.greet());

//checking property existence
console.log("check if it has age prop","age" in person)
console.log("check if it has occupation prop","occupation" in person)





