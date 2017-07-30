var readline = require('readline').createInterface(process.stdin, process.stdout);
var name, age, username;

readline.question('Name: ', nameCallback);

function nameCallback(answer) {
    name = answer;
    readline.question('Age: ', ageCallback);
}

function ageCallback(answer) {
    age = answer;
    readline.question('Username: ', usernameCallback);
}

function usernameCallback(answer) {
    username = answer;

    console.log(`Your name is ${name}, you are ${age} years old, and your username is ${username}.`);
    process.exit(0);
}