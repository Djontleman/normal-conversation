import Sound from "react-sound"
import Music from "../Fifth Avenue Stroll.mp3"

const BackMusic = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    return (
        <Sound 
            url={Music}
            playStatus={Sound.status.PLAYING}
            playFromPosition={300}
            onLoading={handleSongLoading}
            onPlaying={handleSongPlaying}
            onFinishedPlaying={handleSongFinishedPlaying}
        />
    )
}

export default BackMusic