import React, { Component } from 'react';
import './App.css';
import Form from './Examples/Form';
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


export default App;
