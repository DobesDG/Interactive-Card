import { useState } from "react";

export const Input = ({ setValue ,inputMode ,title, handleNumber = false , required = true, ...props }) => {
    const [typeError, setTypeError] = useState("")

    const cleanError = (e) => {
        const newValueIsWrong = e.target.validity.patternMismatch;
        const newValueIsMissing = e.target.validity.valueMissing;
        const newValueIsTooShort = e.target.validity.tooShort;
        if (!newValueIsWrong && !newValueIsMissing && !newValueIsTooShort) {
            setTypeError("");
        };
    };

    const setError = (e) => {
        if (e.target.validity.valid) {
            setTypeError("");
            return
        };
        if (e.target.validity.patternMismatch) {
            setTypeError("wrong")
        };
        if (e.target.validity.valueMissing) {
            setTypeError("missing")
        };
        if (e.target.validity.tooShort) {
            setTypeError("tooShort")
        };
    };

    const handleChange = (e) => {
        cleanError(e)
        setValue(e.target.value);
    };

    const handleCardNumberChange = (e) => {
        cleanError(e)
        const value = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
        setValue(value);
      };

    return (
        <div className="input-div">
            <p>{title}</p>
            <input required={required} onBlur={setError} onChange={handleNumber ? handleCardNumberChange : handleChange} onKeyDownCapture={(e) => {e.key === 'Enter' && e.preventDefault();}} {...props} />
        <ErrorMessage typeError={typeError} inputMode={inputMode}/>
        </div>
    );
};  

const ErrorMessage = ({typeError, inputMode}) => {
    const inputModeText = inputMode === "numeric" ? "numbers" : "characters"
    switch (typeError) {
        case 'missing' : 
            return <p className="alert">Can't be blank</p>
        case 'wrong' :
            return <p className="alert">Wrong format, {inputModeText} only</p>
        case 'tooShort' :
            return <p className="alert">Too short</p>
    }
}