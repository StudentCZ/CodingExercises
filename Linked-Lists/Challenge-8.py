class Node:
  def __init__(self,val) -> None:
    self.val = val
    self.next = None

def print_linked_list(head):
  current = head
  while current is not None:
    print(current.val)
    current = current.next

head = Node('A')
node_2 = Node('B')
node_3 = Node('C')
node_4 = Node('D')
node_5 = Node('E')
node_6 = node_3

head.next = node_2
node_2.next = node_3
node_3.next = node_4
node_4.next = node_5
node_5.next = node_6


def detect_loop(head):
  slow = head
  fast = head

  while fast is not None and fast.next is not None:
    slow = slow.next
    fast = fast.next.next

  if fast is None or fast.next is None:
    return None
  fast = head

  while slow != fast:
    slow = slow.next
    fast = fast.next
  return slow

print(detect_loop(head))
