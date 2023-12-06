class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getLength = (head) => {
  let length = 0;
  while (head !== null) {
    length += 1;
    head = head.next;
  }
  return length;
};
