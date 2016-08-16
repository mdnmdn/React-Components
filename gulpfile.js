const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const merge = require('merge-stream');
const streamqueue = require('merge-stream');


gulp.task('default', () => {
        var libs = gulp.src([
                'src-gulp/react/react.js',
                'src-gulp/react/react-dom.js'
            ])
            .pipe(concat('gulp-libs.js'))
            .pipe(minify())
            .pipe(gulp.dest('public'));

        var appCode = gulp.src([
                'src-gulp/test.jsx',
                'src-gulp/index.js',
            ])
            .pipe(babel({
                presets: ['es2015', 'react']
            }))
            .pipe(concat('gulp-app.js'))
            .pipe(minify())
            .pipe(gulp.dest('public'));

    }
);

gulp.task('defaultOld', () => {
        var libs = gulp.src(['src-gulp/react/*.js'])
            .pipe(concat('0-libs.js'));

        var appCode = gulp.src(['src-gulp/*.js*'])
            .pipe(babel({
                presets: ['es2015', 'react']
            }))
            .pipe(concat('9-app.js'));

        merge(libs,appCode)
            .pipe(concat('all-gulp.js'))
            //.pipe(minify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('public'));
    }
);