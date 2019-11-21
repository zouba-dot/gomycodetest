import React,{Component} from 'react' ;
import './usersList.css' ;
import {Link} from 'react-router-dom' 
import axios from 'axios' ;


class UsersList extends Component {

    state = {
        usersList : [] ,
        search : ''
    }

    onChange = (e) => {
        this.setState({search : e.target.value})
    }

    componentDidMount(){
        axios.get('/users')
        .then(res => this.setState({
            usersList : res.data
        }))
    }

    deleteitem = (id) => {
        axios.delete(`/users/${id}`)
        const list = this.state.usersList.filter(item => {
            return item._id !== id
        })
        this.setState({usersList : list})
    }

    handlePhotos = (e) => {
        e.preventDefault() ;
        window.location.href = '/photos'
    }

    render() {

        var {search} = this.state 
        const filterdList = this.state.usersList.filter(i => {
            return i.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        }) ;

        const List = filterdList.map(item => {
            return (
                <tr key={item._id}>
                    <td> {item.name} </td>
                    <td> {item.surname} </td>
                    <td> {item.birthYear} </td>
                    <td> {item.birthPlace} </td>
                    <td>
                    <i className="file video icon" onClick={this.handlePhotos}></i>
                    <i className="pencil alternate icon" onClick={this.updateItem}></i>
                    <i className="trash icon" onClick={ () => this.deleteitem(item._id)}></i>
                    </td>
                </tr>
            )
        })

        return(
            <div>
                <div className="users-header">
                    <h1 className='title'> Users List </h1>
                    <div>
                    <div className="ui left icon input">
                    <input 
                    type="text" 
                    placeholder="Search users..." 
                    value={this.state.search} 
                    onChange={this.onChange} />
                    <i className="users icon"></i>
                    </div>
                    <Link to='/addUser'><i className="plus square outline icon"></i></Link>
                    </div>
                </div>
                <div className="users-table">
                    <table  
                    className="ui very basic table" 
                    style={{width : "80%" , margin:"50px auto"}}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>SurName</th>
                                <th>BirthYear</th>
                                <th>BirthPlace</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {List}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UsersList ;