export class Items {
  id: number;
  text: string;
  age: number;
  constructor(text: string, age: number) {
    this.id = Math.random();
    this.text = text;
    this.age = age;
  }
}
