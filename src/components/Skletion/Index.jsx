import React from 'react';
import styled, { Keyframes } from 'styled-componentes';

const KeyFrameLoading = Keyframes`
0% {
    opacity: 0,5;
}
100% {
    opacity: 1;
}
`;

const LoadingSkeleton = styled.div`
background-color: gray;
border-radius: 6px;
margin-botton: 10px;
min-width: ${(props) => props.width};
height: ${(props) => props.height};
animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

export default ({ width, height }) => <LoadingSkeleton width={width} height={height}/>