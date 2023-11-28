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

const values = ['a', 'b', 'c', 'd', 'e', 'f'];
const head = createLinkedList(values);

const deleteMiddleNode = (head) => {
  if (head.length === 0) {
    return null;
  }
  let pointerOne = head;
  let pointerTwo = head;
  let maxCount = 0;
  let currentCount = 0;

  while (pointerTwo !== null) {
    maxCount += 1;
    pointerTwo = pointerTwo.next;
  }
  while (pointerOne !== null) {
    let middleNode = Math.ceil(maxCount / 2);
    currentCount += 1;
    if (currentCount + 1 === middleNode) {
      pointerOne.next = pointerOne.next.next;
    }
    pointerOne = pointerOne.next;
  }

  return head;
};

deleteMiddleNode(head);
