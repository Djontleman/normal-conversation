import { useState, useEffect } from "react"
import LineList from "../components/LineList"
import Button from "../components/Button"

const LineContainer = () => {

    const [quotes, setQuotes] = useState([])
    

    const getQuotesData = async () => {
        let quote = []
        for (let i = 0; i < 3; i++) {
            await fetch("https://movie-quote-api.herokuapp.com/v1/quote")
            .then(response => response.json())
            .then(data => quote.push(data)) 
        }
        setQuotes(quote)
    }
    
    useEffect(getQuotesData, [])

    const updateQuotes = () => {
        setQuotes([]);
        getQuotesData();
    }

    return (
        quotes.length >= 3 ?

        <div>
            <LineList quotes={quotes} />
            <Button onClick={updateQuotes}/>
        </div>

        :

        <p>loading conversation...</p>
    )
}

export default LineContainer