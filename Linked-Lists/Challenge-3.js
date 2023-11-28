class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  if (values.length === 0) {
    return null;
  }
  let head = new Node(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    let newNode = new Node(values[i]);
    current.next = newNode;
    current = newNode;
  }
  return head;
};
