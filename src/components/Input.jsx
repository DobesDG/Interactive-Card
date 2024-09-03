import { useState } from "react";

export const Input = ({ value, setValue, required = true, type, maxLength, minLength, placeholder, handleNumber = false , title, inputMode, pattern }) => {
    const [typeError, setTypeError] = useState("")
    const isMissing = typeError == "missing"
    const isWrong = typeError == "wrong"
    const isTooShort = typeError == "tooShort"

    const handleBlur = (e) => {
        const newValueIsWrong = e.target.validity.patternMismatch;
        const newValueIsMissing = e.target.validity.valueMissing;
        const newValueIsTooShort = e.target.validity.tooShort;
        if (!e.target.validity.valid) {
            if (newValueIsWrong) {
                setTypeError("wrong")
            };
            if (newValueIsMissing) {
                setTypeError("missing")
            };
            if (newValueIsTooShort) {
                setTypeError("tooShort")
            };
        }
        if (e.target.validity.valid) {
            setTypeError("");
        }
    };

    const handleChange = (e) => {
        const newValueIsWrong = e.target.validity.patternMismatch;
        const newValueIsMissing = e.target.validity.valueMissing;
        const newValueIsTooShort = e.target.validity.tooShort;
        if (!newValueIsWrong && !newValueIsMissing && !newValueIsTooShort) {
            setTypeError("");
        };
        setValue(e.target.value);
    };

    const handleCardNumberChange = (e) => {
        const newValueIsWrong = e.target.validity.patternMismatch;
        const newValueIsMissing = e.target.validity.valueMissing;
        const newValueIsTooShort = e.target.validity.tooShort;
        if (!newValueIsWrong && !newValueIsMissing && !newValueIsTooShort) {
            setTypeError("");
        };
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(.{4})/g, '$1 ').trim();
        setValue(value);
      };

    return (
        <div className="input-div">
            <p>{title}</p>
            <input maxLength={maxLength} minLength={minLength} required={required} pattern={pattern} type={type} onBlur={handleBlur} value={value} placeholder={placeholder} inputMode={inputMode} onChange={handleNumber ? handleCardNumberChange : handleChange} onKeyDownCapture={(e) => { e.key === 'Enter' && e.preventDefault(); }} />
        {isMissing && (
            <p className="alert">Can't be blank</p>
        )}
        {isWrong && (
            <p className="alert">Wrong format, {inputMode = "numeric" ? "numbers" : "characters"} only</p>
        )}
        {isTooShort && (
            <p className="alert">Too short</p>
        )}
        </div>
    );
};  