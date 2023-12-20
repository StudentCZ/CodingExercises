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

values = [1,8,10,4,5,6,3,2]
head = create_linked_list(values)

# 0(N) Time Complexity and 0(N) Space Complexity

def partition_node(head, partition):
  current = head
  left_partition = None
  right_partition = None
  left_head = None
  right_head = None

  while current is not None:
    if (current.val < partition):
      if (left_partition is None):
        left_partition = Node(current.val)
        left_head = left_partition
      else:
        left_partition.next = Node(current.val)
        left_partition = left_partition.next
    else:
      if (right_partition == None):
        right_partition = Node(current.val)
        right_head = right_partition
      else:
        right_partition.next = Node(current.val)
        right_partition = right_partition.next
    current = current.next
  left_partition.next = right_head
  return left_head

new_node = partition_node(head,5)
print_linked_list(new_node)
