import React from 'react';

const FriendCard = props => {
    return (
        <div>
            <h1>{props.person.name}</h1>
            <h2>{props.person.age}</h2>
            <h2>{props.person.email}</h2>
        </div>
    )
}

export default FriendCard;