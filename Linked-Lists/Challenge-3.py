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

values = ['A','B','C','D','E']
head = create_linked_list(values)

# O(N) Time Complexity and 0(1) Space Complexity

def delete_middle_node(head):
  pointer_one = head
  pointer_two = head
  previous_node = None


  while pointer_two is not None and pointer_two.next is not None:
    previous_node = pointer_one
    pointer_one = pointer_one.next
    pointer_two = pointer_two.next.next

  if previous_node:
    previous_node.next = pointer_one.next
  else:
    head = pointer_one.next

  return head

newhead = delete_middle_node(head)
print_linked_list(newhead)

