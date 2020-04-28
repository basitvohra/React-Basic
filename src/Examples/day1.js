const name = 'React';
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);

// Example 2
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez',
  };
  
  const element = <h1>Hello, {formatName(user)}!</h1>;
  
  ReactDOM.render(element, document.getElementById('root'));

  // example 3 JSX as expression
  const user = {
    firstName: 'Harper',
    lastName: 'Perez',
  };
  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;}
    return <h1>Hellow, Stranger.</h1>;
  }

  
  