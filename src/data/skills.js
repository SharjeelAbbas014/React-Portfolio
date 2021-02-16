let skills = [
  "node",
  "react",
  "Redux",
  "firebase",
  "mongo",
  "python",
  "aws",
  "next",
  "js-ts",
];

for (let i = 0; i < skills.length; i++) {
  skills[i] = require("../imgs/" + skills[i] + ".png").default;
}

console.log(skills);
export default skills;
