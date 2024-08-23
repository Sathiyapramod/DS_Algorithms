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

  //
  
}
