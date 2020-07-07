let myName: string = "Michelle";

let numOfStates: number = 50;


const add = (x: number, y: number): number => {
  return x + y;
}
let sum = add(5, 4);
console.log(sum);


const sayHello: string = "Hello World";
console.log(sayHello);
   

function checkAge(name: string, age: number): void {
    age > 21 ? console.log(`Congrats ${name}, you are in!`) : console.log(`Sorry ${name}, you gotta get older bro!`)
}
checkAge('Charles', 21); 
checkAge('Abby', 27); 
checkAge('James', 18); 
checkAge('John', 17); 


let veggies: string[] = ['broccoli', 'yellow squash', 'onions', 'green beans', 'carrots', 'spinach', 'mushrooms', 'cauliflower']
veggies.forEach(veggie => {
    console.log(veggie);
});


let pet: {name: string, breed: string} = {
    name: 'Lady Fluffington', 
    breed: 'Pembroke Welsh Corgi'
};
console.log(pet);


interface IPerson {
    name: string;
    age: number;
  }
  
  const friendArray: IPerson[] = [
    {
      name: "Noah",
      age: 16,
    },
    {
      name: "Emma",
      age: 27,
    },
    {
      name: "Liam",
      age: 29,
    },
    {
      name: "Sophia",
      age: 18,
    },
    {
      name: "Jacob",
      age: 26,
    },
  ];

friendArray.forEach(friend => {
    checkAge(friend.name, friend.age);
});

function getLength (word: string) {
    var length: number = word.length
    if(length % 2 == 0 ) {
        console.log('The world is nice and even!')
    }
    else {
        console.log('The world is an odd place!')
    }
}
getLength('Hello World')