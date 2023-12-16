class Node:
  def __init__(self,val) -> None:
    self.val = val
    self.next = None

def print_linked_list(head):
  current = head
  while current is not None:
    print(current.val)
    current = current.next

def create_linked_list(values):
  head = Node(values[0])
  current = head
  for value in values[1:]:
    new_node = Node(value)
    current.next = new_node
    current = new_node
  return head

values = ['1','2','3','4','5','6','7','8']
head = create_linked_list(values)
