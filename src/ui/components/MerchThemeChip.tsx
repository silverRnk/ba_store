import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    font-size:1.125rem;
    line-height:45px;
    text-align:center;
    text-decoration:underline;
    font-weight:bold;
    height:45px;
    padding: 0 15px;
    background-color:white;
    border-radius:50px;
    cursor:pointer;

    box-shadow:0 0 5px gray;

    &:hover{
        filter:brightness(0.7)
    }

`

const Link = styled.a``

const MerchThemeChip = ({title, link}:{title:string, link:string}) => {
  return (
    <Container>
        <Link href={link}>
            {title}
        </Link>
    </Container>
  )
}

export default MerchThemeChip