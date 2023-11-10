export function runTasks() :void{
  //Task 33 - Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
  var number_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  number_list.forEach((number) => {
    if (number == 1) {
      console.log(number + "st");
    } else if (number == 2) {
      console.log(number + "nd");
    } else if (number == 3) {
      console.log(number + "rd");
    } else {
      console.log(number + "th");
    }
  });
  // Task 34 - Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
  // and then use a for loop to print the name of each pizza
  var pizza_list = ["Chicken Fajita", "Chicken Tikka", "Crown Crust"];
  pizza_list.forEach((pizza) => {
    console.log(pizza);
  });
  pizza_list.forEach((pizza) => {
    console.log("I like " + pizza + " pizza");
  });
  console.log(
    "i Like Chiken Fajita\n Chicken Tikka is also good\n Crown Crust is best\n i really love pizza"
  );

  // Task 35 -Animals: Think of at least three different animals that have a common characteristic.
  var animal_list = ["Lion", "Tiger", "Leopard"];
    animal_list.forEach((animal) => {
        console.log(animal);
    });
    animal_list.forEach((animal) => {
        console.log("A " + animal + "is a wild animal");

    });
    console.log(
        "- A Lion is a wild animal \n- A Tiger is a wild animal\n- A Leopard is a wild animal"
    );

}