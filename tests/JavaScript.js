let person ={
name: "JavaScript",
year: 1995,
creator: "Brendan Eich" ,
age: 40,
greet: function() {
 console.log("Hello, I am " + this.name + ", created in " + this.year + " by " + this.creator + ".");   


}


}

person.greet();