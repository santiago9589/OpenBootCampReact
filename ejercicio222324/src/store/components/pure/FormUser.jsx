import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik"
import * as yup from "yup"


const FormUser = ({ loged, onLogin }) => {

    const valideSchema = yup.object().shape(
        {
            password: yup.string()
                .required("is required"),
            email: yup.string()
                .email("invalid email")
                .required("is required"),

        }
    )

    const loginInitial = {
        password: "",
        email: ""
    }

    return (
        <Formik
            initialValues={loginInitial}
            validationSchema={valideSchema}
            onSubmit={async (values) => {
                onLogin(values.password, values.email)
            }}>
            {({ touched, errors, isSubmitting }) => (
                <Form>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">email</label>
                        <Field type="text" className="form-control" id="email" placeholder="email" name="email" />
                        {
                            errors.email && touched.email && (

                                <ErrorMessage name="email" component='div'></ErrorMessage>
                            )
                        }
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <Field type="text" className="form-control" id="password" placeholder="password" name="password" />
                        {
                            errors.password && touched.password && (

                                <ErrorMessage name="password" component='div'></ErrorMessage>
                            )
                        }

                    </div>



                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                        {isSubmitting ? (<p>Espere</p>) : null}
                    </div>
                </Form>
            )}

        </Formik>
    )
}


export default FormUser;