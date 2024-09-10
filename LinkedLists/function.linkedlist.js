function linkedlist(){
    let node = function(el){
        this.element = el;
        this.next = null;
    }
    
    let length = 0;
    
    let head = null;
    
    // inserts element at the end of the list
    // We will check if head is empty then assign the current node to it, 
    // else add the node as a reference of the next element to the previous node.
    this.append = function(el){
        // creating a new node
        let newEl =  new node(el), current;
        // check if head is null or some node exists 
        if(!head){
            // perform insert at a new list 
            head = newEl
        }
        else {
            // perform insert the desired tail - dead end 
            current = head;
            // traverse through the entire length of list 
            while(current.next){
                current = current.next;
            }
            // if next fails, stictch newEl to current.next
            current.next = newEl
        }
        // increment the length however
        length++;
    }
    
    this.toArray = function(){
      let arr = [],
      current = head;
      while(current){
        arr.push(current.element);
        current = current.next;
      }
      return arr;
};
}


const ll = new linkedlist();
ll.append(3);
ll.append(4);
ll.append('prashant');
ll.append('anil');
ll.append('29');
console.log(ll.toArray());

