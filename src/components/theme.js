import { useContext } from "react";
import {themeContext} from "../App";
const Theme = () => {
    const theme = useContext(themeContext);
    console.log(theme);
    return ( <div style={{
        width: "70%",
        height: "70vh",
        backgroundColor: theme === 'dark' ? "#002" : "#f7f7f7"
    }}>
        <h2 style={{
             color: theme === 'dark' ? "#fff" : "#002"
        }}>{theme}</h2>
    </div> );
}
 
export default Theme;