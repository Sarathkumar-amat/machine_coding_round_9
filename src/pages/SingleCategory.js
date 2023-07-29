import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VideoContext } from "../contexts/VideoProvider";
import "./SingleCategory.css";
import { VideoCard } from "./VideoCard";


export function SingleCategory()
{
    
    const {categoryName} = useParams();
    const {videoData}=useContext(VideoContext);
    const reqdVideos = videoData?.allVideos?.filter(({category})=>category===categoryName);

    return (<div>
        <h1>Category Name</h1>
        <div className="video-container">{reqdVideos?.map((videoObject)=>
        <div>
            <VideoCard videoObj={videoObject} />
        </div>
        )}</div>
    </div>)
}