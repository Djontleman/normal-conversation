import { useState } from "react"
import LineList from "../components/LineList"
import BackMusic from "../components/BackMusic"

const LineContainer = () => {

    const [confirm, setConfirm] = useState(false)
    const [quotes, setQuotes] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    
    const getQuotesData = async () => {
        let quote = []
        for (let i = 0; i < 3; i++) {
            await fetch("https://movie-quote-api.herokuapp.com/v1/quote")
            .then(response => response.json())
            .then(data => quote.push(data)) 
        }
        setQuotes(quote)
    }

    const handleConfirm = () => {
        setConfirm(true);
        updateQuotes();
    }

    const updateQuotes = () => {
        setQuotes([]);
        getQuotesData();
        setIsPlaying(true);
    }

    const handleSongStopping = () => {
        isPlaying ? setIsPlaying(false) : setIsPlaying(true);
    }

    return (
        <>
            {!confirm ?
                <>
                    <button onClick={handleConfirm}>gimme a convo</button>
                </>

                :

                <>
                    {quotes.length >= 3 ?

                        <div>
                            <LineList quotes={quotes} />
                            <button onClick={updateQuotes}>another convo</button>
                            <button onClick={handleSongStopping}>{isPlaying ? "make music stahp" : "make music go brrr"}</button>
                            <BackMusic isPlaying={isPlaying} />
                        </div>

                        :

                        <p>loading conversation...</p>
                    }
                </>
            }
        </>
    )
}

export default LineContainer