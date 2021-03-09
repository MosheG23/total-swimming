import React from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import { useDispatch, useSelector } from "react-redux"

import styles from "../../../styles/SignupForm.module.css"

// שדה חובה
const required = value => value ? undefined : 'נדרש למלא'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
      <Form.Control {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
  </Form.Group>
)

const Signup = () => {

  const UserDetails = () => {
    return (
      <div>
      <h3>פרטי משתמש</h3>
        <h6>שם משתמש</h6>
        <Field name="username" component={renderField} validate={required} />
        <h6>אימייל</h6>
        <Field name="email" component={renderField} validate={required} />
        <h6>סיסמה</h6>
        <Field name="password" type="password" component={renderField} validate={required} />
        <h6>אימות סיסמה</h6>
        <Field name="passwordConfirm" type="password" component={renderField} validate={required} />
      </div>
    )
  }

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center " 
        style={{ minHeight: '100vh' }}>
            <Form className={styles.form}>
              {UserDetails()}
            </Form>
        </Container>
    )
}

export default reduxForm({
  form: 'SignupForm', // a unique identifier for this form
  // validate
})(Signup)