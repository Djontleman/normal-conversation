import { useState, useEffect } from "react"

const Line = ({ number, quote, wait }) => {

    const [hidden, setHidden] = useState("hidden")

    useEffect(() => {
        hidden === "hidden" ?
        setTimeout(() => setHidden(""), wait)
        :
        setHidden("hidden")
        setTimeout(() => setHidden(""), wait)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quote])

    return (
        <div className={hidden}>
            <p>Person {number}: {quote.quote}</p>
        </div>
    )

}

export default Line