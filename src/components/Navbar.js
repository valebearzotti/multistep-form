import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

function Navbar() {
    return (
        <Nav>
            <img src={logo} />
        </Nav>
    )
}

const Nav = styled.div`
    display: flex;
    border-bottom: 2px solid #fff;
    padding: 20px 100px;
    img{
        margin-right: auto;
    }
`


export default Navbar
