import React, {Component} from 'react';
class App extends Component {
    state= {
        data:[],
    }
    componentDidMount() {
        const url = "https://reqres.in/api/users?page=2";
        fetch(url)
        .then(result => result.json())
        .then(result => {
            this.setState({
                data: result.data
            });
        });

    }
    render() {
        const {data} = this.state;
        const result = data.map((entry, index)=> {
            return (
            <tr key={entry.id}>
                <td>{entry.first_name}</td>
                <td>{entry.last_name}</td>
                <td>{entry.email}</td>
            </tr>
            )
        })
        return (
            <div className="container">
            <table className="table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Id</th>
                </tr>
            </thead>
            <tbody>
             {result}
            </tbody>
            </table>
            </div>
        );
    }
}
export default App;