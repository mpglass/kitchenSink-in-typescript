var myName = "Michelle";
var numOfStates = 50;
var add = function (x, y) {
    return x + y;
};
var sum = add(5, 4);
console.log(sum);
var sayHello = "Hello World";
console.log(sayHello);
function checkAge(name, age) {
    age > 21 ? console.log("Congrats " + name + ", you are in!") : console.log("Sorry " + name + ", you gotta get older bro!");
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
var veggies = ['broccoli', 'yellow squash', 'onions', 'green beans', 'carrots', 'spinach', 'mushrooms', 'cauliflower'];
veggies.forEach(function (veggie) {
    console.log(veggie);
});
var pet = {
    name: 'Lady Fluffington',
    breed: 'Pembroke Welsh Corgi'
};
console.log(pet);
var friendArray = [
    {
        name: "Noah",
        age: 16
    },
    {
        name: "Emma",
        age: 27
    },
    {
        name: "Liam",
        age: 29
    },
    {
        name: "Sophia",
        age: 18
    },
    {
        name: "Jacob",
        age: 26
    },
];
friendArray.forEach(function (friend) {
    checkAge(friend.name, friend.age);
});
function getLength(word) {
    var length = word.length;
    if (length % 2 == 0) {
        console.log('The world is nice and even!');
    }
    else {
        console.log('The world is an odd place!');
    }
}
getLength('Hello World');
