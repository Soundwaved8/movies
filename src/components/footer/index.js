import styled from "styled-components";
import logo from "../../img/media.png";
const Footer = () =>{
    return(
        <StyledFooter>
            <StyledDiv1>
                <StyledImg src={logo}/>
            </StyledDiv1>
            <StyledDiv2>
                <StyledHr/>
            </StyledDiv2>
            <StyledDiv3>
                <StyledDiv3_1>
                    <StyledP1>Conçu par :</StyledP1>
                </StyledDiv3_1>
                <StyledDiv3_2>
                    <StyledUl>
                        <li>Yanis Boumrah</li>
                        <li>Yanis Djebara</li>
                        <li>Ryan Sadaoui</li>
                        <li>Yanis Bouzelha</li>
                    </StyledUl>    
                </StyledDiv3_2>
            </StyledDiv3>
            <StyledDiv4>
            <StyledP2>Movie'Z</StyledP2>
            </StyledDiv4>
        </StyledFooter>
    );
}

export default Footer;

const StyledFooter = styled.div`
    width:100%;
    height:260px;
    background:#3D3939;
    display:flex;
    flex-direction:column;
    bottom:0;
    z-index: 3;
`

const StyledDiv1 = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-direction:column;

`

const StyledDiv2 = styled.div`
 width:50%;
 margin-left:20px;
`

const StyledDiv3 = styled.div`
   width:50%;
   height:125px;
   margin-left:20px;
`
const StyledDiv3_1 = styled.div`
   display:flex;
   align-items:center;
   justify-content:flex-start;
   height:30px;
`
const StyledDiv3_2 = styled.div`
  width:100%;
  display:flex;
   align-items:center;
   justify-content:flex-start;
   margin-left:70px;
`
const StyledDiv4 = styled.div`
     width:100%;
     display:flex;
     aligh-items:center;
     justify-content:center;
`
const StyledImg = styled.img`
     width:150px;
`

const StyledP1 = styled.p`
     font-family: 'Nunito', sans-serif;
     color:white;
     font-weight:bold;
`
const StyledP2 = styled.p`
     font-family: 'Nunito', sans-serif;
     color:#58DD94;
     font-weight:bold;
     font-size:17px;
`
const StyledUl = styled.ul`
    font-family:Nunito;
    color:white;
    font-weight:bold;
`

const StyledHr = styled.hr`
    height:0px;
    width:100%;
`