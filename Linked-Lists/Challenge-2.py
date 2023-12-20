class Node:
  def __init__(self, val) -> None:
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

values = ['1','2','3','4','5','6']
head = create_linked_list(values)

# 0(N) Time Complexity and 0(1) Space Complexity

def return_k_element(head,k):
  pointer_one = head
  pointer_two = head

  for i in range(k):
    pointer_one = pointer_one.next

  while pointer_one is not None:
    pointer_one = pointer_one.next
    pointer_two = pointer_two.next

  return pointer_two.val


result = return_k_element(head, 2)
print(result)
