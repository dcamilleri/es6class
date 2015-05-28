/*
    -- GULP --
    Main
*/
var gulp        = require('gulp'),
    babel       = require('gulp-babel'),
    ext_replace = require('gulp-ext-replace'),
    config      = require('./config');

/*
    Babel Task
        * Turn ES6 to ES5
*/ 
gulp.task('babel', function() {

    return gulp.src(config.appDevFiles)
           .pipe(babel())
           .pipe(ext_replace('.js', '.es6.js'))
           .pipe(gulp.dest(config.appDistFiles));
});

/*
    Watch Task
        * Watching JS
            - Launching Babel
*/ 
gulp.task('watch', function() {

    // Watch JavaScript
    gulp.watch(config.appDevFiles, ['babel']);
    
});

/*
    Default Task
        * Waching
*/     
gulp.task('default', ['watch']);