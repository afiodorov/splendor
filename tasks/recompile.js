var gulp = require('gulp');

var tsSources = 'ts/**/*.ts';

gulp.task('recompile', ['server-ts-compilation'], function() {
  gulp.watch(tsSources, ['server-ts-compilation']);
});
