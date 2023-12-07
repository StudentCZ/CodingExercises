class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head1 = new Node(1);
const node2 = new Node(3);
const node3 = new Node(4);
const node4 = new Node(5);
const node5 = new Node(6);

head1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const head2 = new Node(7);
const n2 = new Node(8);
const n3 = node3;
const n4 = node4;
const n5 = node5;

head2.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

const head3 = new Node(2);
const a2 = new Node(2);
const a3 = new Node(4);

head3.next = a2;
a2.next = a3;

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

console.log(findIntersection(head1, head2));
