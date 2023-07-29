import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VideoContext } from "../contexts/VideoProvider";
import "./SingleCategory.css";


export function PlayListVideos()
{
    const navigate = useNavigate();
    const {listName} = useParams();
    const {playlists}=useContext(VideoContext);
    const reqdList = playlists?.find(({name})=>name===listName);
    return (<div>
        <h1>{listName} videos</h1>
        <div className="video-container">{reqdList?.videos?.map(({_id,title,thumbnail,views,creator,category})=>
        <div onClick={()=>navigate(`/singleVideo/${_id}`)} className="video-card">
            <img className="video-image" src={thumbnail} alt="video-thumbnail" />
            <div className="video-name">{title}</div>
            <div className="video-name">{category}</div>
            <div>
                <div className="video-details">{views} views | {creator}</div>  
            </div>
            
            </div>)}</div>
    </div>)
}