import React from 'react'
import MerchThemeChip from './MerchThemeChip'
import { styled } from 'styled-components'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Container = styled.div`
    width:100%;
    margin: 0 auto;
    display: flex;
    gap:15px;
    align-items:center;
    justify-content:space-between;

    @media only screen and (min-width:720px){
        width: 75%;
    }
`

const LeftButton = styled.button``

const CenterWrapper = styled.div`
    flex: 1;
    display:flex;
    gap: 16px;
    padding:4px;
    align-items:center;
    overflow:hidden;`

const RightButton = styled.div``

const MerchThemes = () => {
    return (
        <Container>
            <LeftButton> <ChevronLeftIcon/></LeftButton>
            <CenterWrapper>
                <MerchThemeChip title='2nd Year Anniversary' link='' />
                <MerchThemeChip title='Mika Release' link='' />
            </CenterWrapper>
            <RightButton><ChevronRightIcon/></RightButton>
        </Container>
    )
}

export default MerchThemes