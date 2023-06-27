import React from 'react';

const ButtonPrimary = ({ label, action = () => {}, style, backIcon }) => {
  return (
    <button
      style={{
        background: 'var(--pink)',
        borderRadius: '10px',
        padding: '10px',
        width: '100%',
        color: 'white',
        cursor: 'pointer',
        ...style,
      }}
      onClick={action}
    >
      {label}
      {backIcon}
    </button>
  );
};

export default ButtonPrimary;
