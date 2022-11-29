import React from 'react'
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, overlay } from './HeroElements'

const HeroSection = () => {
  return (
    <overlay>
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
    </HeroContainer>
    </overlay>
  )
}

export default HeroSection
