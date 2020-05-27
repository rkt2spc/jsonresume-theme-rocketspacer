const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

const helpers = require('./helpers');

exports.render = (resume) => {
  const filename = path.join(__dirname, 'views/resume.ejs');
  const template = ejs.compile(fs.readFileSync(filename, 'utf8'), {
    filename : filename,
    context  : { ...helpers },
  });
  const css = fs.readFileSync(path.join(__dirname, 'assets/stylesheets/style.css'), 'utf8');
  return template({ css, resume });
};
