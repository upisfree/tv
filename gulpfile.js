var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify');

function develop()
{
  return browserify(
  {
    entries: ['./src/index.coffee'],
    extensions: ['.coffee']
  })
  .transform('coffeeify')
  .bundle()
  .pipe(source('tv.js'))
  .pipe(buffer())
  .pipe(gulp.dest('./bin'));
}

function min()
{
  return browserify(
  {
    entries: ['./src/index.coffee'],
    extensions: ['.coffee']
  })
  .transform('coffeeify')
  .bundle()
  .pipe(source('tv.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./bin'));
}

gulp.task('develop', develop);

gulp.task('min', min);

gulp.task('dev', function() {
  gulp.watch('./src/**', gulp.series('develop', develop));
});

// gulp.task('default', ['dev']);