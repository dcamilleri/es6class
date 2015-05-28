module.exports = function(userArgs) {

    var extendsIndex   = userArgs.indexOf('-e') || userArgs.indexOf('-extends'),
        methodsIndex   = userArgs.indexOf('-m') || userArgs.indexOf('-methods'),
        resGen         = {
            fileName : userArgs[0].replace('.js', ''),
            name     : userArgs[1]
        };

    if(extendsIndex != -1) { 

        var classExtends = userArgs[extendsIndex + 1];

        if(classExtends) resGen.extends = classExtends;
    } 

    if(methodsIndex != -1) {

        var classMethods = [];

        for (var i = methodsIndex + 1; i < userArgs.length; i++) {

            classMethods.push(userArgs[i]);
        }

        if(classMethods.length > 0) resGen.methods = classMethods;
    }

    return resGen;

};