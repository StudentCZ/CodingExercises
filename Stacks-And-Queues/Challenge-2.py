class MinStack:
  def __init__(self) -> None:
    self.stack = []
    self.min_stack = []
  def push(self, value):
    self.stack.append(value)
    if len(self.min_stack) == 0 or value <= self.min_stack[-1]:
      self.min_stack.append(value)
  def pop(self):
    if len(self.stack) == 0:
      return None
    pop_value = self.stack.pop()
    while len(self.min_stack) > 0 and pop_value == self.min_stack[-1]:
      self.min_stack.pop()
    return pop_value
  def min(self):
    if len(self.min_stack) == 0:
      return None
    return self.min_stack[-1]

stack = MinStack()
stack.push(5)
stack.push(2)
stack.push(3)
print(stack)
