import './Style/style.css'
import {Player} from './Components/Player'
import {Song} from './Components/Song'
import {SongData} from './data'
import { useState } from 'react'
import { SongList } from './Components/SongList'
import { ToggleList } from './Components/ShowList'
function App() {
  const [songs, setSongs] = useState(SongData());
const [currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);
const [displayListSong, setDisplayListSong] = useState(false);
  return (
    <div className="App">
      <ToggleList displayListSong={displayListSong} setDisplayListSong={setDisplayListSong}  />
      <Song currentSong={currentSong}/>
      <Player setSongs={setSongs} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs}/>
      <SongList songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs} displayListSong={displayListSong}/>
      </div>
  );
}

export default App;
