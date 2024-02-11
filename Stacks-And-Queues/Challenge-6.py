from collections import deque

class AnimalShelter:
  def __init__(self):
    self.dogs = deque()
    self.cats = deque()
    self.timestamp = 0

  def enqueue(self, animal, animal_type):
    self.timestamp += 1
    animal_data = {'animal': animal, 'timestamp': self.timestamp}

