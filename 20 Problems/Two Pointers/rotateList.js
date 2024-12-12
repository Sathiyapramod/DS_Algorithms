class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedlist {
    constructor() {
        this.head = null;
    }
    addFirst(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    addLast(data) {
        const newNode = new Node(data);

        let current = this.head;

        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    printList() {
        let current = this.head;
        const res = [];
        while (current) {
            res.push(current.data);
            current = current.next;
        }
        return res.join("->");
    }

    size() {
        let current = this.head;
        let size = 0;
        while (current) {
            size++;
            current = current.next;
        }
        return size;
    }
    rotate(k) {
        if (!this.head || !this.head.next) return this.head;

        // Step 1: Find the length of the linked list
        let length = 1;
        let current = this.head;
        while (current.next) {
            current = current.next;
            length++;
        }

        k = k % length;
        //    again if k is 0 return head
        if (k === 0) return this.head;

        let newTail = this.head;
        for (let i = 1; i < length - k; i++) {
            newTail = newTail.next;
        }
        console.log(newTail);
        let newHead = newTail.next;

        newTail.next = null;
        current.next = this.head;
        console.log(newHead);
    }
}

const ll = new linkedlist();

ll.addFirst(2);
ll.addFirst(1);
const final = ll.printList();
const length = ll.size();
console.log(final);
ll.rotate(2);
