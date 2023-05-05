type NoobDeveloper = {
  name: string;
};

// Intersection Type
type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};

// Union
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Moznu Mia",
  expertise: "JavaScript",
  experience: 1,
};

// Nullish Coalesnace Operator
// it works only when there's null and undefined

const isAuthenticatedUser = "";
const userName = isAuthenticatedUser ?? "Guest";
console.log(userName);
