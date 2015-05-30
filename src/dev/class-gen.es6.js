var methodPrefixer = require('./utils/method-prefixer');

module.exports = function(options) {

    let name    = options.name,
        extd    = options.extends ? ' extends ' + options.extends : '',
        methods = options.methods ? generateMethods(options.methods) : '';

    function generateMethods(methods) {

        let methodsString = '';

        for( let methodName of methods ) {

            methodName = methodPrefixer(methodName, ['static', 'get', 'set']);

            methodsString += '\n\n    ' + methodName + '() {\n\n    }';
        }

        return methodsString;
    }

    return `class ${name}${extd} {

    constructor(options) {

    }${methods}

}`;
};