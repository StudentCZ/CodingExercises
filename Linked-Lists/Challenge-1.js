class Node {
  constructor(val) {
    this.val = val;
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

function processLinkedList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

const createLinkedList = (values) => {
  if (values.length === 0) {
    return null;
  }
  const head = new Node(values[0]);
  let current = head;
  for (let i = 0; i < values.length; i++) {
    let newNode = new Node(values[i]);
    current.next = newNode;
    current = newNode;
  }
};

const removeDuplicateNodes = (head) => {
  let current = head;
  const seenValues = new Set();
  let previous = null;

  while (current !== null) {
    if (seenValues.has(current.val)) {
      previous.next = current.next;
    } else {
      seenValues.add(current.val);
      previous = current;
    }
    current = current.next;
  }
  return head;
};

removeDuplicateNodes(node1);
processLinkedList(node1);
