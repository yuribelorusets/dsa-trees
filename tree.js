/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {

    let sum = 0;
    let toVisitStack = [this.root];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      sum += current.val;

      for (let child of current.children)
        toVisitStack.push(child)
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let evens = 0;
    let toVisitStack = [this.root];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.val % 2 === 0) {
        evens += 1;
      }

      for (let child of current.children)
        toVisitStack.push(child)
    }
    return evens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    let toVisitStack = [this.root];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.val > lowerBound) {
        count += 1;
      }

      for (let child of current.children)
        toVisitStack.push(child)
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
