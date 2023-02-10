export class Items {
  id: number;
  username: string;
  age: number;
  constructor(username: string, age: number) {
    this.id = Math.random();
    this.username = username;
    this.age = age;
  }
}
