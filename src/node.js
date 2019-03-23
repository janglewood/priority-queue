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

		let childIsLeft;
		let parentIsLeft;
		let leftChild;
    	let rightChild;
    	let root;

		if(this.parent && this.parent.left === this) {
			childIsLeft = true;
		} else if (this.parent && this.parent.right === this) {
			childIsLeft = false;
		}
		if(this.parent.parent && this.parent.parent.left === this.parent) {
      		parentIsLeft = true;
      		root = this.parent.parent;
		} else if(this.parent.parent && this.parent.parent.right === this.parent) {
      		parentIsLeft = false;
      		root = this.parent.parent;
		}
		this.left ? leftChild = this.left : null;
		this.right ? rightChild = this.right : null;

		if(childIsLeft) {
			if(leftChild || rightChild) {
				leftChild ? this.parent.left = leftChild : null;
				rightChild ? this.parent.right = rightChild : null;
			}
			this.parent.right ? this.right = this.parent.right : null;

			if(parentIsLeft) {
				this.parent.parent.left = this;
			} else if(this.parent.parent && !parentIsLeft) {
				this.parent.parent.right = this;
			}
		
      		this.left = this.parent;
	  		this.left.parent = this;
	  		this.right ? this.right.parent = this : null;
			this.parent = root;
			  
		} else {
			if(leftChild || rightChild) {
				leftChild ? this.parent.left = leftChild : null;
				rightChild ? this.parent.right = rightChild : null;
			}
			this.parent.left ? 	this.left = this.parent.left : null;

			if(this.parent.parent && parentIsLeft) {
				this.parent.parent.left = this;
			} else if(this.parent.parent && !parentIsLeft) {
				this.parent.parent.right = this;
			}

      		this.right = this.parent;
	  		this.right.parent = this;
	 		this.left ? this.left.parent = this : null;
     		this.parent = root;
		}
	}
}

module.exports = Node;
