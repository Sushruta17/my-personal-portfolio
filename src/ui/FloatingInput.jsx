import React from 'react';

const FloatingInput = ({
  id,
  name,
  type = 'text',
  label,
  value,
  onChange,
  required = true,
  multiline = false,
  rows = 4,
}) => {
  const FieldTag = multiline ? 'textarea' : 'input';

  return (
    <div className="floating-input">
      <FieldTag
        id={id}
        name={name}
        type={multiline ? undefined : type}
        className="floating-input__field"
        value={value}
        onChange={onChange}
        required={required}
        rows={multiline ? rows : undefined}
        placeholder=" "
      />
      <label htmlFor={id} className="floating-input__label">
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;

