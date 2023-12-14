class Node:
  def __init__(self, val) -> None:
    self.val = val
    self.next = None


def print_linked_list(head):
  current = head
  while current is not None:
    print(current.val)
    current = current.next


def return_k_element(head,k):
  pointer_one = head
  pointer_two = head

  for i in range(0, k):
    pointer_one = pointer_one.next

  while pointer_one is not None:
    pointer_one = pointer_one.next
    pointer_two = pointer_two.next

  return pointer_two.val
