import styled from 'styled-components';
import Text from '../Text';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  :hover {
    background-color: ${(props)  => props.theme.colors.backgraound};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
font-family: ${(props) => props.theme.fonts.regular};
color: ${(props) => props.theme.color.text};
font-size: 24px;
font-weight: bold;
line-height: 29px;
margin-botton: 10px;
`;

export const Address = styled.span`
font-family: ${(props) => props.theme.fonts.regular};
color: ${(props) => props.theme.color.text};
font-size: 24px;
line-height: 29px;
margin-botton: 10px;
`;

export const RestaurantPhoto = styled.img`
  border-radius: 6px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  display: ${({ imageLoaded }) => (imageLoaded ? 'block' : 'none')};
`;

export const Content = styled(Text)`
  margin-top: 5px;
`;
