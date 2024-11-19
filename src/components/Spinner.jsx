import PropTypes from 'prop-types'
const Spinner = ({ color, className = '' }) => {
    const baseColor = color ? `text-${color}` : 'text-custom-primary'
    return (
        <>
            <div className="flex items-center justify-center">
                <div className={`animate-spin inline-block size-6 border-[3px] border-current border-t-transparent rounded-full ${baseColor}`} role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>

        </>
    );
};
Spinner.propTypes = {
    color: PropTypes.string,
    className: PropTypes.string
}

export default Spinner;
