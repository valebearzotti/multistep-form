import React from 'react'
import { StepTitle, Label, Input, Next, Previous, Buttons } from '../../styles/Form.styled'

function StepThree({setData, data, nextStep, prevStep}) {

    // Payment method

    return (
        <div>
            <StepTitle>Credit card details</StepTitle>
            <Label>Credit card number</Label>
            <Input type="text" onChange={(e) => setData({...data, address: e.target.value})}/>
            <Label>Expiry Date</Label>
            <Input type="text" placeholder="MM" onChange={(e) => setData({...data, month: e.target.value})}/>
            <Input type="text" placeholder="YY" onChange={(e) => setData({...data, year: e.target.value})}/>
            <Label>CVC</Label>
            <Input type="text" onChange={(e) => setData({...data, zip: e.target.value})}/>
            <Buttons>
                <Previous onClick={prevStep}>Previous</Previous>
                <Next onClick={nextStep}>Send</Next>
            </Buttons>
        </div>
    )
}

export default StepThree
