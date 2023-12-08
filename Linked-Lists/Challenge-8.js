class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  let head = new Node(values[0]);
  let current = head;

  for (let i = 0; i < values.length; i++) {
    let newNode = new Node(values[i]);
    current.next = newNode;
    current = newNode;
  }
  return head;
};

const values = ['A', 'B', 'C', 'D', 'E', 'C'];
const head = createLinkedList(values);

const detectLoop = (head) => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }
  if (fast === null || fast.next === null) {
    return null;
  }
  fast = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};
