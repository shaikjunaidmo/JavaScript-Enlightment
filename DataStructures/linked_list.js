class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class Linkedlist {
  constructor() {
    this.head = null;
  }
  add(element) {
    var node = new Node(element);
    var current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  remove(element) {
    var current = this.head;
    var previous;
    while (current.element != element && current.next != null) {
      previous = current;
      current = current.next;
    }
    if (current.element == element) {
      previous.next = current.next;
    }
  }
  printlist() {
    var current = this.head;
    console.log(current.element);
    while (current.next) {
      current = current.next;
      console.log(current.element);
    }
  }
}
var ll = new Linkedlist();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.remove(4);
ll.remove(2);
ll.printlist();
