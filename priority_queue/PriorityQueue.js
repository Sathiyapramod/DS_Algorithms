"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinHeap = void 0;
var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.heap = [];
        this.heap = [];
        this.length = 0;
    }
    MinHeap.prototype.parent = function (idx) {
        var index = Math.floor((idx - 1) / 2);
        return this.heap[index];
    };
    MinHeap.prototype.leftChild = function (idx) {
        return this.heap[2 * idx + 1];
    };
    MinHeap.prototype.rightChild = function (idx) {
        return this.heap[2 * idx + 2];
    };
    MinHeap.prototype.insert = function (x) {
        this.heap.push(x);
        // increment the length
        this.length++;
        //  performing heapify
        this.heapifyUp(this.heap.length - 1);
    };
    MinHeap.prototype.swap = function (leftIdx, rightIdx) {
        var _a;
        _a = [
            this.heap[rightIdx],
            this.heap[leftIdx],
        ], this.heap[leftIdx] = _a[0], this.heap[rightIdx] = _a[1];
    };
    MinHeap.prototype.heapifyDown = function (idx) {
        var currIdx = idx;
        var _a = [this.leftChild(idx), this.rightChild(idx)], leftIdx = _a[0], rightIdx = _a[1];
        var smallestIdx = currIdx;
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
    };
    MinHeap.prototype.heapifyUp = function (idx) {
        // to insert the element at the bottom of the heap
        var currIdx = idx;
        console.log(currIdx);
        while (currIdx > 0) {
            var parentIdx = this.parent(currIdx);
            if (this.heap[currIdx] < this.heap[parentIdx]) {
                this.swap(currIdx, parentIdx);
                console.log(this.heap);
            }
            else
                break;
        }
    };
    MinHeap.prototype.isEmpty = function () {
        return this.length === 0;
    };
    MinHeap.prototype.peek = function () {
        return this.heap.length > 0 ? this.heap[0] : null;
    };
    MinHeap.prototype.print = function () {
        return this.heap;
    };
    return MinHeap;
}());
exports.MinHeap = MinHeap;
var minHeap = new MinHeap();
// Insert elements into the heap
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(3);
minHeap.insert(8);
console.log(minHeap.print());
