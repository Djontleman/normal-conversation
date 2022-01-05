import { useState, useEffect } from "react"
import LineList from "../components/LineList"
import Button from "../components/Button"
import BackMusic from "../components/BackMusic"

const LineContainer = () => {

    const [quotes, setQuotes] = useState([])
    const [isPlaying, setIsPlaying] = useState(true)
    

    const getQuotesData = async () => {
        let quote = []
        for (let i = 0; i < 3; i++) {
            await fetch("https://movie-quote-api.herokuapp.com/v1/quote")
            .then(response => response.json())
            .then(data => quote.push(data)) 
        }
        setQuotes(quote)
    }
    
    useEffect(() => getQuotesData(), [])

    const updateQuotes = () => {
        setQuotes([]);
        getQuotesData();
    }

    return (
        quotes.length >= 3 ?

        <div>
            <LineList quotes={quotes} />
            <Button onClick={updateQuotes}/>
            <BackMusic />
        </div>

        :

        <p>loading conversation...</p>
    )
}

export default LineContainer