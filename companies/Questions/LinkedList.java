package linked_list;

public class LinkedList {
     Node head;

     // insert at head
     public void addFirst(int data) {
          Node newNode = new Node(data);
          newNode.next = head;
          head = newNode;
     }

     // insert at last
     public void addLast(int data) {
          Node newNode = new Node(data);

          // case if the list is empty
          if (head == null) {
               head = newNode;
               return;
          }
          // make a generic list variable
          Node lastUsed = head;

          while (lastUsed.next != null) {
               lastUsed = lastUsed.next;
          }
          // assigning the node to the next
          lastUsed.next = newNode;
     }

     // insert at specific index
     public void addAtIndex(int data, int idx) {
          Node newNode = new Node(data);
          int i = 0;

          if (idx == 0) {
               addFirst(data);
          }
          // create a local list variable
          Node lastUsed = head;
          while (i < idx - 1) {
               lastUsed = lastUsed.next;
               i++;
          }

          newNode.next = lastUsed.next;
          lastUsed.next = newNode;
     }

     // printing the list
     public void printList() {
          // local list fetching
          Node current = head;
          while (current.next != null) {
               System.out.print(current.data + " -> ");
               current = current.next;
          }
          System.out.println(current.data);
     }

     public Node findMiddle() {

          if (head == null) {
               return head;
          }

          else {
               // make two local copy of lastUsed head
               // two pointer method
               Node slow = head;
               Node fast = head;

               while (fast != null & fast.next != null) {
                    slow = slow.next; // stepping by 1
                    fast = fast.next.next; // stepping up by 2
               }

               return slow;
          }

     }

     public Node reverse() {
          if (head == null) {
               return head;
          } else {
               Node prev = null;
               Node curr = head;
               while (curr != null) {
                    Node nextNode = curr.next;
                    curr.next = prev;
                    prev = curr;
                    curr = nextNode;
               }
               Node current = prev;
               while (current.next != null) {
                    System.out.print(current.data + " -> ");
                    current = current.next;
               }
               System.out.println(current.data);
               return prev;

          }
     }

     public static void main(String[] args) {
          LinkedList list = new LinkedList();
          // list.addFirst(20);
          list.addLast(50);
          list.addLast(40);
          list.addLast(30);
          // list.addFirst(20);
          list.addLast(20);
          list.addLast(10);
          list.addLast(5);
          list.printList();
          list.reverse();

          System.out.println(list.findMiddle().data);
     }
}
