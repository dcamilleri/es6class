'use strict';

module.exports = function (userArgs) {

    function generateError(message) {
        console.log(message);
        process.exit(1);
    }

    if (userArgs.length === 0) {
        generateError('Error: You must specify arguments');
    }

    var extendsIndex = userArgs.indexOf('-e') || userArgs.indexOf('-extends'),
        methodsIndex = userArgs.indexOf('-m') || userArgs.indexOf('-methods'),
        resGen = {
        fileName: userArgs[0].replace('.js', ''),
        name: userArgs[1]
    };

    if (extendsIndex != -1 && methodsIndex != -1 && methodsIndex < extendsIndex) {
        generateError('Error: You must specify methods at the end of your command');
    }

    if (!resGen.name) {
        generateError('Error: You must specify a name for your class');
    }

    if (resGen.name === 'class') {
        generateError('Error: class is reserved keyword.');
    }

    if (extendsIndex != -1) {

        var classExtends = userArgs[extendsIndex + 1];

        if (classExtends) resGen['extends'] = classExtends;
    }

    if (methodsIndex != -1) {

        var classMethods = [];

        for (var i = methodsIndex + 1; i < userArgs.length; i++) {

            classMethods.push(userArgs[i]);
        }

        if (classMethods.length > 0) resGen.methods = classMethods;
    }

    return resGen;
};