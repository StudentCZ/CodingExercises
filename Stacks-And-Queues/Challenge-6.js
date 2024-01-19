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
}

const createAnimalShelter = () => {
  const state = {
    dogQueue: [],
    catQueue: [],
    order: 0,
  };
};
