// class Config{
//     static dbUser = 'username';
//     static dbPassword = 'secret';
//     static apiToken = 'abcd';
// }

// console.log(Config.apiToken);

class User {
  static id = 1;
  static cache = { 1: 'some value' };

  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = User.id++;
  }

  static{
    console.log("initialized static for first time");
  }

  static checkCache() {
    console.log(this.cache, ' from class');
  }

  static hasInCache() {
    this.checkCache();
  }

  static compareByAge(u1, u2) {
    return u1.age - u2.age;
  }

  static compareByIncome(u1, u2) {
    return u1.income - u2.income;
  }
}
console.log(User.hasInCache(), 'cache called');

const user1 = new User('Rakesh', 30, 434);
// console.log(user1.checkCache());

const user2 = new User('John', 40, 232);
const user3 = new User('u3', 20, 234);

const users = [user1, user2, user3];

users.sort(User.compareByAge);
users.sort(User.compareByIncome);

console.log(users);
