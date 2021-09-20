import React from 'react';
import PostList from './post-lists';
import useFetch from './useFetch';

const Homepage = () => {
   const {data, error, isPending} = useFetch("http://localhost:3004/posts");
    return ( 
        <div className="homepage">
            <h2 style={{
                marginBottom: `1.5rem`,
                color: "#aa5cdb"
            }}>All Posts!</h2>
            <PostList posts={data} error={error} isPending={isPending}/>
        </div>
     );
}
 
export default Homepage;