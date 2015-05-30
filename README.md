# classgen

ES6 Command Line Class Generator

## Installation

``` bash
  $ npm install -g classgen
```

## Usage

`classgen` allows you to generate EcmaScript 6 class files really fast with the command line.

``` bash
  $ classgen file.js MyClass 
```

This will generate a JavaScript ES6 file called `file.js` with the following code.

```js
class MyClass {
    
    constructor(options) {

    }

}
```

### Class Inheritance

To implement class inheritance, use `-e` option

``` bash
  $ classgen file.js MyClass -e ParentClass
```

Will generate

```js
class MyClass extends ParentClass { ... }
``

### Methods

You can specify methods to implement with `-m`, each method separated by a space.

``` bash
  $ classgen fileName.js ClassName -m doSomething doSomethingElse
```

Will output the following:

```js
class ClassName {
    
    constructor(options) {

    }

    doSomething() {

    }

    doSomethingElse() {

    }

}
```

#### Accessors properties and `static` methods

ES6 Allows you to create accessors properties `get` and `set` and also `static` methods. Create them by prefixing your method name with `get.`, `set.` or `.static`

``` bash
  $ classgen fileName.js ClassName -m static.doSomething get.name set.name
```

## Run Tests

``` bash
  $ npm test
```

**NOTE:** This is my first NPM published module and CLI Tool. [Feedback](dorian.camilleri@hetic.net) and [Issues](https://github.com/dcamilleri/classgen/issues) will be really appreciated ! Thanks.

#### License: MIT
#### Author: [Dorian Camilleri](https://github.com/dcamilleri)