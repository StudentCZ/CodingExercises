class TripleStack:
  def __init__(self, stack_size):
    self.stack_size = stack_size
    self.array = [None] * (stack_size * 3)
    self.top = [0,0,0]

  def append(self, stack_number, value):
    if self.top[stack_number] < self.stack_size:
      index = stack_number * self.stack_size + self.top[stack_number]
      self.array[index] = value
      self.top[stack_number] += 1
    else:
      print(f"Stack {stack_number} is full. Cannot push {value}.")
  def pop(self, stack_number):
    if self.top[stack_number] > 0:
      index = stack_number * self.stack_size + self.top[stack_number] - 1
      value = self.array[index]
      self.array[index] = None
      self.top[stack_number] -= 1
      return value
    else:
       print(f"Stack {stack_number} is empty.")
  def peek(self, stack_number):
    if self.top[stack_number] > 0 :
      index = stack_number * self.stack_size + self.top[stack_number] - 1
      return self.array[index]
    else:
      print(f"Stack {stack_number} is empty.")

stack = TripleStack(stack_size=3)
stack.append(0,1)
stack.append(1,3)
stack.append(2,5)
stack.append(0,10)
stack.append(1,9)
stack.append(2,8)

print(stack.peek(0))
