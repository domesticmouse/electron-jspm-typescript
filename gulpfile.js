var gulp = require('gulp'),
	shell = require('gulp-shell'),
    del = require('del'),
    jasmine = require('gulp-jasmine'),
    cover = require('gulp-coverage');

gulp.task('jasmine-node', shell.task(['jasmine-node tests/.bin/tests --verbose --color']));

gulp.task('run-tests', ['build'], function () {
    return gulp.src('tests/.bin/tests/*-spec.js')
            .pipe(cover.instrument({
                pattern: ['tests/.bin/**']
            }))
            .pipe(jasmine())
            .pipe(cover.gather())
            .pipe(cover.format())
            .pipe(gulp.dest('tests/cover-reports'));
});

gulp.task('build', shell.task(['tsc -p tests']));

gulp.task('test', ['run-tests'], function () {
  del([    
    'tests/.bin/**',
    '.coverdata/**',
    '.coverrun' 
  ]);
});

gulp.task('default', ['test']);