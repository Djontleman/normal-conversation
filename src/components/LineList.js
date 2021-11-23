import Line from "../components/Line";

const LineList = ({ quotes }) => {

    const numbers = [1, 2, 1]
    // return (
    //     <>
    //         <Line number={1} quote={quotes[0]} />
    //         <Line number={2} quote={quotes[1]} />
    //         <Line number={1} quote={quotes[2]} />
    //     </>
    // )

    const quoteComponents = quotes
        .map((quote, index) => {
            return (
                <Line number={numbers[index]} quote={quote} />
            )
        })

    return (
        <>
            {quoteComponents}
        </>
    )

}

export default LineList;