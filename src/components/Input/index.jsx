import React from 'react';
import './styles.css';

const Input = ({
  label,
  value,
  setValue = (e) => {},
  style,
  isImportant = false,
  frontIcon,
  backIcon,
  textarea,
}) => {
  return (
    <div
      style={{
        width: '100%',
        ...style,
      }}
    >
      {label && <p style={{ marginBottom: '10px' }}>{label}</p>}
      <div className="input">
        {frontIcon}
        {textarea ? (
          <textarea
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            style={{
              width: '100%',
              height: '200px',
            }}
          />
        ) : (
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            style={{
              width: '75%',
            }}
          />
        )}
        {backIcon}
      </div>
    </div>
  );
};

export default Input;
