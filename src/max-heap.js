const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];	
	}

	push(data, priority) {
		let node1 = new Node(data, priority);
		let node2 = new Node(data, priority);
		insertNode(node1);
		shiftNodeUp(node2);	
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		if(!this.root || this.root.priority < node.priority) {
			node.next = this.root;
			this.root = node;
		} else {
			while(this.root.next && node.priority < this.root.next.priority) {
				this.root = this.root.next;
			}
			node.next = this.root.next;
			this.root.next = node;
		}
		this.parentNodes.push(node);	
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
