import { useContext, useState } from "react";
import "./PlayList.css";
import { VideoContext } from "../contexts/VideoProvider";
import {AiOutlineClose} from "react-icons/ai";


export function PlayList({setPlayList,videoObj})
{
    const {playlists,setPlayLists} = useContext(VideoContext);
    const [createOptions,setCreateOptions] = useState(false);
    const [selectedList,setSelectedList] = useState();
    const [newName,setNewname] = useState("");
    const [newDes,setNewDes] = useState("");

    const handlePlaylistAdd = (playlistObj,event)=>{
        if(event.target.checked){
            const newList = {...playlistObj,videos:[...playlistObj.videos,videoObj]};
            const newPlayListArr = playlists?.map((element)=>element.name===playlistObj?.name?newList:element);
            setPlayLists(newPlayListArr);
        }
        else{
            const newList = {...playlistObj,videos:playlistObj?.videos.filter(({name})=>name!==videoObj?.name)};
            const newPlayListArr = playlists?.map((element)=>element.name===playlistObj?.name?newList:element);
            setPlayLists(newPlayListArr);
        }
    }
    const addNewPlayList = (e)=>{
            e.preventDefault();
            if(newName!=="" && newDes!=="")
            {
                const newPlayList = {name:newName,description:newDes,videos:[videoObj]};
                setPlayLists(prev=>[...prev,newPlayList]);
                window.localStorage.setItem("allPlaylist",JSON.stringify(playlists));
                setPlayList(false);
            }
       
    }
    const checkInPlaylist = (playlistObj)=>{
            return playlistObj?.videos?.find(({name})=>name===videoObj?.name);
    }

    return (<div className="playlist-options-container">
        <div className="header">
            <h3>Add to Play list</h3>
            <AiOutlineClose onClick={()=>setPlayList(false)} style={{cursor:"pointer"}}/>
        </div>
       {playlists?.map(playlist=>
        <div>
            <input checked={checkInPlaylist(playlist)}  
            onChange={(e)=>handlePlaylistAdd(playlist,e)} type="checkbox" value={playlist} />{playlist?.name}
        </div>)}
                
            
     
        {!createOptions && <button onClick={()=>setCreateOptions(true)}>Create new playlist</button>}
       {createOptions && <form onSubmit={addNewPlayList} className="create-inputs">
            
            <input required onChange={(e)=>setNewname(e.target.value)} className="create-options" type="text" placeholder="Enter tile of your playlist"/>
            <input required onChange={(e)=>setNewDes(e.target.value)} className="create-options" type="text" placeholder="description"/>
            <button className="create-button" >Create</button>
        </form>}
       
    </div>)
}