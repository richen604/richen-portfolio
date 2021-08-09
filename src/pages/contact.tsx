import React, { useState } from 'react';

import { Formik } from 'formik';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { MDBContainer, MDBInput, MDBTypography } from 'mdb-react-ui-kit';
import SEO from '../components/Seo';
import PageHeader from '../components/PageHeader';
import Socials from '../components/Socials';
import { postContact } from '../services/contact';
import {
  TButtonPrimary,
  TTextPrimary,
  TOutboundLinkText,
  TPageMain,
} from '../components/ThemedComponents';
import PageMain from '../components/PageMain';
import { THEME } from '../styled.d';

const SPageMain = styled(PageMain)`
  height: 1200px;
`;

const SContactHeaderContainer = styled(MDBContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SContactHeaderH2 = styled(TTextPrimary)`
  text-align: left;
  margin: 5px 13px;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 700;
`;

const SContactHeaderText = styled(TTextPrimary)`
  margin: 15px 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
`;

const SContactContainer = styled(TPageMain)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 345px;
`;

const SContactH3 = styled(TTextPrimary)`
  font-family: 'Roboto', sans-serif;
  margin-top: 40px;
  text-align: center;
`;

const SForm = styled.form`
  width: 80%;
  margin-top: 20px;
`;

const SInputContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  label {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return ` color: ${props.theme.palette.common.white} !important;`;
        case THEME.DARK:
          return ` color: ${props.theme.palette.common.textMuted} !important;`;
        case THEME.LIGHT:
        default:
          return `color: ${props.theme.palette.common.black} !important;`;
      }
    }}
  }
  :focus-within .form-outline .form-control ~ .form-notch div {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `border-color: ${props.theme.palette.common.white} !important;`;
        case THEME.DARK:
          return `border-color: ${props.theme.palette.primary.darker} !important;`;
        case THEME.LIGHT:
        default:
          return `border-color: ${props.theme.palette.primary.darker} !important;`;
      }
    }}
  }
`;

const SContactInput = styled(MDBInput)`
  width: 100%;
`;

const SContactInput1 = styled.div`
  width: 48%;
  height: 80px;
  display: flex;
  flex-direction: column;
`;

const SContactInputWrapperSubject = styled.div<ThemeProps<DefaultTheme>>`
  min-height: 100px;
  label {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return ` color: ${props.theme.palette.common.white} !important;`;
        case THEME.DARK:
          return ` color: ${props.theme.palette.common.textMuted} !important;`;
        case THEME.LIGHT:
        default:
          return `color: ${props.theme.palette.common.black} !important;`;
      }
    }}
  }
  :focus-within .form-outline .form-control ~ .form-notch div {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `border-color: ${props.theme.palette.common.white} !important;`;
        case THEME.DARK:
          return `border-color: ${props.theme.palette.primary.darker} !important;`;
        case THEME.LIGHT:
        default:
          return `border-color: ${props.theme.palette.primary.darker} !important;`;
      }
    }}
  }
`;

const SContactInputWrapperMessage = styled.div<ThemeProps<DefaultTheme>>`
  min-height: 200px;
  label {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return ` color: ${props.theme.palette.common.white} !important;`;
        case THEME.DARK:
          return ` color: ${props.theme.palette.common.textMuted} !important;`;
        case THEME.LIGHT:
        default:
          return `color: ${props.theme.palette.common.black} !important;`;
      }
    }}
  }
  :focus-within .form-outline .form-control ~ .form-notch div {
    ${props => {
      switch (props.theme.name) {
        case THEME.MONOCHROMATIC:
          return `border-color: ${props.theme.palette.common.white} !important;`;
        case THEME.DARK:
          return `border-color: ${props.theme.palette.primary.darker} !important;`;
        case THEME.LIGHT:
        default:
          return `border-color: ${props.theme.palette.primary.darker} !important;`;
      }
    }}
  }
`;

const SContactInputSubject = styled(SContactInput)`
  height: 70px;
`;

const SContactInputMessage = styled(SContactInput)`
  margin-bottom: 10px;
  margin-top: 30px;
  height: 150px;
`;

const SContactButton = styled(TButtonPrimary)`
  min-width: 98.2%;
`;

const SContactError = styled(MDBTypography)`
  margin: 10px 4px;
  color: #ff4066d5;
  font-size: smaller;
`;

interface FormErrors {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSuccess = () => {
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
    }, 1500);
  };
  return (
    <>
      <SEO title="Contact Me" />
      <PageHeader>
        <SContactHeaderContainer>
          <SContactHeaderH2 variant="h2">Contact Me</SContactHeaderH2>
          <SContactHeaderText variant="p">
            Interested in hiring me for your project or just want to say hi? You
            can fill in the contact form below or send me an email to{' '}
            <TOutboundLinkText
              eventLabel="outbound-email"
              to="mailto:richard@richen.dev"
            >
              richard@richen.dev
            </TOutboundLinkText>{' '}
            <br /> <br />
            Want to get connected? Follow me on the social channels below.
          </SContactHeaderText>
          <Socials />
        </SContactHeaderContainer>
      </PageHeader>
      <SPageMain>
        <SContactContainer>
          <SContactH3 variant="h3">Get In Touch</SContactH3>
          <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            validate={values => {
              const errors: FormErrors = {
                name: '',
                email: '',
                subject: '',
                message: '',
              };
              if (!values.name) {
                errors.name = 'A Name is Required';
              }
              if (!values.subject) {
                errors.subject = 'A Subject is Required';
              }
              if (!values.message) {
                errors.message = 'A Message is Required';
              }
              if (!values.email) {
                errors.email = 'An Email is Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              await postContact(values);
              handleFormSuccess();
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <SForm onSubmit={handleSubmit}>
                <SInputContainer1>
                  <SContactInput1>
                    <SContactInput
                      label="Name"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <SContactError className="contact-error">
                        {errors.name}
                      </SContactError>
                    ) : (
                      <SContactError className="contact-error"> </SContactError>
                    )}
                  </SContactInput1>
                  <SContactInput1>
                    <SContactInput
                      label="Email"
                      labelClass="form-label"
                      wrapperClass="input-group"
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <SContactError className="contact-error">
                        {errors.email}
                      </SContactError>
                    ) : (
                      <SContactError className="contact-error"> </SContactError>
                    )}
                  </SContactInput1>
                </SInputContainer1>
                <SContactInputWrapperSubject>
                  <SContactInputSubject
                    label="Enter your subject"
                    type="text"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.subject && touched.subject ? (
                    <SContactError className="contact-error">
                      {errors.subject}
                    </SContactError>
                  ) : (
                    <SContactError className="contact-error"> </SContactError>
                  )}
                </SContactInputWrapperSubject>
                <SContactInputWrapperMessage>
                  <SContactInputMessage
                    textarea
                    rows={6}
                    label="Enter your message"
                    type="text"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.message && touched.message ? (
                    <SContactError className="contact-error">
                      {errors.message}
                    </SContactError>
                  ) : (
                    <SContactError className="contact-error"> </SContactError>
                  )}
                </SContactInputWrapperMessage>

                <SContactButton type="submit" disabled={isSubmitting}>
                  Send Now
                </SContactButton>
                {formSuccess ? (
                  <div
                    style={{
                      color: 'green',
                      paddingLeft: '10px',
                      textAlign: 'center',
                    }}
                  >
                    Thank You! Your message will be replied to shortly!
                  </div>
                ) : (
                  <div
                    style={{
                      color: 'green',
                      padding: '14px',
                    }}
                  />
                )}
              </SForm>
            )}
          </Formik>
        </SContactContainer>
      </SPageMain>
    </>
  );
};

export default Contact;
