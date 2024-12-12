import { LinkedList } from "./index.js";

const ll = new LinkedList();
ll.addFirst(1);
ll.addFirst(3);
ll.addFirst(4);
ll.addFirst(3);
ll.addFirst(1);
ll.addFirst(2);
ll.addLast(3);
console.log(ll.printList());
ll.duplicates();
console.log(ll.printList());
