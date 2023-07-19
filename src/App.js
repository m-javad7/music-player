import './Style/style.css'
import {Player} from './Components/Player'
import {Song} from './Components/Song'
import {SongData} from './data'
import { useState } from 'react'
import { SongList } from './Components/SongList'

function App() {
  const [songs, setSongs] = useState(SongData());
const [currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      <SongList songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs} />
      </div>
  );
}

export default App;
