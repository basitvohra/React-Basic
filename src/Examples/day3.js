// Forms


class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state= {value:''};
      this.handleChange = this.handleChange.bind(this);
      this.submitForm = this.submitForm.bind(this);
    }
    handleChange(event){
      this.setState({
        value: event.target.value
      });
    }
    submitForm(event) {
      console.log(`Form Submited with name : ${this.state.value}`);
      event.preventDefault();
    }
    render() {
      return (
        <div className="Comment">
        <form onSubmit = {this.submitForm}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="submit"></input>
        </form>
        </div>
  
      )
    }
  }
  ReactDOM.render(<NameForm></NameForm>, document.getElementById('root'));

  // Form with TextArea
  

class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state= {value:'',essayValue:'write an essay on textarea !!'};
      this.handleChange = this.handleChange.bind(this);
      this.submitForm = this.submitForm.bind(this);
      this.handleTextAreaChange= this.handleTextAreaChange.bind(this);
    }
    handleChange(event){
      this.setState({
        value: event.target.value
      });
    }
    handleTextAreaChange(event){
      this.setState({
        essayValue: event.target.value
      });
    }
    submitForm(event) {
      console.log(`Form Submited with name : ${this.state.value} and Essay: ${this.state.essayValue}`);
      event.preventDefault();
    }
    render() {
      return (
        <div className="Comment">
        <form onSubmit = {this.submitForm}>
          <label htmlFor="" className="label">
          Name: <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <br/>
          <label htmlFor="" className="label">
          Essay: <textarea value={this.state.essayValue} onChange={this.handleTextAreaChange} rows="5"/>
          </label>
          <br/>
          <label className="label">
          <input type="submit" value="submit"></input>
          </label>
        </form>
        </div>
  
      )
    }
  }
  ReactDOM.render(<NameForm></NameForm>, document.getElementById('root'));

  // multiple form controll with one handler

  
class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state= {name:'',essayValue:'write an essay on textarea !!', flavor:'mango'};
      this.handleChange = this.handleChange.bind(this);
      this.submitForm = this.submitForm.bind(this);
     // this.handleTextAreaChange= this.handleTextAreaChange.bind(this);
    }
    handleChange(event){
      const state = event.target.name;
      this.setState({
        [state]: event.target.value
      });
    }
    handleTextAreaChange(event){
      this.setState({
        essayValue: event.target.value
      });
    }
    submitForm(event) {
      console.log(`Form Submited with name : ${this.state.name} and Essay: ${this.state.essayValue} and favourite flavor : ${this.state.flavor}`);
      event.preventDefault();
    }
    render() {
      return (
        <div className="Comment">
        <form onSubmit = {this.submitForm}>
          <label htmlFor="" className="label">
          Name: <input type="text" value={this.state.value} onChange={this.handleChange} name="name"/>
          </label>
          <br/>
          <label htmlFor="" className="label">
          Essay: <textarea value={this.state.essayValue} onChange={this.handleChange} rows="5" name="essayValue"/>
          </label>
          <br/>
          <label className="label">
            Pick your favorite flavor:
            <select value={this.state.flavor} name="flavor" onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <label className="label">
          <input type="submit" value="submit"></input>
          </label>
        </form>
        </div>
  
      )
    }
  }
  ReactDOM.render(<NameForm></NameForm>, document.getElementById('root'));


  // Forms rewrite 
  