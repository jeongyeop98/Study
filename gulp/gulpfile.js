var gulp = require('gulp')
var uglify = require('gulp-uglify')

gulp.task('scripts', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
})

gulp.task('hello', function(){
  console.log('hello')
})

gulp.task('default', ['scripts', 'hello'])
