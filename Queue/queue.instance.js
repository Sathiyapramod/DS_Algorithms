function queue(){
  let items = [];
  let front = 0;
  let rear = -1;
  let count= 0;

  //enqueue 
  this.enqueue = (el)=>{
    // increment rear value 
    // assign it to the el
    // increment the count
    items[++rear] = el;
    count++;
  }

  //dequeue
  this.dequeue = (el)=>{
    // change the front value (increment)
    // assign the incremented front index 
    // change the count value (decrement)
    // return the front element 
    let current = front++;
    let temp = item[current];
    item[current] = null;
    count--;
    return temp;
  }

  //front
  this.front = ()=> items[front];

  //rear
  this.rear = ()=> items[rear];

  //size
  this.size = ()=> count;
  
  //isEmpty
  this.empty = ()=> count === 0;

  
}
