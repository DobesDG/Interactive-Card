export const Card = ({ value, defaultValue, className }) => {
    return (
        <div className={className}>
            <h3>{value && value != "" ? value : defaultValue }</h3>
        </div>
    );
};  