import React from 'react';
import './styles.css';
import Input from '../Input';
import ButtonPrimary from '../Buttons/ButtonPrimary';

const CourseDetailsCard = ({
  title,
  addCourseAction,
  submitAction,
  backButtonAction,
}) => {
  return (
    <div className="course-details-card">
      <h3>Course </h3>
      <h1>{title}</h1>
      <div
        style={{
          width: '100%',
        }}
      >
        <Input
          label={'Course Level *'}
          isImportant={true}
          backIcon={
            <>
              <i
                className="fa-solid fa-chevron-down"
                style={{
                  marginLeft: '5px',
                }}
              ></i>
            </>
          }
        />
        <Input label={'Course Name *'} isImportant={true} />
        <Input label={'Expected Skills *'} isImportant={true} />
        <Input label={'Preffered Language *'} isImportant={true} />
        <Input
          label={'Why do you want to join us? *'}
          textarea
          isImportant={true}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              height: '30px',
              width: '30px',
              borderRadius: '50%',
              background: 'var(--gray)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={backButtonAction}
          >
            <i
              className="fa-solid fa-chevron-left"
              style={{
                color: 'white',
              }}
            ></i>
          </div>
          <div style={{ width: '40%' }}>
            <ButtonPrimary
              label={'Add Course'}
              action={addCourseAction}
              backIcon={
                <>
                  <i
                    className="fa-solid fa-circle-plus"
                    style={{
                      marginLeft: '5px',
                      color: 'white',
                    }}
                  ></i>
                </>
              }
            />
          </div>
          <div style={{ width: '40%' }}>
            <ButtonPrimary label={'Submit'} action={submitAction} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsCard;
