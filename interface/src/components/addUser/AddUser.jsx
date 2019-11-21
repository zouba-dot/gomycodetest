import React,{Component} from 'react' ;
import './addUser.css' ;
import axios from 'axios' ;
import {Link} from 'react-router-dom' ;

class AddUser extends Component {

    state = {
        name : '' ,
        surname : '' ,
        birthyear : '' , 
        birthplace : '' 
    }

    handlechange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault() ;
        const newUser = {
            name : this.state.name ,
            surname : this.state.surname ,
            birthyear : this.state.birthyear ,
            birthplace : this.state.birthplace
        }
        axios.post('/users/Add',newUser)
        .then(this.setState({
            name : '' ,
            surname : '' ,
            birthyear : '' , 
            birthplace : '' 
        })).catch(err => console.log(err))
        window.location.href = '/'
    }

    render() {
        return(
            <div className='add-user'>
                <form class="ui form" onSubmit={this.handleSubmit}>
                    <div class="field">
                        <label>First Name</label>
                        <input type="text" 
                        value={this.state.name} 
                        name="name" 
                        placeholder="name" 
                        onChange={this.handlechange} />
                    </div>
                    <div class="field">
                        <label>Last Name</label>
                        <input 
                        type="text" 
                        value={this.state.surname} 
                        name="surname" 
                        placeholder="surname" 
                        onChange={this.handlechange}/>
                    </div>
                    <div class="field">
                        <label>birth year</label>
                        <input 
                        type="text" 
                        value={this.state.birthyear} 
                        name="birthyear" 
                        placeholder="birthyear" 
                        onChange={this.handlechange}/>
                    </div>
                    <div class="field">
                        <label>birth place</label>
                        <input 
                        type="text" 
                        value={this.state.birthplace} 
                        name="birthplace" 
                        placeholder="birthplace" 
                        onChange={this.handlechange}/>
                    </div>
                    <button 
                    className="ui button" 
                    onSubmit={this.handleSubmit} 
                    type="submit">Add</button>
                    <Link to='/'>
                        <button className="ui red button" > cancel </button>
                    </Link>
                </form>
            </div>
        )
    }
}


export default AddUser ;