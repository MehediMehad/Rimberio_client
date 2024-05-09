import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";

const Main = () => {
    return (
        <div>
            <div className=" ">

            <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;