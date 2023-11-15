"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTasks = void 0;
function runTasks() {
    // Task 11 : Names: Store the names of a few of your friends in a array called names.
    // Print each person’s name by accessing each element in the list, one at a time.
    var friends = ["Sherazi", "Faizan", "Hassan", "Afshan"];
    console.log("My Friends are: ");
    for (var i = 0; i < friends.length; i++) {
        console.log(friends[i]);
    }
    //Task 12 : Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
    //The text of each message should be the same, but each message should be personalized with the person’s name.
    console.log("Greetings: ");
    for (var i = 0; i < friends.length; i++) {
        console.log("Hi ", friends[i], ". How are you? ");
    }
    //Task 13 : Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
    // Use your list to print a series of statements about these items
    var transportation = ["Car", "Bike", "Bus", "Train"];
    for (var i = 0; i < transportation.length; i++) {
        console.log("i like to travel by " + transportation[i]);
    }
    //Task 14 :  If you could invite anyone, living or deceased, to dinner, who would you invite?
    // Make a list that includes at least three people you’d like to invite to dinner.
    // Then use your list to print a message to each person, inviting them to dinner.
    var people = ["Sherazi", "Faizan", "Hassan", "Afshan"];
    for (var i = 0; i < people.length; i++) {
        console.log("Hi " + people[i] + ", you are invited to dinner");
    }
    //Task 15: Changing Guest List: You just heard that one of your guests can’t make the dinner,
    // so you need to send out a new set of invitations.
    // You’ll have to think of someone else to invite.
    console.log("I heard that " +
        people[0] +
        " can't make it to dinner. so i feel sorry for him");
    people[0] = "Sheheryar";
    for (var i = 0; i < people.length; i++) {
        console.log("Hi " + people[i] + ", you are invited to dinner");
    }
    //Task 16 : More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
    people.unshift("Tallah");
    people.splice(2, 0, "Saad");
    people.push("Danish");
    console.log("I found a bigger dinner table so inviting more people");
    for (var i = 0; i < people.length; i++) {
        console.log("Hi " + people[i] + ", you are invited to dinner");
    }
    //Task 17 : You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
    console.log("Sorry, I can invite only two people for dinner");
    while (people.length > 2) {
        console.log("Sorry " + people.pop() + ", I can't invite you to dinner");
    }
    for (var i = 0; i < people.length; i++) {
        console.log("Hi " + people[i] + ", you are still invited to dinner");
    }
    while (people.length > 0) {
        people.pop();
    }
    console.log(people);
    //Task 18 :Seeing the World: Think of at least five places in the world you’d like to visit.
    var places = ["Naran Kagan", "Madina", "Karachi", "Dubai", "Kashmir"];
    console.log("Original Array: ", places);
    console.log("Sorted Array: ", places.slice().sort());
    console.log("Reverse Sorted Array: ", places.slice().sort().reverse());
    console.log("Original Array: ", places);
    // Reverse the order of your list. Print the array to show that its order has changed.
    places.reverse();
    console.log("Original Array after reverse: ", places);
    places.reverse();
    console.log("Original Array after reverse again: ", places);
    places.sort();
    console.log("Original Array after sort: ", places);
    places.sort().reverse();
    console.log("Original Array after sort and reverse: ", places);
    //Task 19 -Dinner Guests: Working with one of the programs from Exercises 14 through 18,
    // print a message indicating the number of people you are inviting to dinner.
    console.log("Number of people invited to dinner: ", places.length);
}
exports.runTasks = runTasks;
