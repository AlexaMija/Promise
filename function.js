export default function.js
startGame();
var warrior1;
var warrior2;
var warrior3;
var warrior4;
var warrior5;

const arenaWithWarriors = ( numWarriors = 5) => {
  if (typeof numWarriors !== "number" || numWarriors > 5 || numWarriors < 1) {
    throw Error("Please enter a valid number of warriors (1 - 5)")
  }
  function startGame(numWarriors) {
    if (numWarriors = 5 ) {
      return "Let's start the game! "
    } else {
      return false (or null) (or "Something going wrong.")
    }
}
class Warrior = {
  constructor(name, health = 100, rechargeTime = 1000 * health / 100,
  damage = healt / 100 ) {
  this.name = name;
  this.health = health;
  this.rechargeTime = rechargeTime;
  this.damage = damage;
}
}
async attack(warrior, fightLog) => {
const attackFunction (warrior, fightLog)
setTimeout(() => {
  function randomWarriors(min, max) {
    return Math.flor (Math.random () * (max - min + 1)) + min }
  var ourRandomWarrior = randomWarrior(1, 5);
  }
  if (ourRandomWarrior.health > 0 ) {
  //  return async attack //Ona ima rekurzivni poziv same sebe.
    var newWarrior = ourRandomWarrior.health - 10;
    /**Random unit, koji ima healt >
    DA LI JE OVDE POTREBNO THIS. ?
    */
  }
}
  attackFunction(warrior, fightLog);
}, 300) // 300milisek do next attack for this warrior
};
attackFunction(warrior, figthLog);
}
}
/*korak 3 U combatSimulator funkciji napraviti instance klase warrior za
tacan broj numWarriors koje dobijes u parametrima
*/
const arenaWithWarriors = (numWarriors = 5) => {
  if (typeof numWarriors !== "number" || numWarriors > 5 || numWarriors < 1) {
    throw Error ("Please enter a valid number of warrior (1 - 5)")
  }
  const newWarrior = [];
for (let i = 1; i <= numWarriors; i++) {
  units.push(new Warrior("Ratnik" + i));
}
/*Posle ove iteracije u "Warrionra" imam sve instance jedinice
ya borbu
*/
}
/* Korak 4
U combatSimulator funkciji definisati neki loop sa setInterval koji
ce poyvati funkciju za napad sa jednom od definisanih warriora
*/
const arenaWithWarriors = (numWarriors = 5) => {
  if (typeof numWarriors || numWarriors > 5 || numWarriors < 1) {
    throw Error ("Please enter a valid number of units ( 1 - 5)")
  }
  const newWarriors = [];
  for (let i = 1 i <= numWarriors; i++) {
    units.push(newWarrior("Ratnik" + 1));
  }
  const combatLog = (message = "") => {
    console.log(message);
  };
  units.forEach(warrior => {
    warrior.attack(warrior, fightLog);
  });
}
/*Poyvati funkciju combatSimulator na dnu index file-a
*/
arenaWithWarriors(3);
