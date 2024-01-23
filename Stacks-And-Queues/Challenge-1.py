class TripleStack:
  def __init__(self, stack_size):
    self.stack_size = stack_size
    self.array = [None] * (stack_size * 3)
    self.top = [0,0,0]
