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

const values = [10, 1, 3, 6, 5, 2, 8];
const head = createLinkedList(values);

const partitionNode = (head, partition) => {
  let current = head;
  let leftPartition = null;
  let rightPartition = null;
  let leftHead = null;
  let rightHead = null;

  while (current !== null) {
    if (current.val < partition) {
      if (leftPartition === null) {
        leftPartition = new Node(current.val);
        leftHead = leftPartition;
      } else {
        let next = new Node(current.val);
        leftPartition.next = next;
        leftPartition = leftPartition.next;
      }
    } else {
      if (rightPartition === null) {
        rightPartition = new Node(current.val);
        rightHead = rightPartition;
      } else {
        let next = new Node(current.val);
        rightPartition.next = next;
        rightPartition = rightPartition.next;
      }
    }
    current = current.next;
  }
  leftPartition.next = rightHead;
  return leftHead;
};
