import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import concat from'gulp-concat';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';

gulp.task('styles', () => {
  return gulp.src('src/scss/**/*.scss')
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', gulp.parallel('styles', 'scripts'));
