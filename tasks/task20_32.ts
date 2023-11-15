export function runTasks(): void {
  //Task 20 - Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities,
  // languages, or anything else you’d like. Write a program that creates a list containing these items.
  var mountains = ["K2", "Everest", "Nanga Parbat", "Broad Peak"];
  var rivers = ["Indus", "Jhelum", "Chenab", "Ravi", "Sutlej"];
  var countries = ["Pakistan", "India", "China", "Iran", "Afghanistan"];
  var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
  var languages = ["Urdu", "English", "Arabic", "Chinese", "Persian"];
  var things = [mountains, rivers, countries, cities, languages];
  console.log("Things: ", things);

  //Task 21 - They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
  var thing_object = {
    mountains: mountains,
    rivers: rivers,
    countries: countries,
    cities: cities,
    languages: languages,
  };
  console.log("Thing Object: ", thing_object);

  //Task 22 - Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
  //Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
  // console.log(mountains[9]);

  //Task 23 - Conditional Tests:
  let mobile = "iphone";
  console.log(mobile == "iphone" ? true : false);
  console.log(mobile == "samsung" ? true : false);
  console.log(mobile != "nokia" ? true : false);
  console.log(mobile != "iphone" ? true : false);
  let obtainedMarks = 80;
  console.log(obtainedMarks >= 80 ? true : false);
  console.log(obtainedMarks == 90 ? true : false);
  console.log(obtainedMarks > 70 ? true : false);
  console.log(obtainedMarks <= 70 ? true : false);
  console.log(obtainedMarks <= 80 ? true : false);
  console.log(obtainedMarks != 80 ? true : false);
  let car = "subaru";
  console.log("Is car == 'subaru'? I predict True.");
  console.log(car == "subaru");
  let number = 5;
  console.log("Is number == 5? I predict True.");
  console.log(number == 5);
  let language = "Urdu";
  console.log("Is language == 'Urdu'? I predict True.");
  console.log(language == "Urdu");
  let country = "Pakistan";
  console.log("Is country == 'Pakistan'? I predict True.");
  console.log(country == "Pakistan");
  let city = "Karachi";
  console.log("Is city == 'Karachi'? I predict True.");
  console.log(city == "Karachi");
  let os = "MacOS";
  console.log("Is os == 'Windows'? I predict False.");
  console.log(os == "Windows");
  let food = "Biryani";
  console.log("Is food == 'Pizza'? I predict False.");
  console.log(food == "Pizza");
  let color = "Blue";
  console.log("Is color == 'Red'? I predict False.");
  console.log(color == "Red");
  let book = "Clean Code";
  console.log("Is book == '80/20 rule'? I predict False.");
  console.log(book == "80/20 rule");
  let person = "Sherazi";
  console.log("Is person == 'Faizan'? I predict False.");
  console.log(person == "Faizan");

  // Tasl 24 - More Conditional Tests: You don’t have to limit the number of tests you create to 10.

  var user = "Sherazi";
  console.log("Is user == 'sherazi'?");
  console.log(user == "sherazi");
  console.log("Is user != 'Faizan'?");
  console.log(user != "Faizan");
  var email = "Abc@gmail.com";
  console.log("Is email == 'abc@gmail.com'?");
  console.log("abc@gmail.com" == email.toLowerCase());
  var person_age = 25;
  console.log("is user is greater than 18?");
  console.log(person_age > 18);
  console.log("is user is less than 18?");
  console.log(person_age < 18);
  var has_driving_license = true;
  console.log("is user is greater then 18 and  has driving license?");
  console.log(person_age > 18 && has_driving_license);
  console.log("is user is greater then 18 or has driving license?");
  console.log(person_age > 18 || has_driving_license);
  var friends = ["Sherazi", "Faizan", "Hassan", "Afshan"];
  console.log("is Sheheryar is in friends list?");
  console.log(friends.indexOf("Sheheryar") != -1);
  console.log("is Sherazi is in friends list?");
  console.log(friends.indexOf("Sherazi") != -1);
  var marks = 80;
  console.log("is marks is greater than or Equalt to 90?");
  console.log(marks >= 90);
  console.log("is marks is greater than or Equalt to 80?");
  console.log(marks >= 80);
  console.log("is marks is greater than or Equalt to 70?");
  console.log(marks >= 70);
  console.log("is marks is less than or Equalt to 50?");
  console.log(marks <= 50);

  // Task 25 - Alien Colors #1: Imagine an alien was just shot down in a game.
  //Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

  var alien_color = "green";
  if (alien_color == "green") {
    console.log("You just earned 5 points");
  }

  // Task 26 - Alien Colors #2:
  var alien_color2 = "yellow";
  if (alien_color2 == "green") {
    console.log("You just earned 5 points");
  } else {
    console.log("You just earned 10 points");
  }

  alien_color2 = "green";
  if (alien_color2 == "green") {
    console.log("You just earned 5 points");
  } else {
    console.log("You just earned 10 points");
  }

  //Task 27 - Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
  var alien_color3 = "green";
  if (alien_color3 == "green") {
    console.log("You just earned 5 points");
  } else if (alien_color3 == "yellow") {
    console.log("You just earned 10 points");
  } else {
    console.log("You just earned 15 points");
  }

  alien_color3 = "yellow";
  if (alien_color3 == "green") {
    console.log("You just earned 5 points");
  } else if (alien_color3 == "yellow") {
    console.log("You just earned 10 points");
  } else {
    console.log("You just earned 15 points");
  }
  alien_color3 = "red";
  if (alien_color3 == "green") {
    console.log("You just earned 5 points");
  } else if (alien_color3 == "yellow") {
    console.log("You just earned 10 points");
  } else {
    console.log("You just earned 15 points");
  }
  // Task 28 - Stages of Life: Write an if-else chain that determines a person’s stage of life.
  var age = 25;
  if (age < 2) {
    console.log("Person is a baby");
  } else if (age >= 2 && age < 4) {
    console.log("Person is a toddler");
  } else if (age >= 4 && age < 13) {
    console.log("Person is a kid");
  } else if (age >= 13 && age < 20) {
    console.log("Person is a teenager");
  } else if (age >= 20 && age < 65) {
    console.log("Person is an adult");
  } else if (age >= 65) {
    console.log("Person is an elder");
  }

  // Task 29 - Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
  //if statements that check for certain fruits in your array.
  var favorite_fruits = ["Apple", "Banana", "Mango"];
  if (favorite_fruits.indexOf("Apple") != -1) {
    console.log("You really like apples");
  }
  if (favorite_fruits.indexOf("Banana") != -1) {
    console.log("You really like bananas");
  }
  if (favorite_fruits.indexOf("Mango") != -1) {
    console.log("You really like mangoes");
  }
  if (favorite_fruits.indexOf("Orange") != -1) {
    console.log("You really like oranges");
  }
  if (favorite_fruits.indexOf("Grapes") != -1) {
    console.log("You really like grapes");
  }

  // Task 30 -Hello Admin: Make a array of five or more usernames, including the name 'admin'.
  // Imagine you are writing code that will print a greeting to each user after they log in to a website.
  // Loop through the array, and print a greeting to each user:

  var usernames = ["Sherazi", "Faizan", "Hassan", "Afshan", "admin"];
  usernames.forEach((username) => {
    if (username == "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log("Hello " + username + ", thank you for logging in again");
    }
  });
  //Task 31 - No Users: Add an if test to make sure the list of users is not empty.
  if (usernames.length == 0) {
    console.log("We need to find some users!");
  }
  usernames.splice(0, usernames.length);
  if (usernames.length == 0) {
    console.log("We need to find some users!");
  }
  // Task 32 - Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
  let current_users: string[] = [
    "Sherazi",
    "Faizan",
    "Hassan",
    "Afshan",
    "Saad",
    "Sheheryar",
  ];
  var new_users = ["Sherazi", "Hassan", "Danish", "hassan", "Zulqarnain"];
  new_users.forEach((new_user) => {
    if (current_users.indexOf(new_user) != -1) {
      console.log("Sorry " + new_user + ", that name is taken");
    } else {
      console.log("Great, " + new_user + " is still available");
    }
  });
}
