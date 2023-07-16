

export const SongListItem = ({song}) =>{
    return(
        <div className="song_container">
            <img src={song.cover}/>
            <h2>{song.name}</h2>
            <h3>{song.artist}</h3>
        </div>
    )
}