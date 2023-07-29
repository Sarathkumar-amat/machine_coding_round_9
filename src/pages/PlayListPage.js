import { useContext, useState } from "react"
import { VideoContext } from "../contexts/VideoProvider"
import "./PlayListPage.css";
import {AiOutlineClose,AiOutlinePlusCircle} from "react-icons/ai";
import { PlayList } from "../modals/PlayList";
import { NewPlayList } from "../modals/NewPlayList";
import { useNavigate } from "react-router-dom";


export function PlayListPage()
{
    const {playlists,setPlayLists} = useContext(VideoContext);
    const [showPlaylist,setShowPlaylist]=useState(false);
    const navigate = useNavigate();

    const handleRemovePlaylist = (playListobj)=>{
        const newList = playlists?.filter(({name})=>name!==playListobj?.name);
        setPlayLists(newList);
        window.localStorage.setItem("allPlaylist",JSON.stringify(playlists));
    }
    return(<div>
        <h2>PlayLists</h2>
        <div className="playlist-container">{playlists?.map(playlist=>
            <div className="playlist-card">
                <AiOutlineClose onClick={()=>handleRemovePlaylist(playlist)} style={{cursor:"pointer"}}/>
                <img onClick={()=>navigate(`/playlistVideos/${playlist?.name}`)} className="playlist-image" src="https://picsum.photos/40/40" alt="playlist-thumbnail" />
            <div>{playlist?.name}</div>
            <button onClick={()=>handleRemovePlaylist(playlist)} >remove</button>
            </div>
            
            )
            }
           <div className="add-playlist-button"> 
           {!showPlaylist && <AiOutlinePlusCircle onClick={()=>setShowPlaylist(true)}/>}
            <div className="playlist-modal-parent">{showPlaylist && <NewPlayList setPlayList={setShowPlaylist} />}</div>
            </div>
            </div>
    </div>)
}