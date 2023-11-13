"use strict";
var ANode = /** @class */ (function () {
    function ANode(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    return ANode;
}());
/**
 * @name BinarySearchTree-Class
 *
 */
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.insert = function (key) {
        var newNode = new ANode(key);
        if (this.root == null) {
            // if condition is TRUE do something
            this.root = newNode;
        }
        else {
            // do something else
            this.insertNode(this.root, newNode);
        }
        ;
    };
    BST.prototype.insertNode = function (node, newNode) {
        if (newNode.key > node.key) {
            //  Check if there is no left node
            if (node.left == null) {
                // Assign the newNode to the left node as its available
                node.left = newNode;
            }
            else {
                // do something else
                this.insertNode(node.left, newNode);
            }
            ;
        }
        else {
            // do something else
            if (node.right == null) {
                // if condition is TRUE do something
                node.right = newNode;
            }
            else {
                // do something else
                this.insertNode(node.right, newNode);
            }
            ;
        }
        ;
    };
    BST.prototype.search = function (key) {
        return this.searchNode(this.root, key);
    };
    BST.prototype.searchNode = function (node, key) {
        if (node == null) {
            return false;
        }
        if (key < node.key) {
            // if condition is TRUE do something
            return this.searchNode(node.left, key);
        }
        else if (key > node.key) {
            // do something else
            return this.searchNode(node.right, key);
        }
        else {
            return true;
        }
    };
    BST.prototype.remove = function (key) {
        this.root = this.removeNode(this.root, key);
    };
    BST.prototype.removeNode = function (node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }
            var minNode = this.findMinNode(node.right);
            node.key = minNode.key;
            node.right = this.removeNode(node.right, minNode.key);
            return node;
        }
    };
    BST.prototype.findMinNode = function (node) {
        if (node.left === null) {
            return node;
        }
        return this.findMinNode(node.left);
    };
    return BST;
}());
// const binarySearchTree = (dataElts: number[]) => {
//     const root = dataElts[0];
//     return "John is a boy"
// }
var tree = new BST();
var dataElts = [45, 15, 79, 90, 10, 55, 12, 20, 50];
for (var index = 0; index < dataElts.length; index++) {
    var element = dataElts[index];
    tree.insert(element);
}
console.log(tree.search(45));
/**
 * The Node class represents a single node in the BST. It has properties for the key value, left child, and right child.
The BinarySearchTree class represents the BST itself. It has a root property.
The insert method inserts a new node into the BST based on its key value. If the tree is empty, the new node becomes the root. Otherwise, the insertNode helper function
is called recursively to find the appropriate position for the new node.
The search method searches for a given key in the BST. It calls the searchNode helper
function recursively until the key is found or the end of the tree is reached.
The remove method removes a node with a given key from the BST. It calls the removeNode helper function recursively to perform the removal. There are three possible cases: the node has no children, the node has only one child, or the node has two children. The findMinNode function helps find the minimum node in the right subtree when a node with two children needs to be removed.
 */ 
