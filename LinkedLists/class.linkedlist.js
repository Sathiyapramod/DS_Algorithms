class Node {
    constructor(el){
        this.element = el;
        this.next = null;
    }
}

class linkedlist {
    
    constructor(){
        this.head = null;
        this.length = 0;
        this.next = null;
    }
    append = function(el){
        // assign a new node to el
        let newElem = new Node(el);
        let current;
        // check if ll is empty or stitch the new el to the head
        if(!this.head){
            this.head = newElem
        }
        else {
            current = this.head;
            
            // traverse through the list till the tail of the list
            while(current.next){
                current = current.next
            }
            // stitch the newElem to the tail of the list
            current.next = newElem
        }
        // increment the list length
        this.length++;
    }
    
    toArray = function(){
        let current = this.head;
        
        let arr = [];
        
        while(current){
            arr.push(current.element);
            current = current.next;
        }
        return arr;
    }
}


const ll = new linkedlist();

ll.append(3);
ll.append(5);
ll.append('arjuna');
console.log(ll.toArray());
