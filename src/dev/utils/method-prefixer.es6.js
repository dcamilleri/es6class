module.exports = function(methodName, prefixes) {

    for( let prefix of prefixes ) {

        let prefixString = prefix + '.';

        if( methodName.startsWith(prefixString) ) {

            methodName = methodName.replace(prefixString, prefix + ' ');
        }
    }

    return methodName;
};