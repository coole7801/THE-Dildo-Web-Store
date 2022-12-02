import React from 'react'
import Video from '../../videos/video2.mp4';
import {useState} from 'react'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, Overlay, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
  const [ hover, setHover ] = useState(false)

  const onHover = () => {
      setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
      <Overlay />
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>The Best Dildo Store Around</HeroH1>
        <HeroP>Our pattened custom build feataure combined with our signature design, guarentees
          a high quality dildo with very purchase.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
            Get started { hover ? <ArrowForward /> : <ArrowRight /> }
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection