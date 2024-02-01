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
  def pop(self):
    if not self.stack and not self.current_stack:
      raise IndexError("pop from an empty SetOfStacks")

    if not self.current_stack:
      self.current_stack = self.stack.pop()

    return self.current_stack.pop()
  def show_stack(self):
    print('stack', self.stack, 'current_stack', self.current_stack)


set_of_stacks = SetOfStacks(2)

set_of_stacks.push(1)
set_of_stacks.push(2)
set_of_stacks.push(5)
set_of_stacks.push(8)
set_of_stacks.push(3)
set_of_stacks.push(12)
set_of_stacks.show_stack()
