import { NavBar } from "./NavBar";
import "./ContentBox.css";

export function ContentBox({children})
{

    return (<div className="nav-bar-container">
        <NavBar />
        {children}
    </div>)
}