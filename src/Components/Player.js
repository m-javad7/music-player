import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons"
import { useRef, useState} from "react"
import { useEffect } from "react"

export const Player = ({currentSong, isPlaying, setIsPlaying, songs,setCurrentSong,setSongs}) =>{
    
    useEffect = (() => {
        const newSongs = songs.map((item) =>{
            if(item.id === currentSong.id){
                return{
                    ...item,
                    active: true
                } 
            }else {
                    return {
                        ...item,
                        active: false
                    }
                }
        });
        
        setSongs(newSongs);
    },[currentSong])
    
    const audioRef = useRef(null)
    const playSong = () =>{
        if(isPlaying){
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }
    const timeUpadateHandler = (e) =>{
        
        const currentTime = e.target.currentTime
        const duration = e.target.duration
        setSongInfo({ ...songInfo, currentTime, duration})
    }
    const timeFormat =(time) =>{
        return(
        Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    }   

    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })

    const dragHandler =(e) =>{
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime:e.target.value})
    }

    const skipSong = (dir)=>{
        const currentIndex = songs.findIndex((item) => item.id === currentSong.id);
        if(dir === "next"){
            if(currentIndex === (songs.length - 1)){
                setCurrentSong(songs[0]);
            }else{
                setCurrentSong(songs[currentIndex + 1])
            }
        }
        if(dir === "back"){
            if(currentIndex === 0){
                setCurrentSong(songs[songs.length - 1]);
            }else{
                setCurrentSong(songs[currentIndex - 1])
            }
    }
}
    return(
        <div className="player">
            <div className="time-control">
            <p>{timeFormat(songInfo.currentTime)}</p>
            <div className="track">
            <input onChange={dragHandler} type="range" min={0} max={songInfo.duration || 0} value={songInfo.currentTime}/>
            <div className="animate-track"></div>
            </div>
            <p>{timeFormat(songInfo.duration)}</p>
            </div>
            <div className="play-control">
            <FontAwesomeIcon onClick={()=>skipSong("back")} className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSong} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
            <FontAwesomeIcon onClick={()=>skipSong("next")} className="skip-forward" size="2x" icon={faAngleRight}/>

            </div>
            <audio onLoadedMetadata={timeUpadateHandler} onTimeUpdate={timeUpadateHandler} ref={audioRef} src={currentSong.audio}></audio>
            
        </div>
    )
}