// You create a program that will guess numbers between 1-100, and respond appropriately 
// based on whether users say that the number is too high or too low.
var readline = require('readline').createInterface(process.stdin, process.stdout);

var max = 100;
var min = 1;
var i = 0;
var number = Math.floor(Math.random() * (max - min + 1)) + min;
var done = false;

// See https://stackoverflow.com/questions/24464404/how-to-readline-infinitely-in-node-js
var recursiveAsyncReadLine = function () {
    readline.question(':> ', function (answer) {
        if (answer === 'exit') {
            console.log('Bye!');
            return readline.close();
        }
        console.log('Answer was', answer);
        recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine();

//readline.setPrompt(':> ');
//readline.prompt();

//readline.on('line', function (line) {
//    var l = line.trim();
//    switch (l) {
//        case 'hello':
//            console.log('World!');
//            break;
//        default:
//            console.log('Entered', l);
//            break;
//    }
//    readline.prompt();
//}).on('close', function () {
//    console.log('Bye!');
//    process.exit(0);
//});