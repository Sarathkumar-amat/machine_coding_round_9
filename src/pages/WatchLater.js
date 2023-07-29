import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { VideoContext } from "../contexts/VideoProvider";
import "./WatchLater.css";
import { VideoCard } from "./VideoCard";

export function WatchLater()
{
    const {watchLater,setWatchLater} =  useContext(VideoContext);
    return (<div>
        <h1>watch Later videos</h1>
        <div className="video-container">{watchLater?.map((videoObject)=>
        <div>
            <VideoCard videoObj={videoObject} />
        </div>
        )}</div>
    </div>)
}