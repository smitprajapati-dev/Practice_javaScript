const obj1 = {
    a:1,
    b:2,
}

const obj2 = {
    c:6,
    d:4,
    e:8,
}

const obj3 = Object.assign({}, obj1, obj2)   // in assingn({}-this is target and others are sources which we want to merge)
console.log(obj3);

// const newObj = {...obj1, ...obj2}


// console.log(newObj);