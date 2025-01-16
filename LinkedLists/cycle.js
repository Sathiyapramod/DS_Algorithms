import { LinkedList, Node } from "./index.js";

let head = new Node(3);
head.next = new Node(2);
head.next.next = new Node(0);
head.next.next.next = new Node(-4);
head.next.next.next.next = head.next;

function hasHead(head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
    return false;
}

console.log(hasHead(head));
