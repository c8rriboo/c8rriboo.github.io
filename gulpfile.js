var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function() {
	return gulp.src('dev/scss/app.scss')
		.pipe(sass()) // Converts Sass to CSS with gulp-sass
		.pipe(gulp.dest('src/css'))
});

gulp.task('js', function() {
	return gulp.src('dev/js/app.js')
		.pipe(gulp.dest('src/js'))
});

var js_files = [
    './dev/js/assets/*',
    './dev/js/components/*',
    './dev/js/app.js'
];

gulp.task('js', function() {
    gulp.src(js_files)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./src/js'));
});

gulp.task('watch', function() {
	gulp.watch('dev/**/*.scss', ['sass']);
	gulp.watch('dev/**/*.js', ['js']);
});



