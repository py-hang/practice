const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const less = require('gulp-less');
const path = require('path');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// 复制文件到dist目录
gulp.task('first', () => {
    gulp.src('./src/css/index.css').pipe(gulp.dest('dist'));
});

//压缩html文件
gulp.task('htmlmin', () => {
    gulp.src('./src/*.html').pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        })).pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
})

// less转换成css
// css迪马的压缩
gulp.task('cssmin', () => {
    gulp.src(['./src/less/*.less', './src/css/*css']).pipe(less({
        path: [path.join(__dirname, 'less', 'includes')]
    })).pipe(csso()).pipe(gulp.dest('dist/css'))
})

//es6代码转换
//js文件压缩
gulp.task('jsmin', () => {
    gulp.src('./src/js/index.js').pipe(babel({
        // 判断当前代码的运行环境
        presets: ['@babel/env']
    })).pipe(uglify()).pipe(gulp.dest('dist/js'))
})

//copy image文件夹和lib文件夹
gulp.task('copy', () => {
    gulp.src('./src/images/*').pipe(gulp.dest('dist/images'));
    gulp.src('./src/lib/*').pipe(gulp.dest('dist/lib'));
})

// 构建任务 gulp3中使用的时（'default',[TaskList]）gulp4中使用的时series和parallel方法
gulp.task('default', gulp.parallel('first', 'htmlmin', 'cssmin', 'jsmin', 'copy'), () => {});