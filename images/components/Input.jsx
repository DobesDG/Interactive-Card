export const Input = ({ value, setValue, required = true, type, maxLength, placeholder, title }) => {
    return (
        <div className="input-div">
            <h5>{title}</h5>
            <input maxLength={maxLength} required={required} type={type} value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} />
        </div>
    );
};  