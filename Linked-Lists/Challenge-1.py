class Node:
  def __init__(self, val) -> None:
    self.val = val
    self.next = None

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
