import React from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import {H1, MediumText} from '../styles/TextStyles'

function HeroSection() {
    return (
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <ProfilePic
              src="https://scontent-man2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/72652218_2459269224163979_4498830687733563289_n.jpg?tp=1&_nc_ht=scontent-man2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=GLtfodC7GZUAX_cTd53&oh=ad00e945a6face374957c96035900cad&oe=606FBF42"
              alt="logo"
            />

            <Title>I create thoughtful musical experiences for brands </Title>
            <GetInTouch
              href="https://www.instagram.com/lifeon_ej/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </GetInTouch>
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
`

const Description = styled(MediumText)`
/* border-bottom: 1px solid #131313; */
text-decoration: underline;
`

const GetInTouch = styled.a`
color: #131313;
text-decoration: underline;
`



const ProfilePic = styled.img`
width: 150px;
  clip: rect(10px, 20px, 30px, 40px);
`