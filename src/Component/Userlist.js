import React, { useEffect, useState } from 'react'
import axios from "axios"

const Userlist = () =>{
    
    const [users,setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState( ' ');

    useEffect(()=>{
       
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error =>{
            console.error('Error fetching data : ',error)
        })
    },[]);
    const handleSearchChange = (event) =>{
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <div>
            <input 
             type="text" placeholder = "Search by name..." value={searchTerm} onChange={handleSearchChange}

            />
            <table className= "table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user =>(
                        <tr key = {user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Userlist;