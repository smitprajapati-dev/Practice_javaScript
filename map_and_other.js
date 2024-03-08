const mp = new Map();

mp.set("firstName", "Smit")
mp.set("lnastName", "Prajapati");
mp.set("favouriteColor", "Blue");
mp.set("favouriteSport", "MMA")

// for(const [key, value] of mp){ // in [] we can print kee of map, and also we can print value 
//     console.log(key, ':-', value);
// }
  // you can't apply this method to object to pritnt key and value, and to print the value or key you just .value or .key to get output
const obj = {
    name:'smit',
    lastName:'Prajapati',
    age:21,
}
console.log(obj.keys());