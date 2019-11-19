import React,{Component} from 'react' ;
import './photosList.css' ;
import axios from 'axios' ;

class PhotosList extends Component {

    state = {
        userPhotos : []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/photos')
        .then(res => this.setState({
            userPhotos : res.data.photosArr
        }))
    }

    deleteitem = (title) => {
        axios.delete(`http://localhost:5000/photos/${title}`)
        const phs = this.state.usersList.filter(item => {
            return item.title !== title
        })
        this.setState({usersPhotos : phs})
    }

    render() {
        
        const {userPhotos} = this.state ;
        const photos = userPhotos.map(p => {
            return(
                <div>
                    <div class="ui card">
                    <div class="image">
                        <img src={p.src} alt="#"/>
                    </div>
                    <div className="content">
                        <span className="header">{p.title}</span>
                        <div className="meta">
                        <i class="eye icon"></i>
                        <i class="trush icon" onClick={ () => this.deleteitem(p.title)}></i>
                        </div>
                    </div>
                    </div>
                </div>
            )
        })
        return(
            <div className="user-photos">
                <div className="header-photos">
                    <div className="ui icon input">
                    <input 
                    type="text" 
                    placeholder="Search..."/>
                    <i className="search icon"></i>
                    </div>
                    <div className="ui input">
                    <input 
                    type="text" 
                    placeholder="add new picture..."/>
                    <i className="plus square outline icon"></i>
                    </div>
               </div>
               <div className="content-photos">
                   {photos}
               </div>
            </div>
        )
    }
}

export default PhotosList ;