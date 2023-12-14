class Node:
  def __init__(self, val) -> None:
    self.val = val
    self.next = None


def print_linked_list(head):
  current = head
  while current is not None:
    print(current.val)
    current = current.next

head = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)
node5 = Node(5)

head.next = node2
node2.next = node3
node3.next = node4
node4.next = node5


def return_k_element(head,k):
  pointer_one = head
  pointer_two = head

  for i in range(k):
    pointer_one = pointer_one.next

  while pointer_one is not None:
    pointer_one = pointer_one.next
    pointer_two = pointer_two.next

  return pointer_two.val


result = return_k_element(head, k)
print(result)
