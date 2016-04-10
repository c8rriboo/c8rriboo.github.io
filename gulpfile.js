var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

// elixir.config.js.browserify.watchify = {
//     enabled: true,
//     options: {
//         poll: true
//     }
// }
// elixir.config.registerWatcher("default", "dev/**");

elixir.config.js.browserify.watchify.options.poll = true;

gulp.task('sass', function() {
	return gulp.src('dev/scss/app.scss')
		.pipe(sass()) // Converts Sass to CSS with gulp-sass
		.pipe(gulp.dest('src/css'))
});

// gulp.task('js', function() {
// 	return gulp.src('dev/js/app.js')
// 		.pipe(browserify())
// 		.pipe(gulp.dest('src/js'))
// });

elixir(function(mix) {
    mix.browserify('./dev/js/app.js', './src/js/app.js', './dev');
});

gulp.task('watch', function() {
	gulp.watch('dev/**/*.scss', ['sass']);
	gulp.watch('dev/**/*.js', ['default']);
	gulp.watch('dev/**/*.vue', ['default']);
});



