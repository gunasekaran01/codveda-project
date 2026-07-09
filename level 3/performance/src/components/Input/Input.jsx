import { memo } from "react";
import "./Input.css";

const Input = memo(function Input({

    label = "Label",

    type = "text",

    placeholder = "",

    helperText = "",

    error = "",

    required = false,

    disabled = false,

    size = "medium",

    fullWidth = false,

    value,

    onChange

}) {

    return (

        <div
            className={`nova-input-group ${fullWidth ? "full-width" : ""}`}
        >

            <label className="nova-label">

                {label}

                {required && <span className="required">*</span>}

            </label>

            <input

                className={`

                    nova-input

                    ${size}

                    ${error ? "error" : ""}

                `}

                type={type}

                placeholder={placeholder}

                value={value}

                onChange={onChange}

                required={required}

                disabled={disabled}

                aria-label={label}

                aria-invalid={!!error}

            />

            {

                error ?

                <small className="error-text">

                    {error}

                </small>

                :

                helperText &&

                <small className="helper-text">

                    {helperText}

                </small>

            }

        </div>

    );

});

export default Input;