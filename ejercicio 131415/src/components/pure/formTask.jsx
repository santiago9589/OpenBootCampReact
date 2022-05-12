import React from "react";
import { STATUS } from "../../models/levels.enum";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Task } from "../../models/models";
import propTypes from "prop-types";

const FormTask = ({ createTask }) => {

    const TaskSchema = Yup.object().shape({

        name: Yup.string()
            .min(6, "to short")
            .max(12, "to long")
            .required(),
        description: Yup.string()
            .min(6, "to short")
            .max(12, "to long")
            .required(),
        level: Yup.string()
            .required(),

    })

    const initialTask = {
        name: "",
        description: "",
        level: STATUS.NORMAL,
        isCompleted: false
    }

    const addTask = (task) => {
       createTask(task)

    }
    
    return (
        <Formik
            initialValues={initialTask}
            validationSchema={TaskSchema}
            onSubmit={(values) => {

                addTask(values)
               
            }}
        >
            {({ errors, touched}) => (
                <Form>
                    
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <Field type="text" className="form-control" id="name" placeholder="name" name="name" />
                        {
                            errors.name && touched.name && (

                                <ErrorMessage name="name" component='div'></ErrorMessage>
                            )
                        }

                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <Field type="text" className="form-control" id="description" placeholder="description" name="description" />
                        {
                            errors.description && touched.description && (

                                <ErrorMessage name="description" component='div'></ErrorMessage>
                            )
                        }
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Select Status</label>
                        <select className="form-select" aria-label="Default select example">
                            <option value="normal" name="normal" >Normal</option>
                            <option value="urgent"  name="urgent">Urgent</option>
                            <option value="blocking"  name="blocking">Blocking</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                    </div>
                </Form>

            )
            }
        </Formik >
    )

}

FormTask.propTypes = {
    task: propTypes.instanceOf(Task),
    createTask: propTypes.func,
}


export default FormTask;