export const Input = ({ value, setValue, required = true, type, maxLength, minLength, placeholder, handle = false , title, inputMode }) => {
    return (
        <div className="input-div">
            <h5>{title}</h5>
            <input maxLength={maxLength} minLength={minLength} required={required} type={type} value={value} placeholder={placeholder} inputMode={inputMode} onChange={handle ? setValue : (e) => setValue(e.target.value)} />
        </div>
    );
};  