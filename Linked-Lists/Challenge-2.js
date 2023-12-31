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
  let head = new Node(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    let newNode = new Node(values[i]);
    current.next = newNode;
    current = newNode;
  }
  return head;
};

const values = [1, 2, 3, 4, 5, 6, 7];
const head = createLinkedList(values);

// Time Complexity: O(N) And Space Complexity: O(1)

const returnKElement = (head, k) => {
  let current = head;
  let lastNodeCount = 0;
  let currentNodeCount = 0;

  while (current !== null) {
    lastNodeCount += 1;
    current = current.next;
  }
  current = head;
  while (current !== null) {
    currentNodeCount += 1;
    if (lastNodeCount - currentNodeCount === k - 1) {
      console.log(current.val);
      return current.val;
    }
    current = current.next;
  }
};

returnKElement(head, 2);

// Time Complexity: O(N) And Space Complexity: O(1)

const returnKElement2 = (head, k) => {
  let pointerOne = head;
  let pointerTwo = head;

  for (let i = 0; i < k; i++) {
    pointerOne = pointerOne.next;
  }
  while (pointerOne !== null) {
    pointerOne = pointerOne.next;
    pointerTwo = pointerTwo.next;
  }
  console.log(pointerTwo.val);
  return pointerTwo.val;
};

returnKElement2(head, 2);
