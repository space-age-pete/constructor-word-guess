function Letter(character) {
    this.character = character;
    this.hidden = true;
}

Letter.prototype.toString = function () {
    if (this.hidden) {
        return "_";
    }
    else {
        return this.character;
    }
}

Letter.prototype.guess = function (guessedLetter) {
    if (guessedLetter.toLowerCase() === this.character) {
        this.hidden = false;
        return true;
    }
}

module.exports = Letter;