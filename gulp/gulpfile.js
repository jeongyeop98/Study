var gulp = require('gulp')
var uglify = require('gulp-uglify')
var minifyCss = require('gulp-minify-css')
var gutil = require('gulp-util')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var sourcemaps = require('gulp-sourcemaps')
var plumber = require('gulp-plumber')

gulp.task('plumberTest', function() {
  gulp.src('./js/plumberTest.js')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
})

var onError = function(err) {
    console.log(err)
}

gulp.task('sourcemapsTest', function() {
  gulp.src('./concat/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('korea2.js'))
      .pipe(uglify())
      .pipe(rename('korea2.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
})

gulp.task('renameTest', function() {
  gulp.src('sample.js')
    .pipe(rename('rename.js'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('concatTest', function() {
  gulp.src('./concat/*.js')
    .pipe(concat('korea.js'))
    .pipe(gulp.dest('./dist'))
})

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
