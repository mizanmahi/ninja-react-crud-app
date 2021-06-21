import useLayout from "./useLayout";

const LayoutComponentTwo = (props) => {
    const smallscreen = useLayout(800);
   return (
      <div>
         <h2>Layout Two</h2>
         {smallscreen ? "Small screen" : "BigScreen"}
      </div>
   );
};

export default LayoutComponentTwo;
