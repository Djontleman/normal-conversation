
const Button = ({onClick}) => {

    const handleClick = () => {
        onClick()
    }

    return(
        <button onClick={handleClick}>another line</button>
    )
} 

export default Button