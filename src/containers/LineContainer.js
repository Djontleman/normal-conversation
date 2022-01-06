import { useState } from "react"
import { random } from 'movie-quotes'

import LineList from "../components/LineList"
import BackMusic from "../components/BackMusic"

const LineContainer = () => {

    const [confirm, setConfirm] = useState(false)
    const [quotes, setQuotes] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    
    const getQuotesData = () => {
        let quoteList = []
        for (let i = 0; i < 3; i++) {
            let quote = random();
            // eslint-disable-next-line
            const [j, interQuote, movie] = quote.split('"');
            quote = {
                quote: interQuote,
                movie: movie.slice(1)
            }
            quoteList.push(quote);
        }
        setQuotes(quoteList)
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