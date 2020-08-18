class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    this.items.pop();
  }
  print() {
    for (var i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.pop();
myStack.pop();
myStack.print();

console.log("10" > 5);
console.log(10 - "10");
