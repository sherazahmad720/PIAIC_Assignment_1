export  function runTasks(): void {
  // Task 2 - Personal Message: Store a person’s name in a variable, and print a message to that person
  var person_name = "Sherazi";

  console.log("Hello " + person_name + "!, Are you ready for the next task?");
  var person2_name = "Sheraz Ahmad";
  //Task 3 - Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
  console.log("Lower Case: " + person2_name.toLowerCase());
  console.log("Upper Case: " + person2_name.toUpperCase());
  // title case
  var titleCase = person2_name.split(" ");
  var titleCaseName = "";
  for (var i = 0; i < titleCase.length; i++) {
    titleCaseName +=
      titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1) + " ";
  }
  console.log("Title Case: " + titleCaseName);

  // Task 4 - Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
  console.log(
    'Robert C. Martin said : "Clean code always looks like it was written by someone who cares"'
  );

  // Task 5  -  Repeat Exercise 4, but this time store the famous person’s name in a variable called
  // famous_person. Then compose your message and store it in a new variable called message. Print your message.
  var famous_person = "Felienne Hermans";
  var message = `${famous_person} said :"Confusion is part of programming."`;
  console.log(message);

  // Task 6 - Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
  // Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
  // so the whitespace around the name is displayed. Then print the name after striping the white spaces.
  var person_name = "\t   Sherazi   \n";
  console.log("Before Striping", person_name);
  console.log("After Stripping", person_name.trim());

  // Task 7- Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
  console.log(5 + 3);
  console.log(10 - 2);
  console.log(4 * 2);
  console.log(16 / 2);

  //Task 8 - You should create four lines that look like this:
  // console.log(5 + 3).
  console.log("---------------------------------");
  console.log(5 + 3);
  console.log("---------------------------------");
  console.log(12 - 4);
  console.log("---------------------------------");
  console.log(4 * 2);
  console.log("---------------------------------");
  console.log(16 / 2);
  console.log("---------------------------------");

  // Task 9 - Favorite Number: Store your favorite number in a variable.
  // Then, using that variable, create a message that reveals your favorite number.

  var favorite_number = 7;
  console.log("My favorite number is " + favorite_number);

  // Task 10 - Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each

  //Sheraz Ahmad   15 Nov, 2023 
  // This function is used to add two numbers
  sum(5, 3);
  
  //Sheraz Ahmad   15 Nov, 2023
  // This function is used to subtract two numbers
  sub(5, 3);
}

function sum(a: number, b: number): number {
  return a + b;
}
function sub(a: number, b: number): number {
  return a - b;
}
