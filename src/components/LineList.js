import Line from "../components/Line";

const LineList = ({ quotes }) => {

    const numbers = [1, 2, 1]
    const delays = [0, 1600, 3000]

    const quoteComponents = quotes
        .map((quote, index) => {
            return (
                <Line key={index} number={numbers[index]} quote={quote} wait={delays[index]} />
            )
        })

    return (
        <>
            {quoteComponents}
        </>
    )

}

export default LineList;