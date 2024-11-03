const button = ({ type, value, className = '', onClick }) => {

    return (
        <button type={type} className={`btn  ${className}`} onClick={onClick}>{value}</button>
    )
}

export default button;