// const Marvel_heros = ["Thor","Caption","Iron-man"]

// const Dc_heros = ["Batman","superman","Flash"]

// // console.log(Marvel_heros);
// // Marvel_heros.push(Dc_heros)

// // console.log(Marvel_heros[3][1]);
// // Use concat method when you want to merge array, with this you can 
// // const newArr = Marvel_heros.concat(Dc_heros)

// // console.log(newArr);

// const CombinedHero = [
//     ...Marvel_heros,
//     ...Dc_heros
// ]
// console.log(CombinedHero);


// when you have to remove arrays in array than use flat method
const arr = [1,2,4,5,[9,55,9],[44,32,[45,64,74]]]

const newArr = arr.flat(Infinity)
console.log(newArr);


// when you want to convert 