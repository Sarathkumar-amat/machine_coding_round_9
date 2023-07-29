import { useContext, useState } from "react";
import { VideoContext } from "../contexts/VideoProvider";
import "./NewPlayList.css";

export function NewPlayList({setPlayList})
{
    const {playlists,setPlayLists} = useContext(VideoContext);
    const [newName,setNewname] = useState("");
    const [newDes,setNewDes] = useState("");
    const addNewPlayList = (e)=>{
        e.preventDefault();
        if(newName!=="" && newDes!=="")
            {
                const newPlayList = {name:newName,description:newDes,videos:[videoObj]};
                const newListOfPlaylist = playlists?[...playlists,newPlayList]:[newPlayList];
                setPlayLists(newListOfPlaylist);
                window.localStorage.setItem("allPlaylist",JSON.stringify(playlists));
                setPlayList(false);
            }
   
}
    return (<div className="create-new-list-card">
        <h2>Create New Playlist</h2>
      <form onSubmit={addNewPlayList} className="create-inputs">
            
            <input required onChange={(e)=>setNewname(e.target.value)} className="create-options" type="text" placeholder="Enter tile of your playlist"/>
            <input required onChange={(e)=>setNewDes(e.target.value)} className="create-options" type="text" placeholder="description"/>
            <button className="create-button" >Create</button>
        </form>
    </div>)
}