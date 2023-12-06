class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values, commonNodeIndex = 2) => {
  if (values.length === 0) {
    return null;
  }
  let head = new Node(values[0]);
  let current = head;
  let commonNode = null;

  for (let i = 1; i < values.length; i++) {
    let newNode = new Node(values[i]);
    current.next = newNode;
    current = newNode;

    if (i === commonNodeIndex) {
      commonNode = current;
    }
  }
  return { head, commonNode };
};

const getLength = (head) => {
  let length = 0;
  while (head !== null) {
    length += 1;
    head = head.next;
  }
  return length;
};

const findIntersection = (list1, list2) => {
  let lengthOne = getLength(list1);
  let lengthTwo = getLength(list2);

  while (lengthOne > lengthTwo) {
    list1 = list1.next;
    lengthOne -= 1;
  }

  while (lengthTwo > lengthOne) {
    list2 = list2.next;
    lengthTwo -= 1;
  }

  while (list1 !== null && list2 !== null && list1 !== list2) {
    list1 = list1.next;
    list2 = list2.next;
  }
  return list1;
};
