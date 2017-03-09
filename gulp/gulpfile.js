var gulp = require('gulp')
var uglify = require('gulp-uglify')

gulp.task('default', function() {
  console.log('default task')
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
})
