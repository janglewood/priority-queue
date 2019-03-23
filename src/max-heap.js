const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		const node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if(!this.root) return;
		let detachedRoot = this.detachRoot();
		this.shiftNodeDown(this.root);
		return detachedRoot.data;
		
	}

	detachRoot() {
		const root = this.root;
		this.root = null;
		const rootIndex = this.parentNodes.indexOf(root);
		rootIndex >= 0 ? this.parentNodes.splice(rootIndex, 1) : null;
		return root;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {

	}

	isEmpty() {
		if(!this.root && this.parentNodes.length === 0) {
			return true;
		}
		return false;
	}

	clear() {
        this.root = null;
        this.parentNodes = [];
	}

	insertNode(node) {
		if(!this.root) {
			this.parentNodes.push(node);
			this.root = this.parentNodes[0];
		} else {
			if(this.parentNodes[0].left && this.parentNodes[0].right) {
				this.parentNodes.shift();
			}
			this.parentNodes.push(node);
			this.parentNodes[0].appendChild(this.parentNodes[this.parentNodes.length - 1]);

			if(this.parentNodes[0].left && this.parentNodes[0].right) {
				this.parentNodes.shift();
			}
		}
	  }

	shiftNodeUp(node) {
		let i = this.parentNodes.length - 1;
		while(i >= 1 && this.parentNodes[Math.floor((i + 1) / 2) - 1].priority < node.priority) {
			let parent = Math.floor(((i + 1) / 2) - 1);
			this.parentNodes[i] = this.parentNodes[parent];
			this.parentNodes[parent] = node;
			i = parent;
		}
		if(node.priority > this.root.priority) {
			this.parentNodes[0] = this.root;
			this.root = node;
		} 
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
