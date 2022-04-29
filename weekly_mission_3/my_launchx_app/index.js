const MissionCommander = require('./app/MissionCommander');

const juan = new MissionCommander('Juan');
const pedro = new MissionCommander('Pedro');
const raul = new MissionCommander('Raul');

console.log(juan.name);
console.log(pedro.name);
console.log(raul.name);