const mp = new Map();

mp.set("firstName", "Smit")
mp.set("lnastName", "Prajapati");
mp.set("favouriteColor", "Blue");
mp.set("favouriteSport", "MMA")

for(const [key, value] of mp){ // in [] we can print kee of map, and also we can print value 
    console.log(value);
    console.log(key);
}
  