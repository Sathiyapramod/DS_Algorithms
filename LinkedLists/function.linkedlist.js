function linkedlist(){
    let node = function(el){
        this.element = el;
        this.next = null;
    }
    
    let length = 0;
    
    let head = null;
    
    
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

