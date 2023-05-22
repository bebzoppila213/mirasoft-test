import Header from "../components/Header";
import { Outlet } from "react-router-dom";
export default function RootElement(){

    return(
        <div>
            <Header></Header>
            <Outlet />
        </div>
    )
}