// Example 1
function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  setInterval(tick, 1000);

  // example 2

  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  const element = <Welcome name="Sara" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );

  // example 3

  class Welcome extends React.Component {
    render() {
      return <h2>Hello, {this.props.name}</h2>;
    }
  }
  class App extends React.Component {
    render() {
     return (
      <div>
        <Welcome name='Sachin'/>
        <Welcome name='sara'/>      
        <Welcome name='Arjun'/>
      </div>
     ) 
    }
  }
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
  // using loop

  class Welcome extends React.Component {
    render() {
      return <h2>Hello, {this.props.name}</h2>;
    }
  }
  class App extends React.Component {
    render() {
      let element=[];
      for( var i =0;i<3;i++) {
        element.push(<Welcome name={`Sachin ${i}`} key={i}/>);
      }       
     return (
      <div>    
        {element}
      </div>
     ) 
    }
  }
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );

  // example 4
  class Comment extends React.Component {
    render() {
        return (
          <div className="Comment">
            <div className="UserInfo">
              <img className="Avatar"
                src={this.props.author.avatarUrl}
                alt={this.props.author.name}
              />
              <div className="UserInfo-name">
                {this.props.author.name}
              </div>
            </div>

            <div className="Comment-text">
              {this.props.author.text}
            </div>
            <div className="Comment-date">
              {this.props.author.date}
            </div>
          </div>
      );
    }
  }
  const author = {
    avatarUrl:'https://placekitten.com/g/64/64',
    name:'Kitty',
    text:'Dummy Comment',
    date: new Date().toDateString()
  };
  ReactDOM.render(
    <Comment author={author}/>,
    document.getElementById('root')
  );

  // State and Lifecycle 
  // change in tick function
  // step 1
  class Clock extends Component {
    render() {
      return (
        <div>
          <h1>Hello World</h1>
          <h1>it is {this.props.date.toLocaleTimeString()}</h1>
        </div>
      );
    }
  }
  function tick(){
    ReactDOM.render(
      <Clock date= {new Date()}/>,
      document.getElementById('root')
    );
  }
  setInterval(tick, 1000);
  
  // step 2
  class Clock extends Component {
    constructor(props){
      super(props);
      this.state = {date: new Date()}
    }
   
    render() {
      return (
        <div>
          <h1>Hello World</h1>
          <h1>it is {this.state.date.toLocaleTimeString()}</h1>
        </div>
      );
    }
  }
  
    ReactDOM.render(
      <Clock/>,
      document.getElementById('root')
    );
    //step 3 with state
    class Clock extends Component {
      constructor(props){
        super(props);
        this.state = {date: new Date()}
      }
      componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
      1000);
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick(){
        this.setState({
          date: new Date()
        });
      }
      render() {
        return (
          <div>
            <h1>Hello World</h1>
            <h1>it is {this.state.date.toLocaleTimeString()}</h1>
          </div>
        );
      }
    }
    
      ReactDOM.render(
        <Clock/>,
        document.getElementById('root')
      );
// State as props for chhild component

class FormattedDate extends Component{
  render(){
    return (
      <h2>It is Formatted Date {this.props.date.toLocaleTimeString()}</h2>
    );
  } 
}
class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()}
  }
  componentDidMount() {
  this.intervalID = setInterval(
    () => this.tick(),
  1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <FormattedDate date={this.state.date}></FormattedDate>
      </div>
    );
  }
}

  ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
  );

  // Handling EVENT 

  class ToggleButton extends Component {
    constructor(props){
      super(props);
      this.state= {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState((state) => ({
        isToggleOn: !state.isToggleOn
      }));
      
    }
  
    render() {
      return (
        <button onClick= {this.handleClick}>
          Button is {this.state.isToggleOn ? 'ON': 'OFF'}
        </button>
      );
    }
  }
  ReactDOM.render(
    <ToggleButton/>,
    document.getElementById('root')
  );

  // Conditional  Component
  class UserGreetings extends Component {
    render() {
      return <h2>Welcome Back</h2>;
    }
  }
  class GuestGreetings extends Component {
    render() {
      return <h2>Welcome Guest</h2>;
    }
  }
  class Greetings  extends Component{
    constructor(props){
      super(props);
      this.isLoggedIn = props.isLoggedIn;    
    }
    render() {
      if(this.isLoggedIn){
        return <UserGreetings/>;
      }
      else {
        return <GuestGreetings/>;
      }
    }
  }
  ReactDOM.render(
    <Greetings isLoggedIn={true}/>,
    document.getElementById('root')
  );

  // list

  class NumberList extends Component{
    render() {
      const numbers = this.props.numbers;
      const listItems = numbers.map((number) => 
        <li key={number.toString()}>
            {number}
        </li>
      );
      return (
        <ul>{listItems}</ul>
      );
    }
  }
  ReactDOM.render(
  <NumberList numbers={[4,2,3,5]}/>,
   document.getElementById('root')
   );