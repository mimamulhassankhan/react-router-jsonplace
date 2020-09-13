import React from 'react';

const User = (props) => {
    const {name, email} = props.friend;
    
    return (
        <div className="border text-center border-danger m-4 p-3 rounded">
            <h2>Name : {name}</h2>
            <h3>Email : {email}</h3>
        </div>
    );
};

export default User;