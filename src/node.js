class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if(this.left && this.right) return;
		if(this.left) {
			this.right = node;
			node.parent = this;
		} else {
			this.left = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if(this.left !== node && this.right !== node) throw new Error('Node is not child of parent');
		node === this.left ? this.left = null : this.right = null;
		node.parent = null;
	}

	remove() {
		!this.parent ? null : this.parent.removeChild(this);
	}

	swapWithParent() {
		if(!this.parent) return;
		this.parent.parent = this;
	}
}

module.exports = Node;
