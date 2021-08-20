// Interface
interface Point {
    calc(): number;
}

interface Point {
    something: number;
}

// With interfaces you can add them to class with the implements keyword

type message = "success" | "failure"
interface Send {
    data: string
    send(): message
}
// getMessage - ensures myMessage method is available and returns string and exists on email
interface GetMessage {
    myMessage(): string
}


class Mail implements Send {
    private _password: string | undefined
    constructor(public data: string,
        ) {
            this._password = undefined
        }
    
    set password(x: string | undefined) {
        this._password = x
    }
    get password(): string | undefined {
        return this._password
    }

    send(){
        let returnValue: message = "success"
        return returnValue
    }
}

class Email implements Send, GetMessage {
    data
    constructor(data: string) {
        this.data = data
    }
    send(){
        let returnValue: message = "success"
        return returnValue
    }
    toString(): string {
        return JSON.stringify(this)
    }
    myMessage(): string {
        return this.data
    }
}
    
const messages = [
    new Mail("Hello from snail mail"), 
    new Email("Hello can you see me in the inbox")
];

messages.forEach(m => m.send());
let email = new Email("Hey!");
console.log(email.toString());