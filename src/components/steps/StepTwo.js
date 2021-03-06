import React from 'react'
import { StepTitle, Label, Input, Next, Previous, Buttons } from '../../styles/Form.styled'

function StepTwo({setData, data, nextStep, prevStep}) {

    // Shipping method

    return (
        <div>
            <StepTitle>Shipping information</StepTitle>
            <Label>Address</Label>
            <Input type="text" onChange={(e) => setData({...data, address: e.target.value})} value={data.address}/>
            <Label>City</Label>
            <Input type="text" onChange={(e) => setData({...data, city: e.target.value})} value={data.city}/>
            <Label>Zip Code</Label>
            <Input type="text" onChange={(e) => setData({...data, zip: e.target.value})} value={data.zip}/>
            <Buttons>
                <Previous onClick={prevStep}>Previous</Previous>
                <Next onClick={nextStep}>Next</Next>
            </Buttons>
        </div>
    )
}

export default StepTwo


