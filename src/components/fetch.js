import React, { useContext, useEffect } from "react";
import axios from "axios";
import { themeContext } from "../App";

const Fetch = () => {
   const context = useContext(themeContext);
   console.log(context);
   const {
      state: { user, ispending, error },
      dispatch,
   } = context;

   useEffect(() => {
      axios
         .get("https://jsonplaceholder.typicode.com/posts/1")
         .then((res) => {
            if (res.status === 200) {
               console.log(res.status);
               dispatch({ type: "fetch_success", payload: res.data });
            }
         })
         .catch((err) => {
            console.log("errfdf");
            dispatch({ type: "fetch_error", payload: err.message });
         });
   }, []);

   return (
      <div>
         <div>
            {ispending && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {user && (
               <h2>
                  {user.userId} {user.title}
               </h2>
            )}
         </div>
      </div>
   );
};

export default Fetch;

