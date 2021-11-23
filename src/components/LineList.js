import Line from "../components/Line";

const LineList = ({ quotes }) => {

    // return (
    //     <>
    //         <Line number={1} quote={quotes[0]} />
    //         <Line number={2} quote={quotes[1]} />
    //         <Line number={1} quote={quotes[2]} />
    //     </>
    // )

    const quoteComponents = quotes
        .map(quote => {
            return (
                <Line number={1} quote={quote} />
            )
        })

    return (
        <>
            {quoteComponents}
        </>
    )

}

export default LineList;