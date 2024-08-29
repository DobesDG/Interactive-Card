export const Input = ({ value, setValue, required = true, type, maxLength, minLength, placeholder, handle = false , title, inputMode }) => {
    return (
        <div className="input-div">
            <p>{title}</p>
            <input maxLength={maxLength} minLength={minLength} required={required} type={type} value={value} placeholder={placeholder} inputMode={inputMode} onChange={handle ? setValue : (e) => setValue(e.target.value)} />
        </div>
    );
};  