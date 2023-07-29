import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VideoContext } from "../contexts/VideoProvider";
import "./SingleCategory.css";
import {BiTimeFive,BiSolidTimeFive} from "react-icons/bi";


export function VideoCard({videoObj})
{
    const {_id,title,thumbnail,views,creator,category} = videoObj;
    const navigate = useNavigate();
    const {videoData,watchLater,setWatchLater}=useContext(VideoContext);
    const reqdVideos = videoData?.allVideos;

    const checkWatchLater = (videoId)=>{
        return watchLater?.find(({_id})=>_id===videoId);
    }
    const addWatchLater = (videoId)=>{
        console.log("add watch later")
        const reqdObj = reqdVideos?.find(({_id})=>_id===videoId);
        setWatchLater(prev=>[...prev,reqdObj]);
        localStorage.setItem("later",JSON.stringify(watchLater));
    }
    const removeWatchLater = (videoId)=>{
        console.log("remove watch later")
        const newList = watchLater?.filter(({_id})=>_id!==videoId);
        setWatchLater(newList);
        localStorage.setItem("later",JSON.stringify(watchLater));
    }

    return (<div>
       {videoObj &&  <div className="video-card">
            <img onClick={()=>navigate(`/singleVideo/${_id}`)} className="video-image" src={thumbnail} alt="video-thumbnail" />
            <div className="video-name">{title}</div>
            <div className="video-name">{category}</div>
            <div className="other-details">
                <div className="video-details">{views} views | {creator}</div>
                <div className="watch-later-add">
                {!checkWatchLater(videoObj?._id) && <BiTimeFive onClick={(_id)=>addWatchLater(videoObj?._id)} />}
                {checkWatchLater(videoObj?._id) && <BiSolidTimeFive onClick={(_id)=>removeWatchLater(videoObj?._id)}/>}
                </div>
            </div>
            
            </div>}
    </div>)
}