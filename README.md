6. How does TypeScript help in improving code quality and project maintainability?


TypeScript improves the code quality and maintainability by adding type checking, which helps to catch errors from beginning during development. It will make your code easier to understand, auto-complete, and refactor, and it prevents common bugs by ensuring variables, functions, and objects are used correctly. This leads to more reliable, organized, and scalable projects.

TypeScript helps make your code better and easier to manage by:
1. Catching mistakes early
TypeScript checks your code while you're writing it, so you catch errors before running it.
Example: let age: number = "25";  //Error: Type 'string' is not assignable to type 'number'

2. Making code easier to understand
You can see what each function or variable is supposed to do because types describe them.
Example: 
function greet(name: string): string {
  return "Hello, " + name;
}
//Now you know 'name' must be a string and the function returns a string.

3. Helping with auto-complete and suggestions
Most code editors can give better hints when you use TypeScript.
Example: let user = { name: "Ali", age: 30 };
// user. (your editor will suggest name and age)

4. Preventing bugs when changing code
When you update one part, TypeScript tells you what else needs to change so nothing breaks.
Example:
 If you rename a field in an object, TypeScript will show errors in all places that use it.

5. Working well in big projects
In large apps with many files, TypeScript keeps things organized and consistent.

 In short: TypeScript is like a helpful assistant that checks your code, explains it better, and protects it from bugs — especially useful as your project grows.