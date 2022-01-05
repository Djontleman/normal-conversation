import Sound from "react-sound"
import Music from "../Fifth Avenue Stroll.mp3"

const BackMusic = ({ isPlaying }) => {

    return (
        <Sound 
            url={Music}
            playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            playFromPosition={300}
            autoLoad={true}
        />
    )
}

export default BackMusic