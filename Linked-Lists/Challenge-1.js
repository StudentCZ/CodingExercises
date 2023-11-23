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

const values = ['A', 'B', 'C', 'A'];
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

// O(N^2) time complexity and O(1) space complexity

const removeDuplicateNodesWithoutBuffer = (head) => {
  let current = head;

  while (current !== null) {
    let runner = current;

    while (runner.next !== null) {
      if (runner.next.val === current.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  return head;
};

removeDuplicateNodes2(head);
processLinkedList(head);
