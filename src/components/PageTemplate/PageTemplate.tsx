import { NavBar } from ".."
import { Outlet } from "react-router-dom";
const PageTemplate = () =>{
    return(
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}
export {PageTemplate}
