var assert                = require('assert'),
    methodPrefixer        = require('../src/utils/method-prefixer'),
    resGenerator          = require('../src/args-process'),
    classStringGenerator  = require('../src/class-gen');

/*
    UTILS
    Testing method-prefixer.js
        Method Prefixer
*/
describe('Method Prefixer', function(){

    it('Should generate correct method name with no prefix', function(){

        var prefixes   = ['static', 'get', 'set'],
            methodName = 'doSomething';

        assert.equal(methodName, methodPrefixer(methodName, prefixes));
    });

    it('Should generate correct method name with static prefix', function(){

        var prefixes   = ['static', 'get', 'set'],
            methodName = 'static.doSomething';

        assert.equal('static doSomething', methodPrefixer(methodName, prefixes));
    });

    it('Should generate correct method name with get prefix', function(){

        var prefixes   = ['static', 'get', 'set'],
            methodName = 'get.name';

        assert.equal('get name', methodPrefixer(methodName, prefixes));
    });

    it('Should generate correct method name with set prefix', function(){

        var prefixes   = ['static', 'get', 'set'],
            methodName = 'set.name';

        assert.equal('set name', methodPrefixer(methodName, prefixes));
    });
});

/*
    Testing args-process.js
        Result Generator
*/
describe('Result Generator', function(){

    it('Should generate correct object passing filename and classname', function(){

        var userArgs    = ['myfile.js', 'MyClass'],
            expectedObj = JSON.stringify({
                fileName: 'myfile',
                name: 'MyClass'
            });

        assert.equal(expectedObj, JSON.stringify(resGenerator(userArgs)));
    });

    it('Should generate correct object passing an extends', function(){

        var userArgs    = ['myfile.js', 'MyClass', '-e', 'ParentClass'],
            expectedObj = JSON.stringify({
                fileName: 'myfile',
                name: 'MyClass',
                extends: 'ParentClass'
            });

        assert.equal(expectedObj, JSON.stringify(resGenerator(userArgs)));
    });

    it('Should generate correct object passing a method', function(){

        var userArgs    = ['myfile.js', 'MyClass', '-e', 'ParentClass', '-m', 'doSomething'],
            expectedObj = JSON.stringify({
                fileName: 'myfile',
                name: 'MyClass',
                extends: 'ParentClass',
                methods: ['doSomething']
            });

        assert.equal(expectedObj, JSON.stringify(resGenerator(userArgs)));
    });

    it('Should generate correct object passing multiple methods', function(){

        var userArgs    = ['myfile.js', 'MyClass', '-m', 'doSomething', 'doSomethingElse', 'addStuff', 'removeStuff'],
            expectedObj = JSON.stringify({
                fileName: 'myfile',
                name: 'MyClass',
                methods: ['doSomething', 'doSomethingElse', 'addStuff', 'removeStuff']
            });

        assert.equal(expectedObj, JSON.stringify(resGenerator(userArgs)));
    });

    it('Should generate correct object passing prefixed methods', function(){

        var userArgs    = ['myfile.js', 'MyClass', '-m', 'static.doSomething', 'get.name', 'set.name'],
            expectedObj = JSON.stringify({
                fileName: 'myfile',
                name: 'MyClass',
                methods: ['static.doSomething', 'get.name', 'set.name']
            });

        assert.equal(expectedObj, JSON.stringify(resGenerator(userArgs)));
    });
});

/*
    Testing class-gen.js
        Class String Generator
*/
describe('Class String Generator', function(){

    it('Should generate correct string with only classname', function(){

        var obj = { name: 'MyClass' },
            expectedString = 'class MyClass {\n\n    constructor(options) {\n\n    }\n\n}';

        assert.equal(expectedString, classStringGenerator(obj));
    });

    it('Should generate correct string with classname and extends', function(){

        var obj = { name: 'MyClass', extends: 'ParentClass' },
            expectedString = 'class MyClass extends ParentClass {\n\n    constructor(options) {\n\n    }\n\n}';

        assert.equal(expectedString, classStringGenerator(obj));
    });

    it('Should generate correct string with classname, extends and methods', function(){

        var obj = { 
                name   : 'MyClass',
                extends: 'ParentClass',
                methods: ['doSomething', 'doSomethingElse']
            },
            expectedString = 'class MyClass extends ParentClass {\n\n    constructor(options) {\n\n    }\n\n    doSomething() {\n\n    }\n\n    doSomethingElse() {\n\n    }\n\n}';

        assert.equal(expectedString, classStringGenerator(obj));
    });

    it('Should generate correct string with prefixed methods', function(){

        var obj = { 
                name   : 'MyClass',
                extends: 'ParentClass',
                methods: ['static.doSomething', 'get.name', 'set.name']
            },
            expectedString = 'class MyClass extends ParentClass {\n\n    constructor(options) {\n\n    }\n\n    static doSomething() {\n\n    }\n\n    get name() {\n\n    }\n\n    set name() {\n\n    }\n\n}';

        assert.equal(expectedString, classStringGenerator(obj));
    });
});