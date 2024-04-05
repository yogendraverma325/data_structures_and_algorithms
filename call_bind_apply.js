function greet(message, punctuation, bye) {
  console.log(
    `vv${message}, ${this.firstName} ${this.lastName}${punctuation}${bye}`
  );
}

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

// Using call() to invoke greet() with multiple arguments
greet.call(person1, "gHello", "ererrer", "bye"); // Output: Hello, John Doe!

function greet2(message, punctuation) {
  console.log(`${message}, ${this.firstName} ${this.lastName}${punctuation}`);
}

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

// Using bind() to create a new function with multiple arguments
const greetPerson = greet2.bind(person2, "Hello", "!");
greetPerson(); // Output: Hello, John Doe!

function greet3(message, others) {
  console.log(`${message}, ${this.firstName} ${this.lastName}${others}`);
}

const person3 = {
  firstName: "John",
  lastName: "Doe",
};

// Using apply() to invoke greet() with multiple arguments
greet3.call(person3, ["Hello", "!", "yogi"], ["Hello", "!", "yogi"]); // Output: Hello, John Doe!
