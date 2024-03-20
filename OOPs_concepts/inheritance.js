class User{
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`UserName is ${this.userName}`);
    }
}


class Teacher extends User{
    constructor(userName, email, passowrd){
        super(userName)
        this.email = email
        this.password = passowrd
    }

    addCourses(){
        console.log(`A new Course add to this name ${this.userName}`);
    }
}

const tea = new Teacher('tea', 'tea@gmail.com' ,3634)
tea.addCourses()
console.log(tea);