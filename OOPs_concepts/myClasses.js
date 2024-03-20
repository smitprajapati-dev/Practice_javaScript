class User {
    constructor(userName, email, password ){
        this.userName = userName;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password} this is password`
    }
    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}
const smit = new User('Smit', 'smit@123gmail.com', 123)

console.log(smit.changeUserName());
console.log(smit);
console.log(smit.encryptPassword());
