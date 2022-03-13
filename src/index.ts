// Basic types
let id : number  = 5;

let company: string = 'Dennis'

let isPublished: boolean = true

let x : any = 'Hello'


let ids: number[] = [1,2,3,4];

// Tuple
let person: [number, string]  = [1, "Dennis"];

// Tuple Array
let employee : [number, string][];

employee = [
    [1, 'Dennis'],
    [2, 'John']
]

// Union
let pid : string | number;
pid = 'Dennis';


// Enum
enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction1.Left);

// Objects
type User = {
    id: number,
    name: string
}
const user : User  = {
    id: 1,
    name: 'Dennis'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid;
let customerId = cid as number;

customerId = 1;

// Functions
function addNum(x: number, y: number) : number{
    return x + y;
}



interface MathFunction{
    (x: number, y: number) : number
}

const add : MathFunction = (x: number, y: number): number => x +y;

const subtract: MathFunction = (x: number, y: number): number => x -y;

// Interfaces
interface Person {
    username: string,
    id: number,
    age?: number,
    register() : string
}

// Classes
class Personnel implements Person{
    id: number
    username: string

    constructor(id: number, username: string){
        this.id = id;
        this.username = username
    }

    register(){
        return `${this.username} is now registered`;
    }
}

// Subclass
class Employee extends Personnel{
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }

}

const emp = new Employee(3, 'Dennis', 'Developer');
console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}
let numArray = getArray<number>([1,2,3,4]);

let strArray = getArray<string>(['Dennis', 'Linda']);