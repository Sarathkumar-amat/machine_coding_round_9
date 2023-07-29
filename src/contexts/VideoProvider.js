import { createContext, useEffect, useReducer, useState } from "react";
import { videos } from "../data/Videos";


export const VideoContext = createContext();

function videoReducer(state, action)
{
    const {type,payload} = action;
    switch(type){
        case "set_video":
            return {...state,allVideos:payload};
        case "set_searchText":
            return {...state,searchText:payload};
    }

}
export function VideoProvider({children})
{
    const [videoData,dispatchVideo]  = useReducer(videoReducer,{allVideos:[],searchText:""});
    const allList = window.localStorage.getItem('allPlaylist');
    
    const [playlists,setPlayLists] = useState(JSON.parse(allList));
    const watchLaterVideos = localStorage.getItem("later");
    const [watchLater,setWatchLater] = useState(JSON.parse(watchLaterVideos));

  
    useEffect(()=>{dispatchVideo({type:"set_video",payload:videos})},[]);

    useEffect(() => {
        const allList = window.localStorage.getItem('allPlaylist');
        const laterVideos = localStorage.getItem('later');
        setPlayLists(JSON.parse(allList));
        setWatchLater(JSON.parse(laterVideos));
      }, []);
    
      useEffect(() => {
        window.localStorage.setItem("allPlaylist",JSON.stringify(playlists));
        localStorage.setItem("later",JSON.stringify(watchLater));
      }, [watchLater]);
      console.log(watchLater);
    return (<div>
        <VideoContext.Provider value={{videoData,dispatchVideo,playlists,setPlayLists,
            watchLater,
            setWatchLater}}>
            {children}
        </VideoContext.Provider>
    </div>)
}