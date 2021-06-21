import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";


const useLayout = (minWidth) => {
    const [isSmallScreen, setIsSmallScreen] = useState(null);

  const screenWidth = useCallback(() => {
    return window.innerWidth;
 }, []);

   useEffect(() => {
      if (screenWidth() < minWidth) setIsSmallScreen(true);
      window.addEventListener("resize", () =>
         setIsSmallScreen(screenWidth() < minWidth)
      );
   }, [screenWidth, minWidth]);
   return isSmallScreen;
};

export default useLayout;
