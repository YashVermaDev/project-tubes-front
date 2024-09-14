const button = ({ type, value, classes = '' }) => {
    return (
        <button type={type} className={"px-2 py-3 border-2 rounded-sm bg-blue-500 min-w-[100px] uppercase text-xs font-bold hover:bg-black" + classes}>{value}</button>
    )
}

export default button;