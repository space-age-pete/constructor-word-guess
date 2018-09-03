var Letter = require("./letter.js");

function Word(word) {
    var someLetters = word.split("");
    for (var i = 0; i < someLetters.length; i++) {
        someLetters[i] = new Letter(someLetters[i]);
    }
    this.letters = someLetters;
}

Word.prototype.toString = function () {
    return this.letters.join(" ");
}

Word.prototype.guess = function (letter) {
    var found = false;
    this.letters.forEach(element => {
        if (element.guess(letter)) {
            found = true;
        }
    });
    return found;
}

module.exports = Word;