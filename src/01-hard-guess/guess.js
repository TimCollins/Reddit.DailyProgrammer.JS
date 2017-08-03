// You create a program that will guess numbers between 1-100, and respond appropriately 
// based on whether users say that the number is too high or too low.
var readline = require('readline').createInterface(process.stdin, process.stdout);

var max = 100;
var min = 1;
var guess = 50;
var turns = 0;

// See https://stackoverflow.com/questions/24464404/how-to-readline-infinitely-in-node-js
var recursiveAsyncReadLine = function () {
    console.log('Is your number (h)igher than, (l)ower than or (e)qual to', guess, '?');

    readline.question(':> ', function (answer) {
        if (answer === 'h') {
            guess = parseInt((guess + max) / 2);
            turns++;
        } else if (answer === 'l') {
            guess = parseInt((min + guess) / 2);
            turns++;
        } else if (answer === 'e') {
            console.log('Guessed the correct number in', turns, 'turns.');
            return readline.close();
        } else if (answer === 'exit') {
            console.log('Bye!');
            return readline.close();
        } else {
            console.log('Try again');
        }

        recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine();
