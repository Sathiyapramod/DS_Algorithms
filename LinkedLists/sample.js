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
    return this.head;
  }

  // insertNodeatLast(head, value) {
  //   let temp = head;
  //   while (temp.next != null) {
  //     temp = temp.next;
  //   }
  //   let newNode = new Node(value);
  //   temp.next = newNode;
  //   return temp;
  // }

  printNode() {
    let currentValue = this.head;
    while (currentValue) {
      console.log(currentValue.value);
      currentValue = currentValue.next;
    }
  }
  printList(flag) {
    let current = flag.head;
    console.log(current);
    let temp = "";
    while (current) {
      temp += current.value + " ";
      current = current.next;
    }
    console.log(temp);
  }
  getNode() {
    let final = this.head;
    return final;
  }
}

const ll = new Linkedlist();
// ll.printNode();
// let data = ll.getNode();
ll.insertNode(10);
ll.addElementToNode(20);
ll.addElementToNode(30);
// console.log(ll);

ll.printList(ll);
