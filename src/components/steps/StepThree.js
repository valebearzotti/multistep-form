import React from 'react'
import { StepTitle, Label, Input, Next, Previous, Buttons } from '../../styles/Form.styled'

function StepThree({setData, data, nextStep, prevStep}) {

    // Payment method

    return (
        <div>
            <Buttons>
                <Previous onClick={prevStep}>Previous</Previous>
                <Next onClick={nextStep}>Next</Next>
            </Buttons>
        </div>
    )
}

export default StepThree
