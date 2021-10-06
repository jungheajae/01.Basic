// array

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri"];

console.log(daysOfWeek);

console.log(daysOfWeek[4]);

daysOfWeek.push("sat", "sun");

console.log(daysOfWeek);

// object

const player = {
  name: "heajae",
  age: 21,
  slim: true,
};

console.log(player);
console.log(player.name);

player.lastname = "jung";
player.slim = "false";
player.age = player.age + 10;
console.log(player);

// 적용해보기

const myFavoriteFood = ["sushi", "noodle", "soup"];

console.log(myFavoriteFood);
console.log(myFavoriteFood[2]);

myFavoriteFood.push("chicken", "pizza");

console.log(myFavoriteFood[4]);
