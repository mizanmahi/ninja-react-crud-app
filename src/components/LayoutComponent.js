import useLayout from "./useLayout";

const LayoutComponentOne = (props) => {

    const smallscreen = useLayout(600);
    console.log(smallscreen);
   
   return (
      <div>
         <h2>Layout One</h2>
         {smallscreen ? "Small screen" : "BigScreen"}
      </div>
   );
};

export default LayoutComponentOne;
