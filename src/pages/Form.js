import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import { GlobalStyle, Container, Title } from '../styles/Form.styled'
import StepOne from '../components/steps/StepOne'
import StepTwo from '../components/steps/StepTwo'
import StepThree from '../components/steps/StepThree'

function Form() {

    const [step, setStep] = useState(1)

    const [data, setData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        card: {
            cardName: '',
            cardNumber: '',
            expiracyMonth: '',
            expiracyYear: '',
            cvc: ''
        }
    })

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    const retrieveStep = (step) => {
        switch (step) {
            case 1:
                return <StepOne 
                        setData={setData}
                        data={data}
                        nextStep={nextStep}
                        />
            case 2:
                return <StepTwo 
                        setData={setData}
                        data={data}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        />
            case 3:
                return <StepThree 
                        setData={setData}
                        data={data}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        />    
        }
    }

    return (
        <div>
            <GlobalStyle />
            <Navbar />
            <Container>
                <Title>Step {step} of 3</Title>
                {retrieveStep(step)}
            </Container>
        </div>
    )
}

export default Form
