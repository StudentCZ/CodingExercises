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


value1 = [7,1,6]
value2 = [5,9,2]
head1 = create_linked_list(value1)
head2 = create_linked_list(value2)

# 0(Max(N,M))Time Complexity 0(Max(N,M))Space Complexity

def sum_linked_list(head1,head2):
  new_head = Node(0)
  current = new_head
  carry = 0
  pointer_one = head1
  pointer_two = head2

  while pointer_one is not None or pointer_two is not None:
    value1 = pointer_one.val if pointer_one else 0
    value2 = pointer_two.val if pointer_two else 0

    sum = value1 + value2 + carry
    carry = 0 if sum < 10 else 1
    current.next = Node(sum % 10)
    current = current.next

    pointer_one = pointer_one.next if pointer_one else None
    pointer_two = pointer_two.next if pointer_two else None

  if carry == 1:
    current.next = Node(carry)
    current = current.next
  return new_head.next

head = sum_linked_list(head1,head2)
print_linked_list(head)
