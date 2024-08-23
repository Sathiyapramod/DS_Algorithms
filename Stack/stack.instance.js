function stack(){
  let items = [];
  let top = 0;

  // push action
  this.push = (el)=>{
    items[top++] = el;
  }

  // pop action
  this.pop = ()=>{
    return items[--top]
    // --top - first decrements and performs the operation
  }

  // peek
  this.peek = ()=>{
    return items[top-1]
    // remember --top and top-1 are different
  }

  //isEmpty()
  this.isEmpty =  ()=>{
    return top === 0;
  }

  //clear
  this.clear = ()=> {
    top = 0;
  }

  // size 
  this.size = ()=>{
    return top;
  }
  
}
