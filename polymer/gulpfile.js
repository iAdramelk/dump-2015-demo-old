"use strict";

var gulp        = require("gulp");
var plugins     = require("gulp-load-plugins")();

var browserSync = require("browser-sync");

var glob = {
  templates: [
    "templates/*.html"
  ],
  html: [
    "pages/*.html"
  ]
};


gulp.task("tpl", function() {
  return gulp.src(glob.templates)
    .pipe(plugins.data(function () {
      return {data: require("../data/listing.json")};
    }))
    .pipe(plugins.template())
    .pipe(gulp.dest("pages/"));

});

gulp.task("browser-sync", ["tpl"], function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("watch", ["browser-sync"], function () {

  plugins.watch(glob.html, browserSync.reload);

  plugins.watch(glob.templates, function(){
    gulp.start("tpl");
  });

});
