"use strict";
// Basic types
let id = 5;
let company = 'Dennis';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4];
// Tuple
let person = [1, "Dennis"];
// Tuple Array
let employee;
employee = [
    [1, 'Dennis'],
    [2, 'John']
];
// Union
let pid;
pid = 'Dennis';
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
const user = {
    id: 1,
    name: 'Dennis'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
customerId = 1;
// Functions
function addNum(x, y) {
    return x + y;
}
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// Classes
class Personnel {
    constructor(id, username) {
        this.id = id;
        this.username = username;
    }
    register() {
        return `${this.username} is now registered`;
    }
}
class Employee extends Personnel {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Dennis', 'Developer');
console.log(emp.register());
