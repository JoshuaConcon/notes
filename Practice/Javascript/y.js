// zig zag iterator
// input: 2 iterators of integers
// implement zig zag iterator class

class zigZag {
	constructor(array1, array2){
		this.queue = []
		iterator1Next = iterator1.next()
		this.queue.push(iterator1)
		this.queue.push(iterator2)
	}
	// returns true if iterator still has elements, otherwise false
	hasNext(){
		return queue.length === 0
	}
	// returns integer (next element), no null checking
	next(){

	}
}

const zz = new zigZag([1,2,3,4], [1,2,3])