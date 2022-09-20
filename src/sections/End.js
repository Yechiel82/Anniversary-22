import React from 'react'
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

const Link = styled.ul`
position: absolute;
top:50%;
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
height:100%;
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
        <Link>
        <li><span style={{fontWeight: 'bold'}}>&nbsp; 
    <a href="https://erika-music.netlify.app/" Link style={{ color: 'inherit', textDecoration: 'inherit'}}
>Album Erika
    </a></span></li>
        <li><span style={{fontWeight: 'bold'}}>&nbsp; 
    <a href="https://www.instagram.com/indonesiachristiancancer_ic3/" Link style={{ color: 'inherit', textDecoration: 'inherit'}}
>Ucapkan Selamat
    </a></span></li> 
        <li><span style={{fontWeight: 'bold'}}>&nbsp; 
    <a href="https://www.google.com/search?sxsrf=ALiCzsbr6c7GIgCAqKkhLhlX-yJGwlQisA:1663645344955&q=restaurant+mahameru&sa=X&ved=2ahUKEwjwv8XuuaL6AhXAcWwGHav-DAkQ7xYoAHoECAIQNw" Link style={{ color: 'inherit', textDecoration: 'inherit'}}
>Petunjuk Tempat
    </a></span></li> 
        <li><span style={{fontWeight: 'bold'}}>&nbsp; 
    <a href="https://ic3filia.com" Link style={{ color: 'inherit', textDecoration: 'inherit'}}
>Website Renungan IC3
    </a></span></li> 
        </Link>
    </Section>
  )
}

export default End