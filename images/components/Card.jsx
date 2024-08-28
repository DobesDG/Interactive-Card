export const Card = ({ value, defaultValue, className }) => {
    return (
        <div className={className}>
            <p>{value && value != "" ? value : defaultValue }</p>
        </div>
    );
};  