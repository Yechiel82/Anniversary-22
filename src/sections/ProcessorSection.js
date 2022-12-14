import React from 'react'
import styled, { keyframes } from 'styled-components'
import a15 from "../assets/Images/pasangan_berbahagia.jpeg"


const Section = styled.section`
width: 100vw;
height: 100vh;
position : relative;

display: flex;
justify-content: flex-start;
align-items: center;

background-color: var(--dark);
color: var(--white);
overflow: hidden;
`
const Title = styled.h1`
width: 100%;
text-align: center;
position: absolute;
bottom: 2rem;
left: 50%;
transform: translateX(-50%);
font-size: var(--fontBig);
font-family: var(--fontL);
z-index:1;

background-image: linear-gradient(90deg, var(--gradient));
background-clip : text;
-webkit-background-clip : text;
-webkit-text-fill-color : transparent;

@media screen and (max-width: 70em){
    font-size: var(--fontxxxl);
}
@media screen and (max-width: 64em){
    font-size: var(--fontxxl);
}
@media screen and (max-width: 48em){
    font-size: var(--fontxl);
}


`

const glow = keyframes`
0%{
    box-shadow: 1px 1px 10px var(--white);
}
50%{
    box-shadow: 2px 2px 25px var(--white);
}
100%{
    box-shadow: 1px 1px 10px var(--white);
}
`

const Processor =styled.div`
width: 45%;
position: absolute;
top: 50%;
left:50%;
transform: translate(-50%,-50%);
animation: ${glow} 3s ease infinite;
padding: 0.5rem;

display: flex;
justify-content: center;
align-items: center;

img{
    width: 100%;
    height: auto;
}

`


const ProcessorSection = () => {
  return (
    <Section>
        <Title>Pasangan Berbahagia</Title>
        <Processor>
            <img src={a15} alt="foto pasangan"></img>   
        </Processor>   
    </Section>
  )
}

export default ProcessorSection