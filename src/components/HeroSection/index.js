import React from 'react'
import Video from '../../videos/video2.mp4';
import { HeroContainer, HeroBg, VideoBg, Overlay } from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
      <Overlay />
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection