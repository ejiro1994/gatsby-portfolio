import React from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import {H1, MediumText} from '../styles/TextStyles'
import SoundCloud from './SoundCloud'
import ejiro from '../../images/ejiro.jpg'

function HeroSection() {
    return (
      <Wrapper>
        <ProfilePic
          src={ejiro}
          alt="logo"
        />
        <ContentWrapper>
          <TextWrapper>
            <Title>
              I create <span>thoughtful</span> musical experiences for your next
              project
            </Title>
            <GetInTouch
              href="mailto:contact@ejirolennox.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch 
            </GetInTouch>

            <Description>💫 Selected work</Description>
            <SoundCloud />
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    )
}

export default HeroSection


const Wrapper = styled.div`
    /* background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%); */
    background: #fff;

`

const ContentWrapper = styled.div`
max-width: 1234px;
margin: 0 auto;
padding: 50px 30px;
`

const TextWrapper = styled.div`
max-width: 360px;
display: grid;
gap: 30px
`

const Title = styled(H1)`
  color: ${themes.light.text1};
  font-size: 30px;
  line-height: 130%;

  span {
    color: #a18966;
  }
`

const Description = styled(MediumText)`
`

const GetInTouch = styled.a`
  color: #131313;
  /* text-decoration: underline; */
  padding: 25px;
  background-color: #a18966;
  display: inline-block;
  /* border-radius: 100px; */
  color: #fff;
  width: 200px;
  text-align: center;
  `



const ProfilePic = styled.img`
  width: 100%;

`