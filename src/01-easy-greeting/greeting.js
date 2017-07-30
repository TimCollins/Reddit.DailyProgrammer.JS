var readline = require('readline').createInterface(process.stdin, process.stdout);
var fs = require('fs');
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

    var msg = `Your name is ${name}, you are ${age} years old, and your username is ${username}.`;
    console.log(msg);

    fs.writeFile('test.txt', msg, function(err) {
        if (err) {
            throw err;
        }

        console.log('File has been saved');
        process.exit(0);
    });
}