var gulp = require('gulp')
var uglify = require('gulp-uglify')
var minifyCss = require('gulp-minify-css')
var gutil = require('gulp-util')

gulp.task('logging', function() {
  gutil.log('stuff happened', 'Really it did', gutil.colors.yellow('123'))
  gutil.beep()
  
  var newPath = gutil.replaceExtension('sample.txt', '.js')
  gutil.log('replaceExtension : ', newPath)
  
  var opt = {
    name: 'todd',
    file: 'js/uglify.js'
  }
  
  var tester = gutil.template('test : <%= name %> , file : <%= file %>', opt)
  gutil.log('template : ', gutil.colors.red(tester))
})

gulp.task('minifyCss', function() {
  gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'))
})

gulp.task('scripts', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
})

gulp.task('hello', function(){
  console.log('hello')
})

gulp.task('default', ['scripts', 'hello'])
