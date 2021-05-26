import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const PostDetails = () => {
   const { id } = useParams();
   const history = useHistory()

   const {
      data: post,
      isPending,
   } = useFetch(`http://localhost:4000/posts/${id}`);

   const deleteHandler = () =>  {
      axios.delete(`http://localhost:4000/posts/${id}`).then(res => {
         console.log("Post was deleted with the id of ", id);
         history.push("/")
      })
   }

   return (
      <div className="post-details">
         <h2 style={{
             color: "#aa5cdb"
         }}>Details of #{id}</h2>
         {isPending && <h2>Loading ...</h2>}
         {post && (<div className="post">
            <div className="post-header">
               <h1>{post.title.toUpperCase()}</h1>
               <span>User Id: {post.userId}</span>
            </div>
            <div className="post-content">
               <p>{post.body}</p>
            </div>
            <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
         </div>)}
      </div>
   );
};

export default PostDetails;
