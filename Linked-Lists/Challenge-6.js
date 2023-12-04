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
  let head = new Node(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    let newNode = values[i];
    current.next = newNode;
    current = newNode;
  }
  return head;
};

const palindromeLinkedList = (head) => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let reverseList = reverse(slow.next);
};
