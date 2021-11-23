
const Button = ({onClick}) => {

    const handleClick = () => {
        onClick()
    }

    return(
        <button onClick={handleClick}>another convo</button>
    )
} 

export default Button