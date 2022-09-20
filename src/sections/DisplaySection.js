import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'

const Section = styled.section`
width : 100vw;
height: 200vh;
position : relative;

display: flex;
justify-content: space-around;
flex-direction : column;

background-color: var(--dark);
color: var(--white);

&>*:nth-child(even){
    align-self: flex-end;
    margin-right: 4rem;
    text-align: right;

    @media screen and (max-width: 48em){
    margin-right: 1rem;
}
&>*:nth-child(odd){
    margin-left: 4rem;
    @media screen and (max-width: 48em){
    margin-left : 1rem;
    }
}
`
const Title = styled.div`
font-size: var(--fontlg);
margin-bottom: 1rem;
`
const Text = styled.div`
font-size: var(--fontxs);
color: var(--greyLight);
margin-bottom: 0.5rem;
width: 100%;

@media screen and (max-width: 64em){
    width: 100%;
}
@media screen and (max-width: 48em){
    width: 100%;
    font-size: var(--fontxxs);
}


`

const TextContainer =styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
transform: rotate(-25deg);
z-index: 1;
margin-bottom: 4rem;
align-items: center;
`


const MainTitle = styled.h1`
font-size: var(--fontBig);
font-family: var(--fontL);

background-image: linear-gradient(-45deg, var(--gradient));
background-clip : text;
-webkit-background-clip : text;
-webkit-text-fill-color : transparent;

@media screen and (max-width: 70em){
      font-size : var(--fontxxxl);
}
@media screen and (max-width: 64em){
    font-size : var(--fontxxl);
}
@media screen and (max-width: 48em){
    font-size : var(--fontxl);
}

@media screen and (max-width: 40em){
    font-size : var(--fontlg);
}

`;

const TextBlockRight = styled.div`
display: flex;
flex-direction: column;
align-items:flex-end;
width: 50%;
`;

const TextBlockLeft = styled.div`
display: flex;
flex-direction: column;
align-items:flex-start;
width: 50%;
`;

const MovingText = styled.h1`
font-size :var(--fontBig);
font-family: var(--fontL);

background-image: linear-gradient(-45deg, var(--gradient));
background-clip : text;
-webkit-background-clip : text;
-webkit-text-fill-color : transparent;

@media screen and (max-width: 70em){
    font-size : var(--fontxxxl);
}
@media screen and (max-width: 64em){
  font-size : var(--fontxxl);
}
@media screen and (max-width: 48em){
  font-size : var(--fontxl);
}
@media screen and (max-width: 40em){
  font-size : var(--fontlg);
}
@media screen and (max-width: 30em){
  font-size : var(--fontmd);
}
`

const DisplaySection = () => {
   
    const container = useRef(null);
    const textOne = useRef(null);
    const textTwo = useRef(null);
    useLayoutEffect(() => {
        let t1= gsap.timeline({
        scrollTrigger:{
        trigger: container.current,
        start:"top-=500 top",
        end:"bottom top",
        scrub: true,
        }
        }).fromTo(textOne.current, {x:0}, {x:"20%"}, "key1").fromTo(textTwo.current, {x:0}, {x:"-20%"},"key1")
    
        return () => {
        if(t1) t1.kill();
        
        };
    }, [])
  return (
    <Section >
        <MainTitle>
            Detail Acara
        </MainTitle>
        <TextBlockRight>
            <Title>
                Tempat Acara
            <Text>
            Mahameru Restoran Jln Raya Diponegoro 152 Sby
            </Text>
            </Title>
        </TextBlockRight>
        <TextBlockLeft ref={container}>
            <Title>
                Waktu dan Tanggal
            <Text>
            Jumat, 23 september 2022 18:00 WIB
            </Text>
            </Title>
        </TextBlockLeft>
        
        <TextContainer>
            <MovingText ref={textOne}>Datanglah dan Rayakanlah</MovingText>
            <MovingText ref={textTwo}>Pada Acara Anniversary ini</MovingText>
        </TextContainer>
    </Section>
  )
}

export default DisplaySection
