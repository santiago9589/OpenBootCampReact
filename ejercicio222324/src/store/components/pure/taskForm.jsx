import React, { useRef } from "react"


const FormTask = ({ submit }) => {

    const refInput = useRef()
    return (
        <div>
            <h3>Your task</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    submit(refInput.current.value)
                    refInput.current.value = ""
                }}>
                <input type="text" ref={refInput} />
                <button type="submit">CREATE</button>
            </form>

        </div>

    )
}

export default FormTask;