export class MinHeap {
  public length: number;
  private heap: number[] = [];

  constructor() {
    this.heap = [];
    this.length = 0;
  }

  private parent(idx: number): number {
    let index = Math.floor((idx - 1) / 2);
    return this.heap[index];
  }
  private leftChild(idx: number): number {
    return this.heap[2 * idx + 1];
  }
  private rightChild(idx: number): number {
    return this.heap[2 * idx + 2];
  }

  public insert(x: number) {
    this.heap.push(x);
    // increment the length
    this.length++;
    //  performing heapify
    this.heapifyUp(this.heap.length - 1);
  }

  private swap(leftIdx: number, rightIdx: number) {
    [this.heap[leftIdx], this.heap[rightIdx]] = [
      this.heap[rightIdx],
      this.heap[leftIdx],
    ];
  }

  private heapifyDown(idx: number) {
    let currIdx = idx;
    const [leftIdx, rightIdx] = [this.leftChild(idx), this.rightChild(idx)];

    let smallestIdx = currIdx;

    if (leftIdx < this.length && this.heap[leftIdx] < this.heap[smallestIdx])
      // swapping th left element
      smallestIdx = leftIdx;
    if (rightIdx < this.length && this.heap[rightIdx] < this.heap[smallestIdx])
      // swapping the right element
      smallestIdx = rightIdx;
    if (smallestIdx !== currIdx) {
      this.swap(leftIdx, rightIdx);
      this.heapifyDown(currIdx);
    }
  }

  public heapifyUp(idx: number) {
    // to insert the element at the bottom of the heap
    let currIdx = idx;
    console.log(currIdx);
    while (currIdx > 0) {
      const parentIdx = this.parent(currIdx);
      if (this.heap[currIdx] < this.heap[parentIdx]) {
        this.swap(currIdx, parentIdx);
        console.log(this.heap);
      } else break;
    }
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public peek(): number | null {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  public print() {
    return this.heap;
  }
}

const minHeap = new MinHeap();

// Insert elements into the heap
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(3);
minHeap.insert(8);

console.log(minHeap.print());
