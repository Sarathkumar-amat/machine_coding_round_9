import { Link, NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

export function NavBar()
{
    const navigate = useNavigate();
    const linkStyle = ({isActive})=>({
        

    })
    return (<div className="route-container">
        <NavLink to="/" style={linkStyle} className="page-name">Home</NavLink>
        <NavLink to="/explore" style={linkStyle} className="page-name">Explore</NavLink>
        <NavLink to="/playlists" style={linkStyle} onClick={()=>navigate("/playlists")} className="page-name">Playlists</NavLink>
        <NavLink to="/watchlater" style={linkStyle} className="page-name">WatchLater</NavLink>
    </div>)
}