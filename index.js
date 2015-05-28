#! /usr/bin/env node

var fs          = require('fs'),
    resGen      = require('./src/args-process')(process.argv.slice(2)),
    classString = require('./src/class-gen')(resGen);

fs.writeFile(resGen.fileName + '.js', classString, function (err) {

    if(err) {
        console.log('An error occured saving your file.');
        process.exit(1);
    }

    console.log('Class saved !');

});