import { useLoaderData, useNavigate } from "react-router-dom"

const UserDetails = () => {
    const user = useLoaderData();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/users')
        //navigate(-1) // alternate navigation
    }

    const { name, email, website, address, company } = user;
    return (
        <div>
            <h2 className="text-2xl">{name}</h2>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <div>
                <h2 className="text-2xl mt-4">Address</h2>
                <p>Street: {address.street}</p>
                <p>Suite: {address.suite}</p>
                <p>City: {address.city}</p>
                <p>Zipcode: {address.zipcode}</p>
            </div>
            <div>
                <h1 className="text-2xl mt-4">Company</h1>
                <p>Name: {company.name}</p>
                <p>CatchPhrase: {company.catchPhrase}</p>
                <p>Bs: {company.bs}</p>
            </div>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;