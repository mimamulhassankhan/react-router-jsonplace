import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    const {id, name, email} = props.friend;
    console.log(props.friend);
    
    return (
        <div className="border text-center border-danger m-4 p-3 rounded">
            <h2>Name : {name}</h2>
            <h3>Email : {email}</h3>
            <Link to={`/friend/${id}`} className="btn btn-success">Know About {id}</Link>
        </div>
    );
};

export default User;