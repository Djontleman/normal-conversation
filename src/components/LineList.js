import Line from "../components/Line";

const LineList = ({ quotes }) => {

    const numbers = [1, 2, 1]

    const quoteComponents = quotes
        .map((quote, index) => {
            return (
                <Line key={index} number={numbers[index]} quote={quote} />
            )
        })

    return (
        <>
            {quoteComponents}
        </>
    )

}

export default LineList;