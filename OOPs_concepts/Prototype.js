// const myName = "smit     "

// console.log(myName.truelength);

// let myHeros = ["spiderMan", "hulk" , "thor"]

// let herosPower = {
//     thor:"hammer",
//     spiderMan: "sling",

//     getSuperPower : function(){
//         console.log(`Spidy power is ${this.spiderMan}`);
//     }
// }
// Array.prototype.smitArr = function(){
//     console.log(`Smit says hello`);
// }
// Object.prototype.smit = function(){
//     console.log(`Smit is present in all objects`);
// }

// // herosPower.smitArr()
// myHeros.smitArr()

// Inheritance

const user = {
  name: "smit",
  email: "gmail.com",
};
const Teacher = {
  makeVideo: true,
};
const teachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "js Notes",
  fullTime: true,
  __proto__: teachingSupport,
};

Teacher.__proto__ = user;

Object.setPrototypeOf(teachingSupport, Teacher);

let anotherUserName = "ChaiaurCode     ";
String.prototype.trueLenght = function () {
  console.log(`${this}`);
  console.log(`The lenght of this property is ${this.trim().length}`);
};
anotherUserName.trueLenght()


'prajapati'.trueLenght()
'iceTea'.trueLenght()