class AnimalShelter {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
    this.order = 0;
  }
  enqueue(animal, type) {
    const entry = { animal, type, order: this.order++ };
    if (type === 'dog') {
      this.dogQueue.push(entry);
    } else if (type === 'cat') {
      this.catQueue.push(entry);
    } else {
      throw new Error(
        'Invalid animal type. Supported types are "dog" and "cat".'
      );
    }
  }
  dequeueDog() {
    if (this.dogQueue.length === 0) {
      throw new Error('No dogs available for adoption.');
    }
    return this.dogQueue.shift().animal;
  }
  dequeueCat() {
    if (this.catQueue.length === 0) {
      throw new Error('No cats available for adoption.');
    }
    return this.catQueue.shift().animal;
  }
  dequeueAny() {
    if (this.dogQueue.length === 0) {
      return this.dequeueCat();
    }
    if (this.catQueue.length === 0) {
      return this.dequeueDog();
    }
    const oldestDog = this.dogQueue[0];
    const oldestCat = this.catQueue[0];

    return oldestDog.order < oldestCat.order
      ? this.dequeueDog()
      : this.dequeueCat();
  }
}

const animalShelter = new AnimalShelter();

animalShelter.enqueue('Sam', 'dog');
animalShelter.enqueue('Alex', 'cat');
animalShelter.enqueue('Max', 'dog');
animalShelter.enqueue('Paw', 'cat');

console.log(animalShelter.dequeueDog());
console.log(animalShelter.dequeueCat());
console.log(animalShelter.dequeueAny());

const createAnimalShelter = () => {
  const state = {
    dogQueue: [],
    catQueue: [],
    order: 0,
  };

  const enqueue = (animal, type) => {
    const entry = { animal, type, order: state.order++ };
    if (type === 'dog') {
      state.dogQueue.push(entry);
    } else if (type === 'cat') {
      state.catQueue.push(entry);
    } else {
      throw new Error(
        'Invalid animal type. Supported types are "dog" and "cat".'
      );
    }
  };
  const dequeueDog = () => {
    if (state.dogQueue.length === 0) {
      throw new Error('No dogs available for adoption.');
    }
    return state.dogQueue.shift().animal;
  };
  const dequeueCat = () => {
    if (state.catQueue.length === 0) {
      throw new Error('No cats available for adoption.');
    }
    return state.catQueue.shift().animal;
  };
};
