class Node:
  def __init__(self, val) -> None:
    self.val = val
    self.next = None

def print_linked_list(head):
  current = head
  while current is not None:
    print(current.val)
    current = current.next


head = Node('A')
node2 = Node('B')
node3 = Node('C')
node4 = Node('D')
node5 = Node('A')
node6 = Node('E')

head.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6


def remove_duplicate(head):
  current = head
  tracker = set()
  while current is not None and current.next is not None:
    if current.next.val in tracker:
      current.next = current.next.next
      current = current.next
    else:
      tracker.add(current.val)
      current = current.next
  return head

print(print_linked_list(head))
