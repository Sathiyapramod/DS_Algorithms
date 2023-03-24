# Data Structures and Algorithms

### \* problem solving

### \* Understanding Requirements

### \* Optimizing Codes

# Topics

### \* Array

### \* Time & Space Complexity

### \* Stack and Queue

### \* Linked Lists

### \* Algorithm paradigm (dynamic programming, backtracking, divide and Conquer)

### ~~1. Trees~~
### ~~2. Graphs~~

## \* How to make it fast ?? => **Practice Daily**

# 1. Arrays

## 1. Find the maximum consecutive ones
### => Approach 1: Brute force method (or) Naive approach
 
## 2. Given an array of Integers, find the number of elements which have even number of digits
### => Approach 1:`Integer.toString().length` 
### => Approach 2:Divide digits by 10 repeatedly
 
## 3. Merge two Sorted Arrays
### => Approach 1: Two Pointer Technique

# Time and Space Complexity

###  UnControllable factors:
#### * Internet Speed on the client side


### **Controllable factors**
#### * code efficiency
#### * size of input for the app 

## Search Algorithms

### * Approach 1 - Linear Search
### * Approach 2 - Bi-nary Search - Given input array should be sorted manner

step1 : find the middle element (image annexure).
step2 : repeat the step1 for left side elements.
### n*100 - loose upper bound
### n*5 - loose upper bound
### n*3 - solution should be closed to the Actual Time taken (Tight Bound), 


1. Big O - upper bound (preferrable to use in present day scenario)
2. Big Omega - lower bound
3. Big Theta - average of Upper and Lower bound 


#### BETTER TIME COMPLEXITY, Space is negotiable. 

#### **Time is important in interview Questions while asnwering**

#### https://www.bigocheatsheet.com/

####  ***Date : 17-Mar-2023***

How to efficiently write data is called Data Structures

in Array, there is no restriction on reading and writing elements

#### Stack and Queues 

## 1. Stack

### These are the Writing/Reading with Some restrictions, FILO (or) LIFO
### push() = insert operation
### pop() = delete operation
### peek() = printing the last pushed element

#### top-(index) - index at which element is inserted
#### capacity - length of the Array in which Stack operation is performed

### top < capacity - Stack can be pushed
### top = capacity - Stack cannot be pushed (Overflow condition).STACK IS FULL
### top = zero - Stack is EMPTY. No more Pop operation can be performed.

### peek operation - `arr[Top-1]`

#### https://www.cs.usfca.edu/~galles/visualization/StackArray.html

#### Direct Implementation - using JS methods push, pop(),peek() etc
#### Scenario based - using Explicit functions based on Cases

## 2. Queue

### works on FIFO, LILO 

### Enqueue - insertion
### dequeue - deletion

### * Head >= assisting Dequeue - `arr.shift()`
### * Tail >= assisting Enqueue - `arr.push(element)`


### whenever head and tail are same, QUEUE is empty 

### https://www.cs.usfca.edu/~galles/visualization/QueueArray.html

#### Space complexity
#### Infix and postfix expressions
#### Theory of Circular Queue

## 23-03-2023

### 1 integer = 4 bytes

### Arrays
### Continuous Storage from address 100,101,102,......


### Linked Lists
### 1->2->3->4->5 -> is the operator
### All the elements reside inside node.
    
    Nodes
    * data
    * Pointer component

    Head = 100(Addres of the First Element)
    Address = 100-103 data:1 pointer:200
    Address = 200-203 data:2 pointer:300
    Address = 300-303 data:3 pointer:400
    Address = 400-403 data:4 pointer:500


        Pros : * Fixed Size => we cannot add new elements
                * Fixed data type => Homogenous elements

       * in Javascript, Object(data) will be stored as pointer components
    

```javascript

class Node(){
    constructor(){
        this.val = val; //data component
        this.next = null  //pointer component
    }
}
class linkedlist(){
    constructor(){
        this.head = null;  //head to store initial value's pointer
    }
}

```

* Operations on Linkedlists

1. Insertion(head,tail,ith position)
2. Deletion -(head, tail, ith position)
3. Traversal from head to tail

https://visualgo.net/en/list

```javascript

function insertNewNodeatHead(head1,val){
    let newNode = new Node(val);
    newNode.next = head1;
    head1 = newNode
}

function insertNodeatLast(head2,val){
    var temp = head2;
    while(temp.next != null){
        temp = temp.next
    }
    newNode = Node(val);
    temp.next = newNode;
}

function InsertNodeatI(head,val,i){
    let point = 0;
    let temp = head;

    while(temp.next!= null & point<i){
        temp = temp.next;
        point++
    }
    let prev = temp;
    let after = prev.next;

    newNode = Node(val);
    prev.next = newNode
}

function deleteAtHead(head1){
    let temp = head1;
    head1 = temp.next;
    
    delete temp;
    return head1;
}


```


