var readline = require('readline').createInterface(process.stdin, process.stdout);
var name, age, username;


readline.question('Name: ', (answer) => {
    name = answer;
    console.log('Entered', name);

    readline.question('Age: ', (answer) => {
        age = answer;
        console.log('Entered', age);

        readline.question('Username: ', (answer) => {
            username = answer;
            console.log(`Your name is ${name}, you are ${age} years old, and your username is ${username}`);

            process.exit(0);
        });
    });
});

// This probably isn't the right way to declare a callback.
//readline.question('Name: ', nameCallback);

//var nameCallback = (name) => {
//    name = answer;
//    console.log('Entered', answer);
//    process.exit(0);
//}

//readline.question('Age: ', (answer) => {
//    age = answer;
//});

//readline.question('Username: ', (answer) => {
//    username = answer;
//    console.log(`Your name is ${name}, you are ${age} years old, and your username is ${username}`);
//});