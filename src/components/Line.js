import { useState, useEffect } from "react"

const Line = ({ number, quote, wait }) => {

    const [hidden, setHidden] = useState("hidden")

    useEffect(() => {
        setTimeout(() => setHidden(""), wait)
    }, [])

    return (
        <div className={hidden}>
            <p>Person {number}: {quote.quote}</p>
        </div>
    )

}

export default Line