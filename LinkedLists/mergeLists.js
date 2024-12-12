import { LinkedList } from "./index.js";

/*
Test Cases
Delete on empty list -> None
Delete None -> None
Delete on one node -> [None]
Delete on multiple nodes
 */
class lists extends LinkedList {
    deleteMiddle() {
        if (!this.head) return;

        if (this.size() === 1) return this.head;

        let middle;
        if (this.size() % 2 === 0) {
            middle = this.size() / 2 - 1;
        }
        middle = (this.size() - 1) / 2;
        //normalized middle node position in the list

        let current = this.head;
        // traverse through the list upto middle node position
        for (let i = 0; i < middle - 1; i++) {
            current = current.next;
        }
        // console.log(current);
        current.next = current.next.next;
    }
}

const list = new lists();

// list.destroy();
// list.addFirst(5);
list.addFirst(4);
list.addFirst(3);
list.addFirst(2);
list.addFirst(1);
list.printList();
list.deleteMiddle();
