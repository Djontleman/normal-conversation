import Sound from "react-sound"
import Music from "../Fifth Avenue Stroll.mp3"

const BackMusic = () => {
    return (
        <Sound 
            url={Music}
            playStatus={Sound.status.PLAYING}
            playFromPosition={300}
            autoLoad={true}
        />
    )
}

export default BackMusic