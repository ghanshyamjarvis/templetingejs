const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const minifyCSS = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const imagemin = require('gulp-imagemin');

// gulp.task('nodemon', function () {
//   nodemon({
//     script: 'server.js',
//     ext: 'js',
//     ignore: ['dist/']
//   }).on('restart', function () {
//     console.log('==========RESTART==========');
//     gulp.run(['scripts', 'style', 'fonts', 'image']);
//   });
// });

gulp.task('fonts', function () {
  return gulp.src([
    'src/assets/css/fonts/*.eot',
    'src/assets/css/fonts/*.svg',
    'src/assets/css/fonts/*.ttf',
    'src/assets/css/fonts/*.woff',
    'src/assets/css/fonts/*.woff2'])
    .pipe(gulp.dest('src/dist/css/fonts'));
});

gulp.task('style', function () {
  gulp.src([
    'src/assets/css/googlefonts.css',
    'src/assets/css/fontawesome.min.css',
    'src/assets/css/plugins/owl.carousel.css',
    'src/assets/css/plugins/bootstrap.min.css',
    'src/assets/css/style.css'
  ])
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('src/dist/css'));
});

gulp.task('scripts', function () {
  return gulp.src([
    'src/assets/js/vendor/jquery-2.2.4.min.js',
    'src/assets/js/vendor/jquery-ui.min.js',
    'src/assets/js/vendor/bootstrap.bundle.min.js',
    'src/assets/js/vendor/owl.carousel.min.js',
    'src/assets/js/vendor/jquery.nice-select.min.js',
    'src/assets/js/internal.js'])
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('src/dist/js'));
});

gulp.task('default', ['style','scripts','fonts']);
