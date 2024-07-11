import React from "react";

const UserModal = ({user, closeModal}) =>{
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick= {closeModal}>&times;</span>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone:{user.phone}</p>
                <p>Website:{user.website}</p>
                <p>Company:{user.company.name}</p>
                <address>
                    Address:{user.address.street} , {user.address.suite} , {user.address.city}
                </address>


            </div>

        </div>
    )
}
export default UserModal;