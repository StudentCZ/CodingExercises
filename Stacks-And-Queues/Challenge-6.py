from collections import deque

class AnimalShelter:
  def __init__(self):
    self.dogs = deque()
    self.cats = deque()
    self.timestamp = 0
