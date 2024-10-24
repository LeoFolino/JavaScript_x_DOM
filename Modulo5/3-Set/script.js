/*const newset = new Set(['a', 'b', 'c'])
console.log(newset)

const otherSet = new Set()

otherSet.add('a')
otherSet.add('b')
otherSet.add('c')

console.log(otherSet)*/

const array = ['a','a','b','b','c','d']

console.log(array)
console.log(array.length)

const set = new Set(array)
console.log(set)
console.log(set.size)

const array2 = Array.from(set)

console.log(array2)
console.log(array2.length)