import { useLoaderData } from "react-router-dom"

const UserDetails = () => {
    const user = useLoaderData();
    const { name, email, website } = user;
    return (
        <div>
            <h2>Details About User: {name}</h2>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;