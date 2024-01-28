class MinStack:
  def __init__(self) -> None:
    self.stack = []
    self.min_stack = []
  def push(self, value):
    self.stack.append(value)
    if len(self.min_stack) == 0 or value <= self.min_stack[-1]:
      self.min_stack.append(value)
