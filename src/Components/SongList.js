import {SongListItem} from "./SongListItem";

export const SongList = ({songs,setCurrentSong, setSongs}) =>{
    return(
        <div className="song-list">
            <h2>List of songs </h2>
            <div className="song-list-item">
                {songs.map(song =>(
                  <SongListItem key={song.id} song={song} setCurrentSong={setCurrentSong} songs={songs} setSongs={setSongs}/>
                ))}
            </div>
        </div>
    )
}