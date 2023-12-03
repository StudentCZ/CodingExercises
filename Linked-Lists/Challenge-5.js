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
    let newNode = new Node(values[i]);
    current.next = newNode;
    current = newNode;
  }
  return head;
};

const values1 = [7, 1, 6];
const values2 = [5, 9, 2];

let head1 = createLinkedList(values1);
let head2 = createLinkedList(values2);

const sumLinkedList = (headOne, headTwo) => {
  let newHead = new Node(0);
  let current = newHead;
  let carry = 0;
  let pointerOne = headOne;
  let pointerTwo = headTwo;

  while (pointerOne !== null || pointerTwo !== null) {
    let valueOne = pointerOne !== null ? pointerOne.val : 0;
    let valueTwo = pointerTwo !== null ? pointerTwo.val : 0;

    let sum = valueOne + valueTwo + carry;
    carry = sum >= 10 ? 1 : 0;

    current.next = new Node(sum % 10);
    current = current.next;
    pointerOne = pointerOne.next;
    pointerTwo = pointerTwo.next;
  }
  if (carry === 1) {
    current.next = new Node(carry);
    carry = 0;
  }
  return newHead.next;
};

let test = sumLinkedList(head1, head2);
processLinkedList(test);
