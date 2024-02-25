const number = parseInt(prompt("enter your number"))

if(number < 0){
    console.log("This number factorial is not possible");
}
else if(number === 0){
    console.log("The factorial of this number is : 1 " );
}
else{
    let fact = 1;
    for(let i = 1; i<=number;i++){
        fact *= i 
    }
    console.log("The factorial of this number is : " + fact)
}