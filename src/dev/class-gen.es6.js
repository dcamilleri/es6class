module.exports = function(options) {

    console.log("options.methods",options.methods);

    var name    = options.name,
        extd    = options.extends ? 'extends ' + options.extends : '',
        methods = options.methods ? generateMethods(options.methods) : '';

        console.log("methods",methods);

    function generateMethods(methods) {

        var methodsString = '';

        for (var i = 0; i < methods.length; i++) {

            methodsString += '\n\n    ' + methods[i] + '() {\n\n    }';
        }

        return methodsString;
    }

    return `class ${name} ${extd} {

    constructor(options) {

    }${methods} 

}`;
};