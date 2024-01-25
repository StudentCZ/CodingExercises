class TripleStack:
  def __init__(self, stack_size):
    self.stack_size = stack_size
    self.array = [None] * (stack_size * 3)
    self.top = [0,0,0]

  def push(self, stack_number, value):
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
