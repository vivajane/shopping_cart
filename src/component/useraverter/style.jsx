import styled from "styled-components" ;
export const AverterContainer = styled.div`
display : flex;
align-items: flex-start;

`

export const AverterImage = styled.aside`
width:44px;
height:44px;
flex-shrink: 0;
margin-right: bottom;
background-size: cover;
background-position: center;
border-radius:50%
background-image: ${props => `url(${props.img})`}
`

export const AverterText = styled.p`
font-size:16px;
color: var(--color-six);


`