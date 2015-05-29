'use strict';

var methodPrefixer = require('./utils/method-prefixer');

module.exports = function (options) {

    var name = options.name,
        extd = options['extends'] ? 'extends ' + options['extends'] : '',
        methods = options.methods ? generateMethods(options.methods) : '';

    function generateMethods(methods) {

        var methodsString = '';

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = methods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var methodName = _step.value;

                methodName = methodPrefixer(methodName, ['static', 'get', 'set']);

                methodsString += '\n\n    ' + methodName + '() {\n\n    }';
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                    _iterator['return']();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return methodsString;
    }

    return 'class ' + name + ' ' + extd + ' {\n\n    constructor(options) {\n\n    }' + methods + ' \n\n}';
};