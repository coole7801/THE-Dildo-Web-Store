import styled from "styled-components";

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