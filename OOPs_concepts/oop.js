// const user = {
//     userName: "smit",
//     loginCount:4,
//     singnedIn :true,
//     getUserDetails: function(){
//         // console.log("Get Users Details from dataBase");
//         // console.log(`userName is ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user.getUserDetails());
function user(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
//   return this; // return always implicitely defined
}
const userOne = new user("Smit", 4, true);
const userTwo = new user("sonu", 5, false)
console.log(userOne);
console.log(userTwo);

