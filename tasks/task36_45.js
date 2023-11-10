"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTasks = void 0;
function runTasks() {
    //Task 36 - T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
    // The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
    make_shirt("Large", "Hello World");
    make_shirt("Medium", "Coding is fun");
    //task 37 - Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
    // Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
    make_shirt_modified();
    make_shirt_modified("Medium");
    make_shirt_modified("Small", "I love Coding");
    // task 38 - Cities: Write a function called describe_city() that accepts the name of a city and its country.
    // The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country
    // a default value. Call your function for three different cities, at least one of which is not in the default country.
    describe_city("Karachi");
    describe_city("Lahore");
    describe_city("Istanbul", "Turkey");
    //Task 39 - ity Names: Write a function called city_country() that takes in the name of a city and its country.
    // The function should return a string formatted like this:
    console.log(city_country("Karachi", "Pakistan"));
    console.log(city_country("Lahore", "Pakistan"));
    console.log(city_country("Istanbul", "Turkey"));
    // Task 40 - Album: Write a function called make_album() that builds a Object describing a music album
    make_album("Atif Aslam", "Doorie");
    make_album("Ali Zafar", "Huqa Pani");
    make_album("Ali Azmat", "Social Circus");
    make_album("Ali Haider", "Qarar", 10);
    // Task 41 -Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
    // which prints the name of each magician in the array.
    var magicians = ["Dynamo", "David Blaine", "Chris Angel"];
    show_magicians(magicians);
    //Task 42 - Great Magicians
    make_great(magicians);
    show_magicians(magicians);
    console.log("-----------------");
    // Task 43 - Unchanged Magicians:
    var magicians_copy = ["Dynamo", "David Blaine", "Chris Angel"];
    var greate_magicians = make_great_and_return(magicians_copy);
    show_magicians(greate_magicians);
    show_magicians(magicians_copy);
    // Task 44 - Sandwiches:  Write a function that accepts a array of items a person wants on a sandwich.
    make_sandwich(["Bread", "Butter", "Jam"]);
    make_sandwich(["Bread", "Butter", "Jam", "Egg"]);
    make_sandwich(["Bread", "Butter", "Jam", "Egg", "Cheese"]);
    //Cars: Write a function that stores information about a car in a Object.
    var car = make_car("Toyota", "Corolla", "color", "blue", "optionalFeature", "navigation");
    console.log(car);
    var car2 = make_car("Honda", "Civic", "Transmission", "Automatic", "Color", "White", "Sunroof", "Yes");
    console.log(car2);
    var car3 = make_car("Suzuki", "Cultus", "doors", 4, "color", "White", "Sunroof", "No");
    console.log(car3);
}
exports.runTasks = runTasks;
function make_shirt(size, message) {
    console.log(`Size of shirt is ${size} and message on it is "${message}"`);
}
function make_shirt_modified(size = "Large", message = "I love TypeScript") {
    console.log(`Size of shirt is ${size} and message on it is "${message}"`);
}
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
function city_country(city, country) {
    return `${city}, ${country}`;
}
function make_album(artris_name, album_title, tracks) {
    var album = {
        artist: artris_name,
        album: album_title,
    };
    if (tracks) {
        album.total_tracks = tracks;
    }
    return album;
}
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
function make_great_and_return(magicians) {
    var new_magicians = [];
    magicians.forEach((magician) => {
        new_magicians.push("The Great " + magician);
    });
    return new_magicians;
}
function make_sandwich(items) {
    console.log("You ordered a sandwich with following items: ");
    items.forEach((item) => {
        console.log(item);
    });
}
function make_car(manufacturer, model, ...options) {
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
    }
    return car;
}
