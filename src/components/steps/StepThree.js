import React from 'react'
import { StepTitle, Label, Input, Next, Previous, Buttons, CreditCard, Field } from '../../styles/Form.styled'

function StepThree({setData, data, nextStep, prevStep}) {

    // Payment method

    return (
        <div>
            <StepTitle>Credit card details</StepTitle>
            <Label>Name</Label>
            <Input type="text" onChange={(e) => setData({...data, card: {...data.card, cardName: e.target.value}})} value={data.card.cardName}/>
            <Label>Credit card number</Label>
            <Input type="text" onChange={(e) => setData({...data, card: {...data.card, cardNumber: e.target.value}})} value={data.card.cardNumber}/>
            <Label>Expiry Date</Label>
            <CreditCard>
                <Field type="text" placeholder="MM" onChange={(e) => setData({...data, card: {...data.card, expiracyMonth: e.target.value}})} value={data.card.expiracyMonth}/>
                <span>/</span>
                <Field type="text" placeholder="YY" onChange={(e) => setData({...data, card: {...data.card, expiracyYear: e.target.value}})} value={data.card.expiracyYear}/>
            </CreditCard>
            <Label>CVC</Label>
            <Input type="text" onChange={(e) => setData({...data, card: {...data.card, cvc: e.target.value}})} value={data.card.cvc}/>
            <Buttons>
                <Previous onClick={prevStep}>Previous</Previous>
                <Next onClick={nextStep}>Send</Next>
            </Buttons>
        </div>
    )
}

export default StepThree
