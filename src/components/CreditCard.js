import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function CreditCard({data}) {

    // const [type, setType] = useState("");
    
    // criteria:
    // Visa: first digit 4 - up to 19 digits
    // MasterCard: first digit 5 or 2 - 16 digits
    // AMEX: first digit 3 - 15 digits

    return (
        <Container>
            <Type>{}</Type>
        </Container>
    )
}

const Container = styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 350px;
    height: 200px;
    margin-top: 30px;
`

const Type = styled.div`
    color: #000;
`

export default CreditCard
