import { useState } from 'react';
import React from 'react';
import './App.css';
import Userlist from './Component/Userlist';
import UserModal from './Component/UserModal';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [selectedUser,setSelectedUser] = React.useState(null)

  const handleUserClick = (user) => {
    setSelectedUser(user);
  }

  const closeModal= () =>{
    setSelectedUser(null)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>User List Application</h1>
      </header>
      <main>
        <Userlist onUserClick= {handleUserClick} />
        {selectedUser && <UserModal user = {selectedUser} closeModal ={closeModal}/>}
      </main>
    </div>
  );
}

export default App;
