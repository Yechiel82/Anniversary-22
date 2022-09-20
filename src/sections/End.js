import React  from "react";
import styled from 'styled-components'



const Section = styled.section`
width: 100vw;
height:100vh;
position: relative;

display:flex ;
justify-content: center;
align-items: center;
background-color: var(--white);

`

const Links = styled.ul`
position: absolute;
top:55%;
left: 50%;
transform: translate(-50%,-50%);
list-style: none;
background-color: var(--white);
border: 3px solid var(--dark);
border-radius: 8px;
padding: 0.5rem;
width: 90%;
li{
  width:100%;
  height: 5rem;
  background-color: var(--dark);
  background-image: linear-gradient(-270deg, var(--gradient));
  text-align: center;
  font-size: var(--fontlg);
  font-family: var(--fontL);
  text-decoration:none;
}

&>*:not(:first-child):not(:last-child){
  margin: 0.5rem 0;
}

@media screen and (max-width: 48em){
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
`

const Title = styled.h1`
position: absolute;
top: 1%;
text-transform: uppercase;
font-size: var(--fontBig);
z-index:1;

@media screen and (max-width: 70em){
  font-size: var(--fontxxxl);
}
@media screen and (max-width: 64em){
  font-size: var(--fontxxl);
}
@media screen and (max-width: 48em){
  font-size: var(--fontlg);
  transform: none;

}
`

const End = () => {
  return (
    <Section>
      <Title>
        Detail
      </Title>
        <Links>
        <li><span style={{fontWeight: 'bold'}}>
    <a href="https://erika-music.netlify.app/" rel="noreferrer" target="_blank">Album Erika
    </a></span></li>
        <li><span style={{fontWeight: 'bold'}}>
    <a href="https://www.instagram.com/indonesiachristiancancer_ic3/" rel="noreferrer" target="_blank">Ucapkan Selamat
    </a></span></li> 
        <li><span style={{fontWeight: 'bold'}}>
    <a href="https://www.google.com/search?q=mahameru+restaurant&oq=mahameru+restaurant&aqs=chrome..69i57.3532j0j9&sourceid=chrome&ie=UTF-8" rel="noreferrer" target="_blank">Petunjuk Tempat
    </a></span></li> 
    <li><span style={{fontWeight: 'bold'}}>
    <a href="https://ic3filia.com/" rel="noreferrer" target="_blank">Renungan IC3
    </a></span></li> 
        </Links>
    </Section>
  )
}


export default End