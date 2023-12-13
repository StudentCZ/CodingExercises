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
node3 = Node('A')
node4 = Node('C')
node5 = Node('A')
node6 = Node('A')

head.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6


def remove_duplicate(head):
  current = head
  tracker = set()
  while current is not None and current.next is not None:
    tracker.add(current.val)
    if current.next.val in tracker:
      current.next = current.next.next
    else:
      current = current.next
  return head

# print(print_linked_list(head))

new_head = remove_duplicate(head)

print(print_linked_list(new_head))
