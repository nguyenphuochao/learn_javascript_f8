const person1 = {
    name: 'Son',
    age: 21
}

const person2 = {
    ...person1
}

// Expected results
console.log(person2.name) // Output: 'Son'
console.log(person2.age) // Output: 21
console.log(person1 === person2) // Output: false