import React from 'react'
import { styled } from 'styled-components'
import Magnify from '../icons/Magnify'
import { mobile, tablet } from '../../responsive'

const Container = styled.div<{isVisible:boolean}>`
    width:100%;
    display:flex;
    background-color:white;
    border: 1px solid gray;
    border-radius: 20px;
    
    @media only screen and (max-width:720px){
        display:${props => props.isVisible? "flex": "none"};
    }
    `
const Input = styled.input`
    all:unset;
    width: 100%;
    padding: 12px 20px;
    &:focus {
        border:none
    }
`

const IconWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 60px;
    color:gray;
    `



const Searchbox = (props:{isVisible: boolean}) => {
  return (
    <Container isVisible={props.isVisible}>
        <Input type='text' placeholder='Search for item'/>
        <IconWrapper>
            <Magnify/>
        </IconWrapper>
    </Container>
  )
}

export default Searchbox