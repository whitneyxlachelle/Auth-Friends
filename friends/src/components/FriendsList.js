import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendCard from '../components/FriendCard';

const FriendsList = () => {
    const [friend, setFriend] = useState([]);
    const [newFriend, setNewFriend] = useState({
        name: "",
        age: "",
        email: ""
    });

    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                console.log(res.data);
                setFriend(res.data);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    // adding a new friend
    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .post("http://localhost:5000/api/friends", newFriend)
            .then(res => {
                console.log(res);
                setNewFriend({
                    ...newFriend,
                    name: "",
                    age: "",
                    email: ""
                });
            })
            .catch(error => {
                console.log(error)
            });
    };

    const handleChange = event => {
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className="friends">
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="name"
                    value={newFriend.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="age"
                    value={newFriend.age}
                    onChange={handleChange}
                    placeholder="Age"
                />
                 <input
                    type="text"
                    name="email"
                    value={newFriend.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <button className="button">Add Friend</button>
            </form>

            <div>
                {friend.map(person => (
                    <div key={person.id}>
                        <FriendCard person={person} />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default FriendsList;