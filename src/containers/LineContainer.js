import { useState, useEffect } from "react"
import LineList from "../components/LineList"
import Button from "../components/Button"

const LineContainer = () => {

    const [quotes, setQuotes] = useState([])

    const getQuotesData = () => {
        Promise.all([
            fetch("https://movie-quote-api.herokuapp.com/v1/quote")
                .then(response => response.json()),
            fetch("https://movie-quote-api.herokuapp.com/v1/quote")
                .then(response => response.json()),
            fetch("https://movie-quote-api.herokuapp.com/v1/quote")
                .then(response => response.json())
        ])
        .then(data => setQuotes(data))
    }
    
    useEffect(getQuotesData, [])

    const updateQuotes = () => {
        getQuotesData();
    }

    return (
        quotes ?

        <div>
            <LineList quotes={quotes} />
            <Button onClick={updateQuotes}/>
        </div>

        :

        <p>loading conversation...</p>
    )
}

export default LineContainer