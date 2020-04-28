import React, {Component} from 'react'

class Form extends Component { 

        initialState = {
            name:'',
            profession:''
        }

        state= this.initialState;

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    
    render() {
        const { name, profession} = this.state;
        return(
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange= {this.handleChange}/>
                 </div>
                <div className="form-group">
                    <label htmlFor="Profession">Profession:</label>
                    <input
                    type="text"
                    name="profession"
                    className="form-control"
                    id="profession"
                    value= {profession}
                    onChange= {this.handleChange}/>
                 </div>
                 <input type="button" className="btn btn-success" value="Submit" onClick= {this.submitForm}/>                 
            </form>
        );
    }   
} 


export default Form;