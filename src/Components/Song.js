

export const Song = ({currentSong}) =>{
    return(
        <div className="song_container">
            <img src={currentSong.cover}/>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}