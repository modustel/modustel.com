import { useId, useState } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  showCounter?: boolean;
  rows?: number;
}

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  maxLength,
  showCounter = false,
  rows = 4,
}: FormFieldProps) {
  const id = useId();
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const showError = touched && required && !value;
  const isNearLimit = maxLength && value.length >= maxLength * 0.9;
  const isAtLimit = maxLength && value.length >= maxLength;

  const inputProps = {
    id,
    name,
    placeholder,
    required,
    maxLength,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValue(e.target.value),
    onBlur: () => setTouched(true),
    onInvalid: () => setTouched(true),
    className: showError ? "field-error" : undefined,
  };

  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
        {required && <span className="required-marker">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea {...inputProps} rows={rows} />
      ) : (
        <input {...inputProps} type={type} />
      )}

      <div className="field-footer">
        {showError && (
          <span className="field-error-message">This field is required</span>
        )}
        {showCounter && maxLength && (
          <span
            className={`char-counter ${isAtLimit ? "at-limit" : isNearLimit ? "near-limit" : ""}`}
          >
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
}
