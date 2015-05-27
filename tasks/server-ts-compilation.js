var gulp = require('gulp');
var ts = require('gulp-typescript');
var eventStream = require('event-stream');

var tsSources = 'ts/**/*.ts';

var tsProject = ts.createProject({
  target: 'ES5',
  declarationFiles: true,
  noExternalResolve: false,
  module: 'commonjs'
});

gulp.task('server-ts-compilation', function() {
  var tsResult = gulp.src(tsSources)
    .pipe(ts(tsProject));

  return eventStream.merge(
  // Merge the two output streams, so this task is finished when the IO of both
  // operations are done.
    tsResult.dts.pipe(gulp.dest('release/definitions')),
    tsResult.js.pipe(gulp.dest('release'))
  );
});

gulp.task('watch', ['server-ts-compilation'], function() {
  gulp.watch(tsSources, ['server-ts-compilation']);
  console.log('recompiled!');
});
