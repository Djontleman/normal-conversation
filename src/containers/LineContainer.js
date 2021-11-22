import { useState, useEffect } from "react"
import Line from "../components/Line"

const LineContainer = ({number}) => {

    const [quote, setQuote] = useState(null)

    useEffect(() => {
        fetch("https://movie-quote-api.herokuapp.com/v1/quote")
        .then(response => response.json())
        .then(data => setQuote(data))
    }, [])

    return (
        quote ?

        <div>
            <Line number={number} quote={quote} />
        </div>

        :

        <p>loading conversation...</p>
    )
}

export default LineContainer