class Key {
   constructor(private signature: number) { }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected tenants: Person[] = [];
  protected door: boolean = false;

  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      console.log("The door is closed.");
      return;
    }
    this.tenants.push(person);
    console.log(`Welcome home, ${person.getKey().getSignature()}!`);
    this.door = false;
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key(Math.random());

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export { };