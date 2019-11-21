import React from 'react';
import './App.css';
import {BrowserRouter ,Route} from 'react-router-dom' ;
import UsersList from './components/usersList/UsersList';
import AddUser from './components/addUser/AddUser';
import PhotosList from './components/photosList/PhotosList' ;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={UsersList} />
        <Route path="/addUser" exact component={AddUser} />
        <Route path="/photos" exact component={PhotosList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
