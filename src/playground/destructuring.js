console.log('destructuring')

const person = {
  name: 'Marina',
  age: 26,
  location: {
    city: 'Toronto',
    temp: 34
  }
};

console.log(`${person.name} is ${person.age}.`)

// default
const { name = 'Anonymous', age } = person;

console.log(`${name} is ${age}.`)

const {name: myName = 'Mon Nom', age: myAge = 20 } = person;
console.log(`${myName} is ${myAge}.`)

if (person.location.city && person.location.temp) {
  console.log(`It's ${person.location.temp}C in ${person.location.city}`)
}

const { city, temp } = person.location

if (city && temp) {
  console.log(`It's ${temp}C in ${city}`)
}

// renaming

const { city: myCity, temp: temperature } = person.location

if (myCity && temperature) {
  console.log(`It's ${temperature}C in ${myCity}`)
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher
console.log(publisherName);


// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
console.log(` You are in ${address[0]} ${address[1]}`);

// const [addr_street, addr_city, addr_state, addr_zip] = address;
const [, addr_city, addr_state = 'New York' ] = address; // no zip, no street
// const [, , addr_state] = address; // only state, no city, zip, street


console.log(` You are in ${addr_city} ${addr_state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, ,mediumPrice] = item;

console.log(`A midium ${coffee} costs ${mediumPrice}`);
