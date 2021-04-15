import React, { useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PageHeader from "../components/PageHeader"
import { Form, Input, Button } from "reactstrap"
import { Formik } from "formik"
import "./contact.css"
import Socials from "../components/Socials"
import { postContact } from "../services/contact"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Contact = () => {
  const [formSuccess, setFormSuccess] = useState(false)

  const handleFormSuccess = () => {
    setFormSuccess(true)
    setTimeout(() => {
      setFormSuccess(false)
    }, 1500)
  }
  return (
    <Layout>
      <SEO title="Contact Me" />
      <PageHeader>
        <div id="contact-header-intro">
          <h2 id="contact-header-title">Contact Me</h2>
          <p id="contact-header-intro-text">
            Interested in hiring me for your project or just want to say hi? You
            can fill in the contact form below or send me an email to{" "}
            <OutboundLink
              className="index-text-link"
              href="mailto:richard@richen.dev"
            >
              richard@richen.dev
            </OutboundLink>{" "}
            <br /> <br />
            Want to get connected? Follow me on the social channels below.
          </p>
          <Socials id="" colorProp="dark" />
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
          onSubmit={async (values, { setSubmitting }) => {
            await postContact(values)
            handleFormSuccess()
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
            <Form id="contact-form" onSubmit={handleSubmit}>
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

              <Button
                id="contact-form-button"
                type="submit"
                disabled={isSubmitting}
              >
                Send Now
              </Button>
              {formSuccess ? (
                <div
                  style={{
                    color: "green",
                    paddingLeft: "10px",
                    textAlign: "center",
                  }}
                >
                  Thank You! Your message will be replied to shortly!
                </div>
              ) : (
                <div
                  style={{
                    color: "green",
                    padding: "14px",
                  }}
                />
              )}
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

export default Contact
