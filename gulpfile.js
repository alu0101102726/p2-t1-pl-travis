const gulp = require('gulp');
const shell = require('gulp-shell');
gulp.task("pre-install", shell.task([
  "npm i -g gulp static-server",
  "npm install -g gulp-shell",
  "npm install",
]));

// gulp.task("serve", shell.task("nodemon server.js"));
gulp.task("default", shell.task("npm test"));
gulp.task("watch", shell.task("npm run test:watch"));
