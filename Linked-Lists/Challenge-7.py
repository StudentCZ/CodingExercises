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

head1 = Node('A')
node2 = Node('B')
node3 = Node('C')
node4 = Node('D')
node5 = Node('E')

head1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

head2 = Node('S')
node_a2 = node4
head2.next = node_a2

def intersect_linked_list(head1,head2):
  pointer_one = head1
  pointer_two = head2

  head_one_length = get_length(pointer_one)
  head_two_length = get_length(pointer_two)
  print(head_one_length)
  print(head_two_length)


