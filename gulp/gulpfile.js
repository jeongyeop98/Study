var gulp = require('gulp')
var gulpLoadPlugins = require('gulp-load-plugins')
var plugins = gulpLoadPlugins(
  
)
var sass = require('gulp-ruby-sass')

gulp.task('watch', function() {
  gulp.watch('css/*.scss', ['sassTest'])
})

gulp.task('sassTest', function() {
  sass('css/*.scss')
    .on('error', function(err) {
      console.error('Error!', err.message)
    })
    .pipe(gulp.dest('build/css'))
})

gulp.task('autoprefixerTest', function() {
  gulp.src('css/app.css')
    .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('plumberTest', function() {
  gulp.src('./js/plumberTest.js')
    .pipe(plugins.plumber({
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
      .pipe(plugins.concat('korea2.js'))
      .pipe(uglify())
      .pipe(plugins.rename('korea2.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
})

gulp.task('renameTest', function() {
  gulp.src('sample.js')
    .pipe(plugins.rename('rename.js'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('concatTest', function() {
  gulp.src('./concat/*.js')
    .pipe(plugins.concat('korea.js'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('logging', function() {
  plugins.gutil.log('stuff happened', 'Really it did', gutil.colors.yellow('123'))
  plugins.gutil.beep()
  
  var newPath = gutil.replaceExtension('sample.txt', '.js')
  plugins.gutil.log('replaceExtension : ', newPath)
  
  var opt = {
    name: 'todd',
    file: 'js/uglify.js'
  }
  
  var tester = gutil.template('test : <%= name %> , file : <%= file %>', opt)
  plugins.gutil.log('template : ', plugins.gutil.colors.red(tester))
})

gulp.task('minifyCss', function() {
  gulp.src('css/*.css')
    .pipe(plugins.minifyCss({compatibility: 'ie8'}))
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
