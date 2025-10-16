import React from 'react'
import UserContext from './../Context/UserContext';
import { useContext } from 'react';

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) 
        return <>please login </>

    return <>
    welcome {user.username}
    </>
}

export default Profile