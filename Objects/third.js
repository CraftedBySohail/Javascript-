// First Thought: "Instead of getting the whole box, just give me the specific items I want out of it."
// Destructing

const user = {
  id: 123,
  name: "Alice",
  email: "alice@example.com",
  profile: {
    isAdmin: true
  }
};

// --- Basic Destructuring ---
// Old way:
// const name = user.name;
// const age = user.age;

// New way with destructuring:
const { name, age } = user; // Create variables 'name' and 'age' from user object.
console.log(name); // "Alice"
console.log(age);  // undefined (because 'age' doesn't exist on the object)


// --- Renaming Variables ---
// What if you already have a variable named 'name'? You can rename it.
const { name: userName, email } = user;
console.log(userName); // "Alice"

// --- Setting Default Values ---
// What if a property might not exist? You can provide a default.
const { name: personName, role = "User" } = user;
console.log(personName); // "Alice"
console.log(role);       // "User" (because 'role' didn't exist on the object)

// --- Nested Destructuring ---
// You can even pull from nested objects.
const { profile: { isAdmin } } = user;
console.log(isAdmin); // true
