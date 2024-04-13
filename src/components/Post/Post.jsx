import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();
    
    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        margin: '5px',
        borderRadius: '20px'
    }
    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h4 className="text-2xl">ID of Post : {id}</h4>
            <h4><span className='underline'>Title of Post :</span> {title}</h4>
            {/* <h4><span className='underline'>Body of Post :</span> {body}</h4> */}
            <Link to={`/post/${id}`}><button>Post detail</button></Link>
            <button onClick={handleShowDetail}>Show Details</button>
        </div>
    );
};

export default Post;