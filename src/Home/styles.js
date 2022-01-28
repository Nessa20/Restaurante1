import styled from 'styled-components';

import Slider from 'react-slick';

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
`;

export const Container = styled.aside`
background - color: ${ (props) => props.theme.colors.backgraound };
width: 360px;
height: 100vh;
Overflow-y: auto;

`;

export const Search = styled.section`
display: flex;
backgraound-color: #ffffff;
flex-direction: column;
justify-content: center;
padding: 16px;
`;

export const Logo = styled.img`
margin-bottom: 15px;
`;

export const Map = styled.div`
background-color: red;
width: 500px;
`;

export const Carousel = styled(Slider)`
.slick-slide {
    margin-right: 30px;
}
`;

export const CarouselTitle = styled.h1`
font-family: ${( props) => props.theme.fonts.regular};
color: ${(props) => props.theme.colors.text};
font-size: 24px;
font-height: bold;
line-height: 29px;
margin: 16px 0;
`;

export const ModalTitle = styled.p`
margin-botton: 10px;
letter-spacing: 0.11px;
font-family: ${(props) => props.theme.fonts.regular};
color: ${(props) => props.theme.colors.text};
text-transform: none;
line-height: 29px;
font-size: 24px;
font-weight: bold;
`;

export const ModalContent = styled.p`
margin-botton: 10px;
font-family: ${(props) => props.theme.fonts.regular};
color: ${(props) => props.theme.colors.text};
font-weight: normal;
line-height: 19px;
font-size: 16px
`;


