// 4.3 

class Node {
	constructor(value){
		this.value = value;
		// this.parent = null
		this.left = null;
		this.right = null;
		this.next = null;
	}
}
function createDepthLinkedLists(node){
	let LLs = [];
	let current = [node];//use unshift and push
	let next = []; 
	let LLfirst = null;
	let LLcurr = null;
	while (current.length !== 0) {
		let currNode = current.unshift();
		if (LLfirst === null){
			LLfirst = currNode; //currNode is first element of the current height;
			LLcurr = currNode;
		} else {
			LLcurr.next = currNode; // set the next property of the last node in LL to the currentNode
			LLcurr = currNode; // set LLcurr to currNode
		}
		if (currNode.left !== null) {
			next.push(currNode.left); // push left
		} else if (currNode.right !== null) {
			next.push(currNode.right); // push right
		} 
		if (current.length === 0){  // done with current height
			LLs.push(LLfirst);
			LLfirst = null;
			LLcurr = null;
			current = next;
			next = []
		}
	}
	return LLs;
}

// 4.4

function checkHeight(node){
	if (node === null){
		return -1;
	}

	let leftHeight = checkHeight(node.left);
	if (leftHeight === -Infinity) return -Infinity;

	let rightHeight = checkHeight(node.right);
	if (rightHeight === -Infinity) return -Infinity;

	let heightDiff = leftHeight - rightHeight;
	if (Math.abs(heightDiff) > 1) return -Infinity;
	return Math.max(checkHeight(leftHeight), checkHeight(rightHeight)) + 1;

}

function isBalanced(node){
	return checkHeight !== -Infinity;
}

// 4.5 
function checkBST(n){
	return BSTStep(n, -Infinity, Infinity);
}
function BSTStep(n, min, max){
	if (n === null){
		return true
	} else if (n.value >= max){
		return false
	} else if (n.value < min){
		return false 
	} else {
		return BSTStep(n.left, min, n.value) && BSTStep(n.right, n.value, max);
	}
}
//4.6 Inorder Successor 

//Either is Node.right, and then as left as you can go. If Node.right is null, point 2 parent's up
//If there isn't two parents above current node, then return false
//Each node has a pointer to parent

function inOrderSuccessor(n){
	let successor = null;
	if (n.right !== null){ 	// check if node.right exists
		successor = n.right;
		while (successor.left !== null) {
			successor = successor.left;
		}
		return successor
	}	
	let successor = n.parent;
	if (successor === null) return null;
	return successor.parent; //returns either the parent or null
}












