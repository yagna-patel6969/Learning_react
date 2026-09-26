//here we will get the data which we store into setUser

import  { useContext } from 'react'
import UserContext from '../context/UserContex'

export const Profile = () => {

    const {user}=useContext(UserContext);

        
            if(!user) return <div><h1>plz login first</h1></div>

            return <div><h1>Welcome {user.userName}</h1></div>
        
}
