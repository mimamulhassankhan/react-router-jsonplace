import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const {fId} = useParams();
    return (
        <div>
            <h3>This is user detail component {fId}</h3>
        </div>
    );
};

export default UserDetail;