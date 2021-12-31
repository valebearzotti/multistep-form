import styled, { createGlobalStyle } from "styled-components";
import './fonts.css'

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: #161623;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 350px;
`

export const Title = styled.div`
    color: #13E8AB;
    font-size: 32px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const StepTitle = styled.div`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
`

export const Label = styled.div`
    margin-top: 30px;
    color: #dadada;
`

export const Input = styled.input`
    padding: 14px 16px 14px ${props => props.icon ? '50px' : '16px'};
    margin-top: 10px;
    border-radius: 10px;
    outline: none;
    display: block;
    width: ${props => props.icon ? '280px' : '314px'};
    background-color: rgba(255, 255, 255, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.6);
    color: #fff;
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
    background-image: url(${props => props.icon ? props.icon : 'unset'});
    background-position: 10px center;
    background-repeat: no-repeat;
`

export const CardInformation = styled.div`
    display: flex;
    flex-direction: column;
    span{
        margin-left: 10px;
        margin-right: 10px;
        font-size: 30px;
        margin-top: auto;
        margin-bottom: 5px;
        color: rgba(255, 255, 255, 0.6);
    }
`

export const Field = styled.input`
    padding: 14px 16px;
    margin-top: 10px;
    border-radius: 10px;
    outline: none;
    width: 30px;
    background-color: rgba(255, 255, 255, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.6);
    color: #fff;
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
    ::placeholder{
        text-align: center;
    }
    ::-webkit-outer-spin-button, ::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
`

export const Expiracy = styled.div`
    display: flex;
`

export const Fields = styled.div`
    display: flex;
    justify-content: space-between;
`


export const Next = styled.div`
    display: block;
    margin-left: auto;
    padding: 14px 40px;
    border-radius: 8px;
    background-color: transparent;
    color: #13E8AB;
    border: 2px solid #13E8AB;
    margin-top: 30px;
    font-weight: bold;
    transition: all .3s ease-out;
    :hover{
        color: #161623;
        background-color: #13E8AB;
        transform: translate(0, -5px);
        cursor: pointer;
    }
`

export const Previous = styled.div`
    display: block;
    margin-right: auto;
    padding: 14px 30px;
    border-radius: 8px;
    background-color: transparent;
    color: #13E8AB;
    border: 2px solid #13E8AB;
    margin-top: 30px;
    font-weight: bold;
    transition: all .3s ease-out;
    :hover{
        color: #161623;
        background-color: #13E8AB;
        transform: translate(0, -5px);
        cursor: pointer;
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
`