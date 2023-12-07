class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const values1 = [1, 3, 4, 5, 6];
const values2 = [7, 8, 4, 5, 6];

// Create nodes without connecting them
const nodes1 = values1.map((val) => new Node(val));
const nodes2 = values2.map((val) => new Node(val));

// Connect nodes in values2 to nodes in values1 at a specific index
nodes2[2] = nodes1[2];
nodes2[3] = nodes1[3];
nodes2[4] = nodes1[4];

// Now, create linked lists
let head1 = nodes1[0];
let current1 = head1;

for (let i = 1; i < nodes1.length; i++) {
  current1.next = nodes1[i];
  current1 = current1.next;
}

let head2 = nodes2[0];
let current2 = head2;

for (let i = 1; i < nodes2.length; i++) {
  current2.next = nodes2[i];
  current2 = current2.next;
}

// const head1 = new Node(1);
// const node2 = new Node(3);
// const node3 = new Node(4);
// const node4 = new Node(5);
// const node5 = new Node(6);

// head1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// const head2 = new Node(7);
// const n2 = new Node(8);
// const n3 = node3;
// const n4 = node4;
// const n5 = node5;

// head2.next = n2;
// n2.next = n3;
// n3.next = n4;
// n4.next = n5;

// const head3 = new Node(2);
// const a2 = new Node(2);
// const a3 = new Node(4);

// head3.next = a2;
// a2.next = a3;

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
