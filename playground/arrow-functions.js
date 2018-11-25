// arguments object - no longer bound with arrow functions

const add = function (a,b) {
  console.log({arguments})
  return a + b;
}


const addArrow = (a,b) => {
  console.log({arguments})
  return a + b;
}

add(2, 4);

addArrow(2, 4);

// this keyword - no longer bound

const user = {
  name: 'taddes',
  cities: ['Charlotte', 'Edmonton', 'Montreal'],
  printPlacesLived() {
   const cityMessages = this.cities.map((city) => {
     return city.toUpperCase();
    })
    return cityMessages

  }
}

const multiplier = {
   numbers: [1,2,3,4,5,6],
   multiplyBy: 6,
   multiply(numbers, multiplier) {
     const newArr = numbers.map((num) => {
       return num * multiplier
     })
     return newArr
   }
}

console.log(multiplier.multiply(multiplier.numbers, multiplier.multiplyBy))
