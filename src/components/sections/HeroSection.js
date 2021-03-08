import React from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import {H1, MediumText} from '../styles/TextStyles'

function HeroSection() {
    return (
        <Wrapper>
            <ContentWrapper>
                <TextWrapper>
                    <Title>Design <br />
                    and code React apps </Title>
                    <Description>
                        Welcome to your new Gatsby site.
                    </Description>
                </TextWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

export default HeroSection


const Wrapper = styled.div`
    background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%);
`

const ContentWrapper = styled.div`
max-width: 1234px;
margin: 0 auto;
padding: 200px 30px;
`

const TextWrapper = styled.div`
max-width: 360px;
display: grid;
gap: 30px
`

const Title = styled(H1)`
    color: ${themes.dark.text1};
`

const Description = styled(MediumText)``
