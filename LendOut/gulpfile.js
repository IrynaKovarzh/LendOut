﻿/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
	gp_clean = require('gulp-clean'),
	gp_concat = require('gulp-concat'),
	gp_sourcemaps = require('gulp-sourcemaps'),
	gp_typescript = require('gulp-typescript'),
	gp_uglify = require('gulp-uglify');

cachebust = require('gulp-cache-bust');

//UglifyJSPlugin = require('uglifyjs-webpack-plugin');
uglify = require('gulp-uglify-es').default;
// uglifyes = require('uglify-es');


/// Define paths
var srcPaths = {
	app: ['Scripts/app/main.ts', 'Scripts/app/**/*.ts'],
	js: [
		'Scripts/js/**/*.js',
		'node_modules/core-js/client/shim.min.js',
		'node_modules/zone.js/dist/zone.js',
		'node_modules/reflect-metadata/Reflect.js',
		'node_modules/systemjs/dist/system.src.js',
		'node_modules/typescript/lib/typescript.js'
	],
	js_angular: [
		'node_modules/@angular/**'
	],
	js_rxjs: [
		'node_modules/rxjs/**'
	]
};

var destPaths = {
	app: 'wwwroot/app/',
	js: 'wwwroot/js/',
	js_angular: 'wwwroot/js/@angular/',
	js_rxjs: 'wwwroot/js/rxjs/',
	html: 'wwwroot'
};

// Compile, minify and create sourcemaps all TypeScript files and place
// them to wwwroot/app, together with their js.map files.
gulp.task('app', ['app_clean'], function () {
	return gulp.src(srcPaths.app)
		.pipe(gp_sourcemaps.init())
		.pipe(gp_typescript(require('./tsconfig.json').compilerOptions))
		//.pipe(gp_uglify({ mangle: false }).on('error', function (e) { console.log(e); }))   //!!!
		.pipe(uglify({ mangle: false }).on('error', function (e) { console.log(e); }))   //!!!
		.pipe(gp_sourcemaps.write('/wwwroot/'))
		.pipe(gulp.dest(destPaths.app));
});

// Delete wwwroot/app contents
gulp.task('app_clean', function () {
	return gulp.src(destPaths.app + "*", { read: false })
		.pipe(gp_clean({ force: true }));
});
// Copy all JS files from external libraries to wwwroot/js
gulp.task('js', function () {
	gulp.src(srcPaths.js_angular)
		.pipe(gulp.dest(destPaths.js_angular));
	gulp.src(srcPaths.js_rxjs)
		.pipe(gulp.dest(destPaths.js_rxjs));
	return gulp.src(srcPaths.js)
		// .pipe(gp_uglify({ mangle: false })) // disable uglify
		// .pipe(gp_concat('all-js.min.js')) // disable concat
		.pipe(gulp.dest(destPaths.js));
});
// Delete wwwroot/js contents
gulp.task('js_clean', function () {
	return gulp.src(destPaths.js + "*", { read: false })
		.pipe(gp_clean({ force: true }));
});
// Watch specified files and define what to do upon file changes
gulp.task('watch', function () {
	gulp.watch([srcPaths.app, srcPaths.js], ['app', 'js']);
});
// Global cleanup task
gulp.task('cleanup', ['app_clean', 'js_clean']);
// Define the default task so it will launch all other tasks
gulp.task('default', ['app', 'js', 'watch']);

gulp.src('/*.html')
	.pipe(cachebust({
		type: 'timestamp'
	}))
	.pipe(gulp.dest(destPaths.html));

/*
var gutil = require('gulp-util');
gulp.task('scripts', ['js_clean'], function () {
	return gulp.src('js/*.js')
		.pipe(uglify().on('error', function (err) { console.log(err); }))

	
}); */

/* var gulp = require('gulp');

gulp.task('default', function () {
    // place code for your default task here
}); */