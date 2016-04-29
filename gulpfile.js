var gulp = require("gulp");
var connect = require("gulp-connect");

gulp.task("start", function () {

  connect.server({
    root: "public",
    port: 3000,
    livereload: true,
    middleware: function(connect, opt) {
      return [
        connect().use('/bower_components', connect.static('./bower_components'))
      ]
    }
  });
});