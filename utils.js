exports.rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

exports.checkGuessNumber = (hiddenNumber, testNumber) => {
    if (testNumber > hiddenNumber) {
        return 'less';
    } else if (testNumber < hiddenNumber) {
        return 'more';
    } else {
        return 'correct!';
    }
};

exports.checkCorrectCommand = (command) => {
    const args = command.split(' ');
    
    if (args[0] !== 'guess') {
        return 'enter the correct command';
    }

    const value = Number(args[1]);

    if (Number.isNaN(value)) {
        return 'the value of the "guess" command is a number';
    }

    return value;
};
