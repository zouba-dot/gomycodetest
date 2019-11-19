import React from 'react';
import './App.css';
import {BrowserRouter ,Route} from 'react-router-dom' ;
import UsersList from './components/usersList/UsersList';
import PhotosList from './components/photosList/PhotosList' ;
import AddUser from './components/addUser/AddUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={UsersList} />
        <Route path="/photos" exact component={PhotosList} />
        <Route path="/addUser" exact component={AddUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;