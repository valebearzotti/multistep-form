import React from 'react'
import { StepTitle, Label, Input, Next, Previous, Buttons } from '../../styles/Form.styled'

function StepTwo({setData, data, nextStep, prevStep}) {

    // Shipping method

    return (
        <div>
            <Buttons>
                <Previous onClick={prevStep}>Previous</Previous>
                <Next onClick={nextStep}>Next</Next>
            </Buttons>
        </div>
    )
}

export default StepTwo


