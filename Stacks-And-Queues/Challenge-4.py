class MyQueue:
  def __init__(self):
    self.stack_one = []
    self.stack_two = []
  def enqueue(self,value):
    self.stack_one.append(value)
  def dequeue(self):
    if not self.stack_two:
      while self.stack_one:
        self.stack_two.append(self.stack_one.pop())
    if self.stack_two:
      return self.stack_two.pop()
    else:
      return None
