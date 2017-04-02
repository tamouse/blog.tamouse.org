var gulp        = require('gulp');
var help        = require('gulp-task-listing');
var cp          = require('child_process');
var minifyCss   = require('gulp-minify-css');
var notify      = require("gulp-notify") 
var sass        = require('gulp-ruby-sass') ;
var bower       = require('gulp-bower');
var replace     = require('gulp-replace');
var browserSync = require('browser-sync');

var config = {
    sassPath: "./_sass",
    bowerDir: "./bower_components",
    assetDir: "./assets",
    outputDir: "./_site",
    distDir: "./docs"
}

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('help', help);

gulp.task('bower', function() {
  return bower()
         .pipe(gulp.dest(config.bowerDir))
});

gulp.task('jekyll-build', ['css','icons','bower','touch'], function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--incremental'], {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

gulp.task('jekyll-build-noinc', ['css','icons','bower','touch'], function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('jekyll-rebuild-noinc', ['jekyll-build-noinc'], function () {
  browserSync.reload();
});

gulp.task('touch', function(){
  return cp.spawn('touch', ['index.html', 'categories/index.html', 'tags/index.html'], {stdio: 'inherit'});
});

gulp.task('icons', function() {
  return gulp.src(
    config.bowerDir + "/fontawesome/fonts/**.*")
         .pipe(gulp.dest(config.assetDir + "/fonts"))
         .pipe(gulp.dest(config.outputDir + "/assets/fonts"));
});

gulp.task('css', function() {
  return sass(config.sassPath + "/main.scss", {
    style: "compressed",
    loadPath: [
      config.sassPath,
      config.bowerDir + "/bootstrap-sass/assets/stylesheets",
      config.bowerDir + "/fontawesome/scss"
    ],
    compass: true
  })
         .pipe(minifyCss())
         .pipe(gulp.dest(config.assetDir + "/css"))
         .pipe(gulp.dest(config.outputDir + "/assets/css"))
.pipe(browserSync.stream());

});

gulp.task('build', ['bower', 'icons', 'css' ,'jekyll-build']);
gulp.task('build:noinc', ['bower', 'icons', 'css' ,'jekyll-build-noinc']);

gulp.task('serve', ['build'], function() {
  browserSync.init({
    server: {
      baseDir: "./_site"
    }
  });

  // Start a watch for rebuilds
  gulp.watch(['_sass/**/*.scss'], ['css'])
  gulp.watch([
    '404.html',
    '_baseurl.yml',
    '_config.yml',
    '_includes/**/*',
    '_layouts/**/*',
    '_plugins/**/*',
    '_posts/**/*',
    'about/**/*',
    'categories/**/*',
    'humans.txt',
    'images/**/*',
    'index.html',
    'js/**/*',
    'pages/**/*',
    'robots.txt',
    'tags/**/*'
  ], ['jekyll-rebuild']);
});

gulp.task('serve:noinc', ['build:noinc'], function() {
  browserSync.init({
    server: {
      baseDir: "./_site"
    }
  });

  // Start a watch for rebuilds
  gulp.watch(['_sass/**/*.scss'], ['css'])
  gulp.watch([
    '404.html',
    '_baseurl.yml',
    '_config.yml',
    '_includes/**/*',
    '_layouts/**/*',
    '_plugins/**/*',
    '_posts/**/*',
    'about/**/*',
    'categories/**/*',
    'humans.txt',
    'images/**/*',
    'index.html',
    'js/**/*',
    'pages/**/*',
    'robots.txt',
    'tags/**/*'
  ], ['jekyll-rebuild']);
});

gulp.task('jekyll-build-dist', ['css','icons','bower'], function () {
  return cp.spawn(
    'bundle', [
      'exec',
      'jekyll',
      'build',
      '--config',
      '_config.yml,_baseurl.yml',
      '--destination',
      config.distDir
    ],
    {stdio: 'inherit'});
});

gulp.task('dist', ['bower', 'icons', 'css', 'jekyll-build-dist']);

gulp.task('default', ['serve']);

gulp.task('syncs3', function(){
  return cp.spawn(
    's3cmd', [
      '-rP',
      'sync',
      '_s3_uploads/',
      's3://tt.imageshare/blog/'
    ],
    {stdio: 'inherit'}
  );
});
