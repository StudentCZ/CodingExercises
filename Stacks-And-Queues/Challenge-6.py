from collections import deque

class AnimalShelter:
  def __init__(self):
    self.dogs = deque()
    self.cats = deque()
    self.timestamp = 0

  def enqueue(self, animal, animal_type):
    self.timestamp += 1
    animal_data = {'animal': animal, 'timestamp': self.timestamp}

    if animal_type == 'dog':
      self.dogs.append(animal_data)
    elif animal_type == 'cat':
      self.cats.append(animal_data)
    else:
      raise ValueError("Invalid animal type. Use 'dog' or 'cat'.")

  def dequeueAny(self):
    if not self.dogs and not self.cats:
      return None

    if not self.dogs:
      return self.cats.popleft()['animal']
    elif not self.cats:
      return self.dogs.popleft()['animal']

    if self.dogs[0]['timestamp'] < self.cats[0]['timestamp']:
      return self.dogs.popleft()['animal']
    else:
      return self.cats.popleft()['animal']

  def dequeueDog(self):
    if not self.dogs:
      return None
    return self.dogs.popleft()['animal']

  def dequeueCat(self):
    if not self.cats:
      return None
    return self.cats.popleft()['animal']

shelter = AnimalShelter()

shelter.enqueue('Sam', 'dog')
shelter.enqueue('Alex', 'dog')
shelter.enqueue('May', 'cat')
shelter.enqueue('Love', 'cat')

print(shelter.dequeueAny())
print(shelter.dequeueCat())
print(shelter.dequeueDog())
