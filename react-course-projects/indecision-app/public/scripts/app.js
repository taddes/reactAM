'use strict';

console.log('app.js is running');

// only render subtitle and p tage if subtitle exist logical and op
// render new p tag based on whether itmes in array (ternary)


var appObj = {
  title: 'Indecision for the sake of it',
  subtitle: 'The app to decide that shit',
  options: ['One', 'Two']
};

//JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appObj.title,
    '!'
  ),
  appObj.subtitle && React.createElement(
    'p',
    null,
    appObj.subtitle
  ),
  appObj.options && appObj.options.length > 0 ? 'There are options' : 'There are no options'
);

var count = 0;
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { className: 'classy' },
    '+1'
  ),
  React.createElement(
    'button',
    null,
    '-1'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
