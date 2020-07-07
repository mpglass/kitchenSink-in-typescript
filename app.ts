let myName: string = "Michelle";
let numOfStates: number = 50;

const doSum = (x: number, y: number): number => {
  return x + y;
}
let add= doSum(5, 4);

const sayHello: string = "Hello World";
console.log(sayHello);

interface IPerson {
  name: string;
  age: number;
}

const friendArray: IPerson[] = [
  {
    name: "Charles",
    age: 21,
  },
  {
    name: "Abby",
    age: 27,
  },
  {
    name: "James",
    age: 18,
  },
  {
    name: "John",
    age: 17,
  },
];
