class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name); // Call the constructor of the base class
  }

  makeSound(): void {
    console.log(`${this.name} barks.`);
  }

  fetch(): void {
    console.log(`${this.name} is fetching a ball.`);
  }
}

const animal = new Animal("Generic Animal");
animal.makeSound(); // Output: Generic Animal makes a sound.

const dog = new Dog("Buddy");
dog.makeSound(); // Output: Buddy barks.
dog.fetch(); // Output: Buddy is fetching a ball.
