import styled from 'styled-components';
import LogedNav from '../nav/logedNav';
import UnLogedNav from '../nav/unLogedNav';
import Footer from '../footer';
import Slider from '../slider';
import { useState,useEffect } from 'react';
const Accueil = () =>{

    const [userId,setUserId] = useState(null);

    useEffect(()=>{
        setUserId(localStorage.getItem('userId'));
        console.log(userId);
    })


    return(
        <Container>
           
            <StyledDiv>
            <Slider></Slider>
            </StyledDiv>
            <Footer></Footer>
        </Container>
    );
}

export default Accueil;
const SDiv = styled.div`
  width:100%;
  height:50px;
  
`
const Container = styled.div`
  width:100%;
  height:100vh;
  background:#555454;
`
const StyledDiv = styled.div`
    width:100%;
    height:100vh;
`