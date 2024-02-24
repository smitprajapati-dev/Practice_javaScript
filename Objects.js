const mySym = Symbol("key1")
const User = {
    name:"smit",
    [mySym]:"myKey1",  // To declare symbol in object you have to write key in [].
    "last Name" : "Prajapait",
    age:22,
    profession: "Full-stack Developer",
    hobbies:["Exercise","Reading","Mix-Martial arts"]
}

// console.log(User["name"]);
// console.log( typeof User[mySym]) // To access value of symbol you also have to write [] in which you want to access

// Object.freeze(User); // With this you can stop value changing in perticualr object

User.Employed = () =>{
    console.log("He has job in Multinationla Company")
}


console.log(User.Employed());



