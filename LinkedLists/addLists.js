import { LinkedList, Node } from "./index.js";

const l1 = new LinkedList();
const l2 = new LinkedList();

l1.addFirst(6);
l1.addFirst(4);
l1.addFirst(2);
l2.addFirst(1);
l2.addFirst(8);
l2.addFirst(5);

console.log(l1.printList());
console.log(l2.printList());

function addTwoList(l1, l2) {
    //  2 → 4 → 6
    //  5 → 8 → 1
    // expected output
    //  7 → 2 → 8 (4+8 is carrying 1 to the next node)
    let dummy = new Node(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        let v1 = l1 ? l1.data : 0;
        let v2 = l2 ? l2.data : 0;
        // // reassigning the carry as
        let sum = v1 + v2 + carry;

        carry = Math.floor(sum / 10);
        sum = sum % 10;

        current = new Node(sum);
        // assigning the node with resultant value
        current = current.next; // to continue the iteration

        // // proceeding to next iteration
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return dummy.next;
}
console.log(addTwoList(l1.head, l2.head));
