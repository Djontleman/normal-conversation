import { useState, useEffect } from "react"
import LineList from "../components/LineList"
import Button from "../components/Button"

const LineContainer = () => {

    const [quotes, setQuotes] = useState([])
    

    const getQuotesData = async () => {
        let quote = []
        for (let i = 0; i < 3; i++) {
            const fetchResponse = await fetch("https://movie-quote-api.herokuapp.com/v1/quote")
            .then(response => {
                // quote.push(response.json());
                // responseJson = response.json()
                return response.json()
            })
            .then(data => {
                quote.push(data)
            }) 
            console.log(quote)
        }
        setQuotes(quote)
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