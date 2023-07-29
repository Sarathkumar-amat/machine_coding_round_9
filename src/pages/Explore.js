import { useContext } from "react";
import { VideoCard } from "./VideoCard";
import { VideoContext } from "../contexts/VideoProvider";
import "./SingleCategory.css";


export function Explore()
{
    
    const {videoData,dispatchVideo}=useContext(VideoContext);
   let displayVideos = videoData?.allVideos;

    return (<div>
        <h1>Explore</h1>
        <input type="text" placeholder="searh videos" onChange={(e)=>dispatchVideo({type:"set_searchText",payload:e.target.value})}/>
        <div className="video-container">{displayVideos?.map((videoObject)=>
        <div>
            <VideoCard videoObj={videoObject} />
        </div>
        )}</div>
    </div>)
}