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
