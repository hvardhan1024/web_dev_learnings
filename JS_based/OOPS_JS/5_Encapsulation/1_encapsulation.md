# Encapsulation in JavaScript

Encapsulation is one of the fundamental principles of object-oriented programming (OOP). It involves bundling the data (attributes or properties) and methods (functions) that operate on the data into a single unit known as an object. In JavaScript, objects are a natural way to implement encapsulation.

Here are some key points about encapsulation in JavaScript:

- **Objects**: In JavaScript, objects are used to encapsulate data and related behaviors. You can create objects to represent real-world entities or abstract concepts. For example, you might create an object to represent a car, an employee, or a user.

- **Properties**: Properties represent the object's data or state. These can be defined as variables within the object and are used to store and manage data. Properties should often be declared with the `var`, `let`, or `const` keywords to control their scope and visibility.

- **Methods**: Methods represent the object's behaviors or actions. These are functions defined within the object that can operate on the object's data. Methods encapsulate the logic needed to manipulate the object's state.

- **Access Control**: Encapsulation allows you to control access to an object's properties and methods. In JavaScript, there isn't a strict access control mechanism like in some other programming languages. However, you can use closure or naming conventions to denote private properties or methods. It's a common practice to prefix private properties or methods with an underscore (e.g., `_privateProperty`).

- **Getters and Setters**: JavaScript provides getter and setter methods that allow you to encapsulate access to object properties. Getters retrieve the value of a property, and setters set the value. This enables you to implement custom behavior when reading or writing a property.

- **Example**:
  ```javascript
  function Person(name, age) {
    // Public properties
    this.name = name;
    
    // Private property (convention with underscore)
    let _age = age;

    // Getter method for age
    this.getAge = function () {
      return _age;
    };

    // Setter method for age
    this.setAge = function (newAge) {
      if (newAge >= 0) {
        _age = newAge;
      } else {
        console.log("Age cannot be negative.");
      }
    };
  }

  const person = new Person("Alice", 30);
  console.log(person.name); // Access public property
  console.log(person.getAge()); // Access age through getter
  person.setAge(35); // Update age through setter
  console.log(person.getAge());

  // Accessing the private property directly will not work:
  // console.log(person._age); // Undefined


- Getters and Setters Example:

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Getter method for area
  get area() {
    return Math.PI * this.radius ** 2;
  }

  // Setter method for area
  set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI);
  }
}

const circle = new Circle(5);
console.log(circle.area); // Access area through getter
circle.area = 78.54; // Update area through setter
console.log(circle.radius); // Radius updated accordingly

```

Encapsulation in JavaScript promotes clean and organized code by hiding internal details, which can help prevent unintended changes to an object's state and behavior. It's an essential concept in building maintainable and understandable software systems.