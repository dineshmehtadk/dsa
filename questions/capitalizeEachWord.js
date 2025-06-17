

const name ="This javascript program";


const capitalized = name
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(capitalized)