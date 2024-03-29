# def sort_stack(stack):
#   temp_stack = []

#   while stack:
#     temp = stack.pop()

#     while temp_stack and temp_stack[-1] < temp:
#       stack.append(temp_stack.pop())

#     temp_stack.append(temp)

#   while temp_stack:
#     stack.append(temp_stack.pop())

# stack = [3,4,1,5,2]
# sort_stack(stack)
# print(stack)

class SortedStack:
  def __init__(self):
    self.stack = []
    self.temp_stack = []

  def push(self,value):

    while self.stack and self.stack[-1] > value:
      self.temp_stack.append(self.stack.pop())

    self.stack.append(value)

    while self.temp_stack:
      self.stack.append(self.temp_stack.pop())

  def pop(self):
    if not self.is_empty():
      return self.stack.pop()
    else:
      print("Stack is empty.")
      return None

  def peek(self):
    if not self.is_empty():
      return self.stack[-1]
    else:
      print('Stack is empty.')
      return None

  def is_empty(self):
    return not bool(self.stack)

  def display(self):
    print(self.stack)

sorted_stack = SortedStack()
sorted_stack.push(3)
sorted_stack.push(1)
sorted_stack.push(4)
sorted_stack.push(2)
sorted_stack.push(5)
sorted_stack.display()
