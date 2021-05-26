import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CreateForm = () => {
   const [inputVal, setInputVal] = useState({
      userId: "",
      title: "",
      body: "",
   });

   const history = useHistory();

   const changeHandler = (e) => {
      const { name, value } = e.target;
      setInputVal((prev) => {
         return {
            ...prev,
            [name]: value,
         };
      });
   };

   const submitHnadler = (e) => {
      e.preventDefault();
      if (
         !inputVal.userId ||
         inputVal.title.trim().length < 1 ||
         inputVal.body.trim().length < 1
      ) return;
         axios
            .post("http://localhost:4000/posts", inputVal)
            .then((res) => {
               console.log("New Blog Added!");
               history.push("/");
            })
            .catch((err) => console.log(err.message));

      setInputVal({
         userId: "",
         title: "",
         body: "",
      });
   };

   return (
      <form action="#" onSubmit={submitHnadler}>
         <h2>Add New Post!</h2>

         <div className="mb-3">
            <label className="form-label">User Id</label>
            <input
               placeholder="Only numbers are allowed"
               type="number"
               className="form-control"
               name="userId"
               value={inputVal.userId}
               onChange={changeHandler}
               required
            />
         </div>
         <div className="mb-3">
            <label className="form-label">Title</label>
            <input
               type="text"
               className="form-control"
               name="title"
               value={inputVal.title}
               onChange={changeHandler}
               required
            />
         </div>
         <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea
               className={`form-control`}
               rows="3"
               name="body"
               value={inputVal.body}
               onChange={changeHandler}
               required
            />
         </div>

         <button type="submit" className="btn btn-primary">
            Add Post
         </button>
      </form>
   );
};

export default CreateForm;
