class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  printQueue() {
    for (var i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
  peek() {
    return this.items[0];
  }
}

var myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.dequeue();
myQueue.dequeue();
myQueue.printQueue();
