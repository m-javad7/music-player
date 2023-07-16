import { v4 as uuidv4 } from 'uuid'

export const SongData=()=>{
    return[
        {
            name: "Glaciar",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg",
            artist: "Juan Rios",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=21648",
            color: ["65383A","D0906D"],
            id: uuidv4(),
            active: true
        },
        {
            name: "What If I Told You",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/935da7886600df5eeb2d3b13b12cf27ee8c6c700-1024x1024.jpg",
            artist: "Juan Rios",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=21649",
            color: ["65383A","D0906D"],
            id: uuidv4(),
            active: true
        }
    ]
}