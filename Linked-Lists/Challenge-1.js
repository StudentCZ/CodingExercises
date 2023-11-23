class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const processLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

const createLinkedList = (values) => {
  if (values.length === 0) {
    return null;
  }
  const head = new Node(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    let newNode = new Node(values[i]);
    current.next = newNode;
    current = newNode;
  }
  return head;
};

const values = ['A', 'B', 'C', 'A', 'D'];
const head = createLinkedList(values);

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

processLinkedList(head);
