// Example 1
class App extends Component {
    render(){
      return (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody><tr>
              <td>Charlie</td>
              <td>Janitor</td>
            </tr>
            <tr>
              <td>Mac</td>
              <td>Bouncer</td>
            </tr>
            <tr>
              <td>Dee</td>
              <td>Aspiring actress</td>
            </tr>
            <tr>
              <td>Dennis</td>
              <td>Bartender</td>
            </tr>
          </tbody>
        </table>
      )
    }
  }
 // example 2
 const TableHeader = () =>{
    return(
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }
  
  const TableBody = (props) => {
    const rows = props.professions.map((row, index)=> {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.profession}</td>
        </tr>
      )
    });  
    return (  
            <tbody>
            {rows}
            </tbody>
     )
  } 
  
  class Table extends Component{
    render() {
      const {professions} = this.props;
      return (
        <table className="table">
          <TableHeader/>
          <TableBody professions= {professions}/>
        </table>
      );
    }
  }
  
  class App extends Component{
    state= {
      professions: [
      {
        name:'Charlie',
        profession: 'Doctor'
      },
      {
        name: 'Jacob',
        profession: 'Professor'
      }
    ]};
    render() {      
      return <Table professions= {this.state.professions}></Table>;
    }
  }

// example 3

const TableHeader = () =>{
    return(
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Action</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
    const rows = props.professions.map((row, index)=> {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.profession}</td>
          <td><button onClick= {()=>{props.removeProfession(index)}} className="btn btn-success">Delete</button></td>
        </tr>
      )
    });  
    return (  
            <tbody>
            {rows}
            </tbody>
     )
  } 

  class Table extends Component{
    render() {
      const {professions, removeProfession} = this.props;
      return (
        <table className="table">
          <TableHeader/>
          <TableBody professions= {professions} removeProfession= {removeProfession}/>
        </table>
      );
    }
  }

  class App extends Component{
    state= {
      professions: [
      {
        name:'Charlie',
        profession: 'Doctor'
      },
      {
        name: 'Jacob',
        profession: 'Professor'
      }
    ]};
    removeProfession = (index) => {
      const {professions} = this.state;
      this.setState({
        professions: professions.filter((prof, i)=> {
          return i!== index;
        })
      })
      
    }
    render() {      
      return <Table professions= {this.state.professions} removeProfession= {this.removeProfession}></Table>;
    }
  }


  // Example 4
  const TableHeader = () =>{
    return(
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Action</th>
        </tr>
      </thead>
    )
  }
  const TableBody = (props) => {
    const rows = props.professions.map((row, index)=> {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.profession}</td>
          <td><button onClick= {()=>{props.removeProfession(index)}} className="btn btn-success">Delete</button></td>
        </tr>
      )
    });
  
    return (  
    <tbody>
      {rows}
    </tbody>
  )
  } 
  class Table extends Component{
    render() {
      const {professions, removeProfession} = this.props;
      return (
        <table className="table">
          <TableHeader/>
          <TableBody professions= {professions} removeProfession= {removeProfession}/>
        </table>
      );
    }
  }
  class App extends Component{

    state= {
      professions: []
    };

    removeProfession = (index) => {
      const {professions} = this.state;
      this.setState({
        professions: professions.filter((prof, i)=> {
          return i!== index;
        })
      })
      
    }
    
    handleSubmit = (profession) => {
      this.setState({
        professions: [...this.state.professions, profession],
      });
    }
    render() {   

      return (  

      <div className="container">
      <Table professions= {this.state.professions} removeProfession= {this.removeProfession}></Table>
      <Form handleSubmit={this.handleSubmit}></Form>
      </div>  

      );
    }
  }



  