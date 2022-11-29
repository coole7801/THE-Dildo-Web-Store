import React from 'react'
import Image from '../../images/image2.jpg';
import { HeroContainer, HeroBg, ImageBg } from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Image} type='image/jpg' />
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
