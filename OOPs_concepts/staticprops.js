class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`UserName is ${this.userName}`);
  }

  static createId(){
    return `123`
  }
}


const smit = new  User('smit')

console.log(smit.createId());