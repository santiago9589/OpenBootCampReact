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
        let newTask = new Task(task)
        createTask(newTask)
    }

    return (
        <Formik
            initialValues={initialTask}
            validationSchema={TaskSchema}
            onSubmit={(values) => {
                addTask(values)
            }}
        >
            {({ errors, touched, values }) => (
                <Form>

                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <Field type="text" class="form-control" id="name" placeholder="name" name="name" />
                        {
                            errors.name && touched.name && (

                                <ErrorMessage name="name" component='div'></ErrorMessage>
                            )
                        }

                    </div>

                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <Field type="text" class="form-control" id="description" placeholder="description" name="description" />
                        {
                            errors.description && touched.description && (

                                <ErrorMessage name="description" component='div'></ErrorMessage>
                            )
                        }
                    </div>

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Select Status</label>
                        <select class="form-select" aria-label="Default select example">
                            <option value="normal">Normal</option>
                            <option value="urgent">Urgent</option>
                            <option value="blocking">Blocking</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary btn-lg">Crear Tarea</button>
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