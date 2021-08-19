
// Count is of "type" number
let count = 5;
count = 10;
// count = "Justin"; 

// Const's type is a literal
const fname = "Cherron";

// this makes a variable of type any
// let testing;
let testing: number;
// testing = "Justin";
testing = 5;

type Student = {
    fname: string
    lname: string
    grade: number
}

let student: Student = {
    fname: "Andy",
    lname: "Anderson",
    grade: 12,
}

let student2: Student = {
    fname: "Jane",
    lname: "Adam",
    grade: 12,
}

function toString(student: Student): string {
    return JSON.stringify(student);
}

console.log(toString(student))
console.log(add(5, testing));

function add(x: number, y: number): number {
    let result = x + y;
    return result
}

// Any & Void

//Union
type Status = "success" | "failure"
type ServerResponse = Student | string

//Tuple
function sendMessage(): [success: Status, message: ServerResponse]
{
    let tmp = Math.round((Math.random()));
    console.log(tmp);
    if (tmp == 1) {
        return ["success", {
            fname: "Austin",
            lname: "Ahmann",
            grade: 12
        }]
    } else {
        return ["failure", "Something failed"]
    }
}


for (let i=0; i<10; i++) {
    const [statusResult, data] = sendMessage()
    if(statusResult == "success")
        console.log(data)
}