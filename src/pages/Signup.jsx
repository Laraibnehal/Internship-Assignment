import { useEffect, useState } from 'react';
import { Navbar } from '../components';
import { PersonalDetailsCard, CourseDetailsCard } from '../components/Cards';
import { FormNavigationButton } from '../components/Buttons';

const Signup = () => {
  const forms = [
    'Personal Details',
    'Course One',
    'Course Two',
    'Course Three',
    'Course Four',
  ];

  const [showPersonalDetailsCard, setShowPersonalDetailsCard] = useState(true);
  const [courseCardTitle, setCourseCardTitle] = useState('One');
  const [formCompletedTill, setFormCompletedTill] = useState(0);

  useEffect(() => {
    setCourseCardTitle(forms[formCompletedTill]);
    if (formCompletedTill > 0) {
      setShowPersonalDetailsCard(false);
    } else setShowPersonalDetailsCard(true);
  }, [formCompletedTill]);

  return (
    <div className="signup-page">
      <div className="circle-bg" />
      <div className="circle-sm" />
      <Navbar />
      <div className="form-container">
        <div
          style={{
            width: '400px',
            height: '80vh',
            marginTop: '50px',
            zIndex: 2,
            position: 'relative',
          }}
        >
          {forms.map((title, idx) => {
            return (
              <div
                style={{
                  borderRight: `4px solid ${
                    idx < formCompletedTill ? 'var(--pink)' : 'gray'
                  }`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  height: 100 / forms.length + '%',
                }}
                key={idx}
              >
                <FormNavigationButton
                  title={title}
                  active={idx === formCompletedTill}
                  style={{
                    transform: 'translateY(-50%)',
                    opacity: `${idx <= formCompletedTill ? 1 : 0}`,
                  }}
                />
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'var(--pink)',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '-15px',
                    marginRight: '-15px',
                    opacity: `${idx <= formCompletedTill ? 1 : 0}`,
                  }}
                >
                  <p style={{ color: 'white' }}>
                    {idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {showPersonalDetailsCard ? (
          <PersonalDetailsCard
            buttonAction={() => {
              setFormCompletedTill(formCompletedTill + 1);
            }}
          />
        ) : (
          <CourseDetailsCard
            title={courseCardTitle}
            addCourseAction={() => {
              if (formCompletedTill === forms.length - 1) return;
              setFormCompletedTill(formCompletedTill + 1);
            }}
            submitAction={() => {
              window.location.reload();
            }}
            backButtonAction={() => {
              setFormCompletedTill(formCompletedTill - 1);
            }}
            addCourseHidden={formCompletedTill === forms.length - 1}
          />
        )}
      </div>
    </div>
  );
};

export default Signup;