console.log('app.js is running')

// only render subtitle and p tage if subtitle exist logical and op
// render new p tag based on whether itmes in array (ternary)



let appObj = {
  title: 'Indecision for the sake of it',
  subtitle: 'The app to decide that shit',
  options: ['One', 'Two']
};



//JSX - JavaScript XML
let template = (
<div>
  <h1>{appObj.title}!</h1>
  {appObj.subtitle && <p>{appObj.subtitle}</p>}
  {appObj.options && appObj.options.length > 0 ? `There are options` : 'There are no options'}
</div>
);

let count = 0;
const templateTwo = (
  <div>
  <h1>Count: {count}</h1>
  <button className="classy">+1</button>
  <button>-1</button>
  
  </div>

);


let appRoot = document.getElementById('app');


ReactDOM.render(templateTwo, appRoot)