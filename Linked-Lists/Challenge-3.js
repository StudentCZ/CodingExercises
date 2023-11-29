class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const processLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current);
    current = current.next;
  }
};

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

const values = ['a', 'b', 'c', 'd', 'e'];
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

// deleteMiddleNode(head);

const deleteMiddleNode2 = (head) => {
  if (head === null || head.next === null) {
    return null;
  }

  let pointerOne = head;
  let pointerTwo = head;
  let prevPointerOne = null;

  while (pointerTwo !== null && pointerTwo.next !== null) {
    pointerTwo = pointerTwo.next.next;
    prevPointerOne = pointerOne;
    pointerOne = pointerOne.next;
  }
  prevPointerOne.next = pointerOne.next;
  return head;
};

deleteMiddleNode2(head);
processLinkedList(head);
