class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const node1 = new Node('A');
const node2 = new Node('B');
const node3 = new Node('A');
const node4 = new Node('C');

node1.next = node2;
node2.next = node3;
node3.next = node4;

const removeDuplicateNodes = (head) => {
  let current = head;
};
