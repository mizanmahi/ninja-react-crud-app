import { Link } from "react-router-dom";



const PostList = ({ posts, error, isPending }) => {
   
   return (
      <div className="post-list">
         {isPending && <h2>Loading ...</h2>}
         {error && <h2>{error + "!"}</h2>}
         {posts &&
            posts.map(({ title, body, userId, id }) => {
               return (
                  <Link to={`/post/${id}`} key={id}>
                    <div className="post" >
                     <div className="post-header">
                        <h1>{title.toUpperCase()}</h1>
                        <span>ID: {id}</span>
                     </div>
                     <span>Click to read full post..</span>
                  </div>
                  </Link>
               );
            })}
      </div>
   );
};

export default PostList;
