import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const User = (props) => {
    let history = useHistory();
    const {id, name, email} = props.friend;
    const clickHandler = (friendId) => {
        let url = `/friend/${friendId}`;
        history.push(url);
    }
    
    return (
        <div className="border text-center border-danger m-4 p-3 rounded">
            <h2>Name : {name}</h2>
            <h3>Email : {email}</h3>
            <Link to={`/friend/${id}`} className="btn btn-success">Know About {id}</Link>
            <button onClick={() => clickHandler(id)} className="btn btn-danger ml-1">Click Me</button>
        </div>
    );
};

export default User;