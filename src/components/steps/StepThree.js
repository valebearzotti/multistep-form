import React from 'react'
import { StepTitle, Label, Input, Next, Previous, Buttons, CardInformation, Field, Fields, Expiracy } from '../../styles/Form.styled'
import CreditCard from '../CreditCard'

function StepThree({setData, data, nextStep, prevStep}) {

    // Payment method

    return (
        <div>
            <StepTitle>Credit card details</StepTitle>
            <CreditCard data={data}></CreditCard>
            <Label>Name</Label>
            <Input type="text" onChange={(e) => setData({...data, card: {...data.card, cardName: e.target.value}})} value={data.card.cardName}/>
            <Label>Credit card number</Label>
            <Input type="text" onChange={(e) => setData({...data, card: {...data.card, cardNumber: e.target.value}})} value={data.card.cardNumber}/>
            <Fields>
                <CardInformation>
                    <Label>Expiry Date</Label>
                    <Expiracy>
                            <Field type="text" placeholder="MM" onChange={(e) => setData({...data, card: {...data.card, expiracyMonth: e.target.value}})} value={data.card.expiracyMonth}/>
                            <span>/</span>
                            <Field type="text" placeholder="YY" onChange={(e) => setData({...data, card: {...data.card, expiracyYear: e.target.value}})} value={data.card.expiracyYear}/>
                    </Expiracy>
                </CardInformation>
                <CardInformation>
                    <Label>CVC</Label>
                    <Field type="number" onChange={(e) => setData({...data, card: {...data.card, cvc: e.target.value}})} value={data.card.cvc}/>
                </CardInformation>
            </Fields>
            <Buttons>
                <Previous onClick={prevStep}>Previous</Previous>
                <Next onClick={nextStep}>Send</Next>
            </Buttons>
        </div>
    )
}

export default StepThree
