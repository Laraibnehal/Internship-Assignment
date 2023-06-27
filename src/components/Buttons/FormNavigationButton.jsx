import React from 'react';

const FormNavigationButton = ({ title, active = true, navigation, style }) => {
  return (
    <button
      style={{
        padding: '20px',
        borderRadius: '10px',
        border: active ? '2px solid var(--pink)' : '2px solid gray',
        color: active ? 'var(--pink)' : 'var(--gray)',
        background: 'white',
        width: '250px',

        ...style,
      }}
    >
      <h3 style={{ color: active ? 'var(--pink)' : 'var(--gray)' }}>{title}</h3>
    </button>
  );
};

export default FormNavigationButton;
