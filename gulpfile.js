var gulp = require("gulp");
var connect = require("gulp-connect");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

gulp.task("sass", function () {
  return gulp.src('./public/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css/'))
    .pipe(livereload());
});

gulp.task("sass:watch", function () {
  gulp.watch('./public/sass/**/*.scss', ['sass']);
  livereload.listen();
});

gulp.task("start", function () {
  connect.server({
    root: "public",
    port: 3000,
    livereload: true
  });
});

gulp.task('default', ['sass', 'start', 'sass:watch']);