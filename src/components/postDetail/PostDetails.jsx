import { useLoaderData, useNavigate, useParams } from "react-router-dom"

const PostDetails = () => {
    const post = useLoaderData();

    const { postId } = useParams();
    // console.log(postId)

    const navigate = useNavigate();

    const {userId, id, title, body} = post

    const handleGoBack = () => {
        navigate('/posts')
        //navigate(-1) // alternate navigation
    }

    return (
        <div className="m-auto">
            <h3 className="text-2xl">Post Details About:</h3>
            <h3 className="text-xl">User ID: {userId}</h3>
            <h3 className="text-xl">Post ID: {id}</h3>
            <h3 className="text-xl">Title: {title}</h3>
            <p className="mb-4">Body : {body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;