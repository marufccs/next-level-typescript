class Animal {
  constructor(
    public name: string,
    public specie: string,
    public sound: string
  ) {}

  public makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("German Shephard", "Luffy", "gheu gheu");
dog.makeSound();
