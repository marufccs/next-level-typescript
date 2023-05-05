// Normal Function
// default parameter
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(30, 60);

// spread operator
const myFriends = ["chandler", "joey", "ross"];
const newFriends = ["monica", "rachel", "pheobe"];

myFriends.push(...newFriends);
console.log(myFriends);

// rest parameter
const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`Hi ${friend}`));

greetFriends("kashem", "hashem", "gashem");
