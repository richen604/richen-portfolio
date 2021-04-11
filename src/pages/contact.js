import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PageHeader from "../components/PageHeader"
import { Form, Input, Button } from "reactstrap"
import { Formik } from "formik"
import "./contact.css"

function Contact() {
  return (
    <Layout>
      <SEO title="Contact Me" />
      <PageHeader>
        <div id="contact-header-intro">
          <h2>Contact Me</h2>
          <p>
            sifdjsdoijfds fsdf dsi fjsdf dsfoiusj sidfjoids jfdsfdsf sdiufd fds
            fsd fsdsfdsfds
          </p>
        </div>
      </PageHeader>
      <div id="contact-container">
        <h3 id="contact-container-heading">Get In Touch</h3>
        <Formik
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          validate={values => {
            const errors = {}
            if (!values.name) {
              errors.name = "A Name is Required"
            }
            if (!values.subject) {
              errors.subject = "A Subject is Required"
            }
            if (!values.message) {
              errors.message = "A Message is Required"
            }
            if (!values.email) {
              errors.email = "An Email is Required"
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address"
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
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
            <Form id="contact-form" onSubmit={handleSubmit} action="">
              <div id="contact-input-container-1">
                <div id="contact-input-name">
                  <Input
                    className="contact-input"
                    placeholder="Name"
                    type="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? (
                    <p className="contact-error">{errors.name}</p>
                  ) : (
                    <p className="contact-error"> </p>
                  )}
                </div>
                <div id="contact-input-email">
                  <Input
                    className="contact-input"
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="contact-error">{errors.email}</p>
                  ) : (
                    <p className="contact-error"> </p>
                  )}
                </div>
              </div>
              <div id="contact-input-subject">
                <Input
                  className="contact-input"
                  placeholder="Enter your subject"
                  type="subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.subject && touched.subject ? (
                  <p className="contact-error">{errors.subject}</p>
                ) : (
                  <p className="contact-error"> </p>
                )}
              </div>
              <div id="contact-input-message">
                <Input
                  className="contact-input"
                  placeholder="Enter your message"
                  type="textarea"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.message && touched.message ? (
                  <p className="contact-error">{errors.message}</p>
                ) : (
                  <p className="contact-error"> </p>
                )}
              </div>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

export default Contact
