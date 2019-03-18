const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let node2 = new Node(data, priority);
		insertNode(new Node(data, priority));
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
        this.root = null;
        this.parentNodes = [];
	}

	insertNode(node) {
		if(!this.root) {
			this.parentNodes[this.parentNodes.length] = node;
			this.root = this.parentNodes[0];
			let i = this.parentNodes.length - 1;


			this.root.left = this.parentNodes[i];
			this.root.right = this.parentNodes[i];
		} else {
			this.parentNodes[this.parentNodes.length] = node;

			let i = this.parentNodes.length - 1;
			this.parentNodes[i].left = 2 * i;
			this.parentNodes[i].right = 2 * i + 1;
			while(i >= 1 && this.parentNodes[Math.floor((i + 1) / 2) - 1].priority < this.parentNodes[i].priority) {
			let parent = Math.floor(((i + 1) / 2) - 1);
			this.parentNodes[i] = this.parentNodes[parent];
			this.parentNodes[parent] = node;
			i = parent;
			}
		}
		return this.parentNodes;
	  }

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
