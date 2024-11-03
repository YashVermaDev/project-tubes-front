
const Spinner = ({ color, className = '' }) => {
    const baseColor = color ? `text-${color}` : 'text-custom-primary'
    return (
        <>
            <div className="flex justify-center">
                <div className={`animate-spin inline-block size-6 border-[3px] border-current border-t-transparent   rounded-full ${baseColor}`} role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>

        </>
    );
};

export default Spinner;
