import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons"
import { useRef, useState } from "react"
export const Player = ({currentSong, isPlaying, setIsPlaying}) =>{
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

    return(
        <div className="player">
            <div className="time-control">
            <p>{timeFormat(songInfo.currentTime)}</p>
            <input onChange={dragHandler} type="range" min={0} max={songInfo.duration} value={songInfo.currentTime}/>
            <p>{timeFormat(songInfo.duration)}</p>
            </div>
            <div className="play-control">
            <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSong} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
            <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>

            </div>
            <audio onLoadedMetadata={timeUpadateHandler} onTimeUpdate={timeUpadateHandler} ref={audioRef} src={currentSong.audio}></audio>
            
        </div>
    )
}