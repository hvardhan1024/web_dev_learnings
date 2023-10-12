# Hoisting in JavaScript

Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable or call a function before they are declared in your code.

Here are some key points about hoisting:

- **Variable Hoisting**: When you declare a variable using `var`, it gets hoisted to the top of its containing function or global scope. However, only the declaration is hoisted, not the initialization. This can lead to unexpected results if you try to access the variable before declaring it.

- **Function Hoisting**: Function declarations are entirely hoisted. You can call a function before declaring it in your code. Function expressions, on the other hand, are not hoisted in the same way.

- **Order Matters**: While hoisting moves declarations to the top, it's important to remember that the order in which you declare variables and functions still matters. Variables declared later can overwrite those declared earlier in the same scope.

- **Let and Const**: Variables declared with `let` and `const` are also hoisted, but they are not initialized until their actual declaration in the code. Accessing them before declaration results in a "Temporal Dead Zone" (TDZ) error.

- **Best Practices**: To avoid confusion and potential issues, it's a good practice to declare variables at the top of their scope and functions before using them. This makes your code more readable and understandable.

