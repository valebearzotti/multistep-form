import React from 'react'
import { StepTitle, Label, Input, Next, Previous, Buttons, CreditCard, Field } from '../../styles/Form.styled'

function StepThree({setData, data, nextStep, prevStep}) {

    // Payment method

    return (
        <div>
            <StepTitle>Credit card details</StepTitle>
            <Label>Name</Label>
            <Input type="text" onChange={(e) => setData({...data, card: {...data.card, cardName: e.target.value}})}/>
            <Label>Credit card number</Label>
            <Input type="text" onChange={(e) => setData({...data, card: {...data.card, cardNumber: e.target.value}})}/>
            <Label>Expiry Date</Label>
            <CreditCard>
                <Field type="text" placeholder="MM" onChange={(e) => setData({...data, card: {...data.card, expiracyMonth: e.target.value}})}/>
                <span>/</span>
                <Field type="text" placeholder="YY" onChange={(e) => setData({...data, card: {...data.card, expiracyYear: e.target.value}})}/>
            </CreditCard>
            <Label>CVC</Label>
            <Input type="text" onChange={(e) => setData({...data, card: {...data.card, cvc: e.target.value}})}/>
            <Buttons>
                <Previous onClick={prevStep}>Previous</Previous>
                <Next onClick={nextStep}>Send</Next>
            </Buttons>
        </div>
    )
}

export default StepThree
