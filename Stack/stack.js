let myStack = function() {
    this.count = 0;
    this.storage = {};

    //Add a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //Remove and return the value at the end of the stack
    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    //Returns the number of item in the stack
    this.size = function() {
        return this.count;
    }

    //Returns the vale at the end of the stack
    this.peek = function() {
        return this.storage[this.count - 1];
    }
}

let stack = new myStack();

console.log(stack.size());
stack.push('a');
stack.push('b');
stack.push('d');
console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());