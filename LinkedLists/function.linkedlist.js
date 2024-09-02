function linkedlist (){
  
  // initiating a node
  let node = (el)=>{
    this.element = el;
    this.next = null;
  }

  //To keep track of the size    
  let length = 0; 

  //To keep track of the list
  let head = null; 

  // Add new item in the list 
  this.append = (el)=>{
    // adding a new node 
    let newElem = new node(el);
    let current;

    if(head === null){
      head = node;
    }
    else {
      current = head;
      while(current.next){
        current = current.next
      }
      current.next = node;
    }
    length++;
  }
}
