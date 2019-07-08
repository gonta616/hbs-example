'use strict';

const hbs = require('hbs');
const os = require('os');

hbs.registerHelper('hostname', () => {
  return os.hostname();
});

hbs.registerHelper('fullname', (person) => {
  return person.firstName + " " + person.lastName;
});


// module.exports = hbs;
