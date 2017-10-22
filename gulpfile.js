var gulp=require('gulp');
var htmlmin=require('gulp-htmlmin');
var cssmin=require('gulp-cssmin');
var autoprefixer=require('gulp-autoprefixer');
var imagemin=require('gulp-imagemin');
var jsuglify=require('gulp-uglify');

gulp.task('html',function (){
	var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
	return gulp.src(['./index.html','./search.html'])
	         .pipe(htmlmin({collapseWhitespace:true,removeComments:true,minifyCSS:true}))
	         .pipe(gulp.dest('./dist'))
})
 //压缩打包css
 gulp.task('css',function (){
 	gulp.src('./css/*.css')
 	.pipe(cssmin())
 	.pipe(autoprefixer())
 	.pipe(gulp.dest('./dist/css'))
 })
//压缩图片
gulp.task('imgmin',function (){
	gulp.src('./img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./dist/image'))
})
gulp.task('js',function (){
	gulp.src('./js/*')
	.pipe(jsuglify())
	.pipe(gulp.dest('./dist/js'))
})
gulp.task('other',function (){
	gulp.src(['./data/*','./php/*','./gulpfile.js','./package-lock.json'],{base:'./'})
	.pipe(gulp.dest('./dist'))
})


