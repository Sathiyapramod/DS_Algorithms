class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertNode(value) {
    this.head = new Node(value, this.head);
    this.size++;
    // return this.head;
  }

  addElementToNode(value) {
    let node = new Node(value);
    if (!this.head) this.head; // if empty, create a new Node
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this.head;
  }
  insertNodeatFirst(head, value) {
    if (this.head.value == head) {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertNodeatLast(value) {
    let newNode = new Node(value);
    let tail = this.head;
    while(tail.next !== null)
        tail = tail.next;
    tail.next = newNode;
    return this.head;
  }

  printNode() {
    let currentValue = this.head;
    while (currentValue) {
      console.log(currentValue);
      currentValue = currentValue.next;
    }
  }
}

const ll = new Linkedlist();

ll.insertNode(10);
ll.addElementToNode(20);
ll.addElementToNode(50);
ll.insertNodeatFirst(10, 1);
ll.printNode();
// console.log(ll.insertNodeatLast(50, 100));
