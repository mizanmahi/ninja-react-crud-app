import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [isPending, setPending] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const source = axios.CancelToken.source();

      setTimeout(() => {
         axios
            .get(url, { cancelToken: source.token })
            .then((res) => {
               setData(res.data);
               setPending(false);
               setError(null);
            })
            .catch((err) => {
               if (axios.isCancel(err)) {
                  // chcecking if request was cancelled or not
                  console.log("Request was cancelled", err);
               } else {
                  setError(err);
                  setPending(false);
               }
            });
      }, 100);

      return () => {
         // cancelling axios request when the dom is unmounted
         console.log("Clean up function ran");
         source.cancel();
      };
   }, [url]);

   return {
      data,
      error,
      isPending,
   };
};

export default useFetch;
