class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    findMin() {
        let current = this.root;

        while(current.left !== null){
            current = current.left;
        }

        return current.data;
    }

    findMax() {
        let current = this.root;

        while(current.right !== null){
            current = current.right;
        }

        return current.data;
    }

    add(data) {
        const node = this.root;

        if(node == null){
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) {
                if(data < node.data){
                    //Traverse to left side of tree
                    if(node.left == null){
                        node.left = new Node(data);
                        return;
                    } else if(node.left !== null){
                        return searchTree(node.left);
                    }

                } else if(data > node.data) {
                    //Traverse to right side of tree
                    if(node.right == null){
                        node.right = new Node(data);
                        return;
                    } else if(node.right !== null){
                        return searchTree(node.right);
                    }

                } else {
                    return null;
                }
            }

            return searchTree(node);
        }
    }

    remove(data) {
        const removeNode = function(node, data) {
            if(node === null){
                return null;
            } else if(data === node.data) {
                //Node found! Removing the node from the tree
                
                //Found node has no children
                if(node.left === null && node.right === null) {
                    return null;
                }

                //Found node only has a right child
                if(node.left === null) {
                    return node.right;
                }

                //Found node only has a left child
                if(node.right === null) {
                    return node.left;
                }

                //Found note have both the left and right child
                var tempNode = node.right;
                while(tempNode.left !== null){
                    tempNode = tempNode.left;
                }

                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;

            } else if(data < node.data) {
                //Traverse the left side of the tree to find node
                node.left = removeNode(node.left, data);
                return node;
            } else {
                //Traverse the right side of the tree to find node
                node.right = removeNode(node.right, data);
                return node;
            }
        }

        this.root = removeNode(this.root, data);
    }

    isPresent(data) {
        let current = this.root;

        while(current){
            if(data === current.data) {
                return true;
            }
            
            if(data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    isBalanced(){
        return (this.findMaxHeight() - this.findMinHeight()) <= 1;
    }

    findMinHeight(node = this.root) {
        if(node === null) {
            return -1;
        }

        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);

        if(left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    findMaxHeight(node = this.root) {
        if(node == null) {
            return -1;
        }

        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);

        if(left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    //IN-ORDER -> Left Node, Root Node, Right Node
    inOrder() {
        if(this.root == null){
            return null;
        } else {
            let nodes = [];

            function inOrderTraverse(node) {
                node.left && inOrderTraverse(node.left);
                nodes.push(node.data);
                node.right && inOrderTraverse(node.right);
            }

            inOrderTraverse(this.root);
            return nodes;
        }
    }

    //PRE-ORDER -> Root Node, Left Node, Right Node
    preOrder() {
        if(this.root == null){
            return null;
        } else {
          let nodes = [];

          function preOrderTraverse(node){
            nodes.push(node.data);
            node.left && preOrderTraverse(node.left);
            node.right && preOrderTraverse(node.right);
          }

          preOrderTraverse(this.root);
          return nodes;
        }
    }

    //POST-ORDER -> Left Node, Right Node, Root Node
    postOrder() {
        if(this.root == null){
            return null;
        } else {
          
          let nodes = [];

          function postOrderTraverse(node) {
            node.left && postOrderTraverse(node.left);
            node.right && postOrderTraverse(node.right);
            nodes.push(node.data);
          }

          postOrderTraverse(this.root);
          return nodes;
        }
    }
}

const bst = new BinarySearchTree();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);

bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7);
console.log(bst.findMax());
console.log(bst.isPresent(4));

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());

console.log(`In Order: ${bst.inOrder()}`);
console.log(`Pre Order: ${bst.preOrder()}`);
console.log(`Post Order: ${bst.postOrder()}`);