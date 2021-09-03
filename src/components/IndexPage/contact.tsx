import React, { useState } from 'react';

import { Formik } from 'formik';
import PageHeader from 'components/pages/PageHeader';
import Socials from 'components/Socials/Socials';
import { postContact } from 'services/contact';
import { TFlexColumn, TOutboundLinkText } from 'components/ThemedComponents';
import FadeInViewDiv from 'components/FadeInViewDiv';
import { SPageMain } from '../pages/styles';
import {
  SContactHeaderContainer,
  SContactHeaderH2,
  SContactHeaderText,
  SContactContainer,
  SContactH3,
  SForm,
  SInputContainer1,
  SContactInput1,
  SContactInput,
  SContactError,
  SContactInputWrapperSubject,
  SContactInputSubject,
  SContactInputWrapperMessage,
  SContactInputMessage,
  SContactButton,
} from './styles';
import styled from 'styled-components';

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
      <PageHeader id="contact">
        <FadeInViewDiv>
          <SContactHeaderContainer>
            <SContactHeaderH2 variant="h2">Contact Me</SContactHeaderH2>
            <SContactHeaderText variant="p">
              Interested in hiring me for your project or just want to say hi?
              You can fill in the contact form below or send me an email to{' '}
              <TOutboundLinkText
                target="_blank"
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
        </FadeInViewDiv>
      </PageHeader>
      <SPageMain>
        <FadeInViewDiv>
          <SContactContainer>
            <SContactH3 variant="h3">Get In Touch</SContactH3>
            <Formik
              initialValues={{
                name: '',
                email: '',
                subject: '',
                message: '',
              }}
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
                        <SContactError className="contact-error">
                          {' '}
                        </SContactError>
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
                        <SContactError className="contact-error">
                          {' '}
                        </SContactError>
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
        </FadeInViewDiv>
      </SPageMain>
    </>
  );
};

export default Contact;
