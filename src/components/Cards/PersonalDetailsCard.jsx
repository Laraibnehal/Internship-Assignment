import React from 'react';
import './styles.css';
import Input from '../Input';
import ButtonPrimary from '../Buttons/ButtonPrimary';

const PersonalDetailsCard = ({ buttonAction }) => {
  return (
    <div className="personal-details-card">
      <h3>Personal </h3>
      <h1>Details</h1>
      <div
        style={{
          width: '100%',
        }}
      >
        <Input
          label={'Name *'}
          isImportant={true}
          backIcon={
            <>
              <i className="fa-regular fa-pen-to-square"></i>
            </>
          }
        />
        <Input
          label={'Mobile Number *'}
          isImportant={true}
          backIcon={
            <>
              <i className="fa-regular fa-pen-to-square"></i>
            </>
          }
          frontIcon={
            <div style={{ width: 'fit-content' }}>
              <p>
                +91{' '}
                <i
                  className="fa-solid fa-chevron-down"
                  style={{
                    marginLeft: '5px',
                  }}
                ></i>
              </p>
            </div>
          }
        />
        <Input label={'Email Id *'} isImportant={true} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Input
            label={'State *'}
            isImportant={true}
            style={{ width: '49%' }}
          />
          <Input
            label={'Country *'}
            isImportant={true}
            style={{ width: '49%' }}
          />
        </div>
      </div>

      <ButtonPrimary label={'Save & Next Step'} action={buttonAction} />
    </div>
  );
};

export default PersonalDetailsCard;
