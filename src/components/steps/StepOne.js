import React from 'react'
import { StepTitle, Label, Input, Next, Buttons } from '../../styles/Form.styled'
import user from '../../assets/user.svg'
import email from '../../assets/email.svg'
import phone from '../../assets/phone.svg'

function StepOne({setData, data, nextStep}) {

    // Customer information

    return (
        <div>
            <StepTitle>Customer information</StepTitle>
            <Label>Full Name</Label>
            <Input type="text" onChange={(e) => setData({...data, fullName: e.target.value})} icon={user}/>
            <Label>Email Address</Label>
            <Input type="text" onChange={(e) => setData({...data, email: e.target.value})} icon={email}/>
            <Label>Phone Number</Label>
            <Input type="text" onChange={(e) => setData({...data, phone: e.target.value})} icon={phone}/>
            <Buttons>
                <Next onClick={nextStep}>Next</Next>
            </Buttons>

        </div>
    )
}

export default StepOne
