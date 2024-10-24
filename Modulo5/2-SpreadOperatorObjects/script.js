const obj1 = {
    a:1,
    b:2
}

const obj2 = {
    c:3,
    d:4
}

const combObj = {...obj1, ...obj2}

console.log(combObj)

//-----------------------------
const originalObj = {
    a:1,
    b:2
}

const modifObj = {
    ...originalObj,
    c:3,
    d:4
}


console.log(originalObj)
console.log(modifObj)