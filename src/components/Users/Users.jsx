import { useLoaderData } from "react-router-dom"
import User from "../User/User";
import './Users.css'

const Users = () => {

    
    const users = useLoaderData()
    const usersStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px'
    }
    //state --> data
    // state --> loader
    // useEffect
    // fetch --> state set --> set state
    // console.log(users)
    return (
        <div>
            <h2>Our users: {users.length}</h2>
            <p>Fantastic and decent users</p>
            <div style={usersStyle}>
                {
                    users.map(user => <User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};

export default Users;