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

values = ["A",'B','B','A']
head = create_linked_list(values)

def reverse(head):
  current = head
  prev = None

  while (current is not None):
    next = current.next
    current.next = prev
    prev = current
    current = next
  return prev


def palindrome_linked_list(head):
  current = head
  slow = head
  fast = head

  while fast is not None and fast.next is not None:
    slow = slow.next
    fast = fast.next.next

  slow_reverse = reverse(slow.next)

  while slow_reverse is not None:
    if current.val != slow_reverse.val:
      return False
    slow_reverse = slow_reverse.next
    current = current.next
  return True

result = palindrome_linked_list(head)
print(result)

