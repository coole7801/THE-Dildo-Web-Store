import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
`;

export const HeroBg = styled.div`
    position: relative;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    backround: black;
`;

export const Overlay = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;



export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24pxl;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: white;
    font-size: 48px;
    text-align: center; 
`;

export const HeroP = styled.p`
    margin-top:  24px;
    color: white;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;