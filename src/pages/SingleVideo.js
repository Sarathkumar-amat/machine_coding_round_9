import { useContext, useState } from "react"
import { VideoContext } from "../contexts/VideoProvider"
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import {MdPlaylistAdd} from "react-icons/md";
import {BiTimeFive} from "react-icons/bi";
import "./SingleVideo.css";
import { PlayList } from "../modals/PlayList";

export function SingleVideo()
{
    const {videoData} = useContext(VideoContext);
    const {videoId} = useParams();
    const [showPlaylist,setShowPlaylist]=useState(false);
    console.log(videoData);
    const reqdVideo = videoData?.allVideos?.find(({_id})=>_id==videoId);
    console.log(reqdVideo);
    return (<div className="video-player">
        <h1>Single Video</h1>
       
        <ReactPlayer url={reqdVideo?.src} />
        <div className="video-title-options">
            <div className="video-title">{reqdVideo?.title}</div>
            <div className="options">
                <div>
                    <BiTimeFive className="time-icon"/>
                </div>
                <div>
                    <MdPlaylistAdd onClick={()=>setShowPlaylist(prev=>!prev)} className="playlist-icon"/>
                    <div className="playlist-modal-parent">{showPlaylist && <PlayList setPlayList={setShowPlaylist} 
                    videoObj={reqdVideo}/>}</div>
                </div>
            </div>
           
        </div>
       
       
       
    </div>)
}