  
let input1 = userInput[2].split(" ");
let input2 = userInput[3].split(" ");

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class  LinkedList{
    constructor(value){
        this.value = value;
        this.size = 0;
    }
    insertNodeatHead(value){
        let node = new Node(value);
        this.head = node;
        this.size++;
    }
    addNodes(value){
        let node = new Node(value);
        if(!this.head)  this.head;
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
            return this.head;
        }
    }
    printNode(list){
        let current = list.head;
        // return current
        let temp="";
        while(current){
            temp += current.value + " ";
            current = current.next;
        }
        return temp;
    }
    mergelist(h1,h2){
        
    }
}

let list1 = new LinkedList();
let list2 = new LinkedList();

list1.insertNodeatHead(input1[0])
for(let i=1;i<input1.length;i++)
    list1.addNodes(input1[i])
    list2.insertNodeatHead(input2[0])
for(let j=1;j<input2.length;j++)
    list2.addNodes(input2[j])

console.log(list1.printNode(list1))
console.log(list2.printNode(list2))
