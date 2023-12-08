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
