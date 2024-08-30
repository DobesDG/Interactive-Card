import { useRef, useState } from "react";

export const Input = ({ value, setValue, required = true, type, maxLength, minLength, placeholder, handle = false , title, inputMode, pattern }) => {
    const [error,setError] = useState(false);
    const [showError,setShowError] = useState(false);

    const ref = useRef();

    const handleBlur = (e) => {
        if (!e.target.validity.valid) {
            setError(true);
            setShowError(true);
            if (ref.current) {
                ref.current.focus(); 
            }
        }
        if (e.target.validity.valid) {
            setShowError(false);
        }
    };

    const handleChange = (e) => {
        const newValueIsValid = !e.target.validity.patternMismatch;
        if (error && newValueIsValid) {
            setError(false);
            setShowError(false);
        }
        setValue(e.target.value);
    };

    const handleFocus = () => {
        if (error) {
            setShowError(true)
        }
    };

    const handleCardNumberChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(.{4})/g, '$1 ').trim();
        setValue(value);
      };

    return (
    <div>
        <div className="input-div">
            <p>{title}</p>
            <input ref={ref} maxLength={maxLength} minLength={minLength} required={required} pattern={pattern} type={type} onFocus={handleFocus} onBlur={handleBlur} value={value} placeholder={placeholder} inputMode={inputMode} onChange={handle ? handleCardNumberChange : handleChange} />
        </div>
        {showError && (
            <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>Please enter a valid...</p>
        )}
    </div>
    );
};  