class SetOfStacks:
  def __init__(self,capacity):
    self.capacity = capacity
    self.stack = []
    self.current_stack = []
  def push(self,item):
    if len(self.current_stack) == self.capacity:
      self.stack.append(self.current_stack)
      self.current_stack = [item]
    else:
      self.current_stack.append(item)
