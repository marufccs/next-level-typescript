class Person {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `${this.name} sleeps for ${hours} hours`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}
const student = new Student("Maruf", 19, "Milan");

class Teacher {
  name: string;
  age: number;
  address: string;
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.designation = designation;
  }

  makeSleep(hours: number): string {
    return `${this.name} sleeps for ${hours} hours`;
  }
  takesClasses(numOfClasses: number): string {
    return `${this.name} takes ${numOfClasses} classes`;
  }
}
