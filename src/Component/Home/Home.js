import React, { useEffect, useState } from 'react';
import User from '../../Component/User/User';

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect( () => {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
        .catch(er => console.log(er));
    },[])
    return (
        <div>
            {
                friends.map(friend => <User key={friend.id} friend={friend}></User>)
            }
        </div>
    );
};

export default Home;