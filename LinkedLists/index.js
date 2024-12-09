// node definition
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// linkedlist definition

class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     *
     * @param {*} data - data to add at first of linkedlist
     */
    addFirst(data) {
        // creating a data plus next using node class
        const newNode = new Node(data);
        // insert the new node
        newNode.next = this.head;
        this.head = newNode;
    }

    /**
     *
     * @param {*} data - data to add at last of linkedlist
     * @returns
     */
    addLast(data) {
        const lastNode = new Node(data);
        // validating if head doesn't exists
        if (!this.head) {
            // assigning last node to head
            this.head = lastNode;
            return;
        }

        // traversing from start to end
        let current = this.head;
        // !! here both current and this.head points to the head node (same)
        // !! so referring to the same node will alter the next and data at last
        while (current.next) {
            // re-assigning with next node
            current = current.next;
        }
        // assigning the pre-last next to lastNode
        current.next = lastNode;
    }
    /**
     *
     * @returns size of the linkedlist
     */
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    /**
     *
     * @param {*} index - index at which data to be inserted
     * @param {*} data - data to add
     * @returns
     */
    addAt(index, data) {
        if (index < 0 || index > this.size()) {
            console.log("Invalid Index");
            return;
        }
        // initializing the node
        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        // !! here both current and this.head points to the head node (same)
        // !! so referring to the same node will alter the next and data at last

        // traversing upto the previous index
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        // assigning the next for new node
        newNode.next = current.next;
        // assigning the new node to the previous index
        current.next = newNode;
        return;
    }
    printList() {
        let current = this.head;

        let result = [];
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        return result.join(" → ");
    }

    removeTop() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
        return;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        // !! here both current and this.head points to the head node (same)
        // !! so referring to the same node will alter the next and data at last
        while (current.next.next !== null) {
            current = current.next;
        }
        current.next = null;
        return;
    }

    removeAt(index) {
        if (index < 0 || index > this.size()) {
            console.log("Invalid Index");
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        // !! here both current and this.head points to the head node (same)
        // !! so referring to the same node will alter the next and data at last
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;

        // traversing through the linked list
        while (current) {
            // assigning the next node to a temp variable
            const nextNode = current.next;
            // changing the next pointer of current to prev
            current.next = prev;
            // move the previous to current;
            prev = current;
            // assign the nextNode to current
            current = nextNode;
        }
        return prev;
    }

    remove(el) {
        // check if head is available
        if (!this.head) {
            return;
        }

        // check if element is at first node itself
        if (this.head.data === el) {
            // removing the first node itself
            this.head = this.head.next;
        }

        // ** Approach Two
        // let dummy = {next: this.head}
        // let current = dummy;
        let current = this.head;

        // !! here both current and this.head points to the head node (same)
        // !! so referring to the same node will alter the next and data at required positions

        while (current.next) {
            // check if data is equal to element
            if (current.next.data === el) {
                current.next = current.next.next;
            } else current = current.next;
        }
        // this.head = dummy.next
        return this.head;
    }
    get(index) {
        if (!this.head) {
            return null;
        }

        if (index < 0 || index > this.size()) {
            return null;
        }

        let current = this.head;

        let i = 0;
        while (current) {
            if (i === index) return current.data;
            i++;
            current = current.next;
        }

        return "-1";
    }
}

const ll = new LinkedList();
ll.addFirst(1);
ll.addFirst("2");
ll.addFirst(3);
ll.addFirst("2");
ll.addFirst(4);
ll.addFirst(-1);
ll.addLast(3);
ll.addAt(3, -2);

console.log(ll.printList());
// console.log(ll.printList());
console.log(ll.get(0));
console.log(ll.get(1));
console.log(ll.get(2));
console.log(ll.get(3));