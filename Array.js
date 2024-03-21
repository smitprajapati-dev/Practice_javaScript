// const arr = [1,23,5,6,67]


// const secondArr = arr.slice(0,2)
// const newArr = arr.splice(1,3)

// console.log(secondArr)
// console.log(newArr)


// // slice - it does not manupulate original array
// // whereas splice it manupulate original array



// function printName(){
//     const a = "smit"
//     function inner(){
//          b = "sonu"
//     }
//     inner()
//     console.log(b);
// }

// printName()


function outer(){
    const name = "smit"
    function inner(){
        console.log(name);
    }
    return inner;
}
const sonu = outer()
sonu()