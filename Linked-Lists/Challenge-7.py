class Node:
  def __init__(self,val) -> None:
    self.val = val
    self.next = None

def print_linked_list(head):
  current = head
  while current is not None:
    print(current.val)
    current = current.next

def get_length(head):
  length = 0
  current = head
  while current is not None:
    length += 1
    current = current.next
  return length

def intersect_linked_list(head1,head2):
  pointer_one = head1
  pointer_two = head2
