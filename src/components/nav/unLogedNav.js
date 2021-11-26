import styled from "styled-components";
import { useState,useEffect } from "react";
import logo from '../../img/MZ.png';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { FaUserCircle } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux';
import { getUsers } from "../../actions/database";






const UnLogedNav  = () =>{

    const [showLinks, setShowLinks] = useState(false)


    const dispatch = useDispatch();
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    const [username, setUsername] = useState('');
    
    const history = useHistory();

    const users = useSelector(state=>state.database.users);
    const getUserName = () =>{
        users.map(user=>{
            if(user.id === localStorage.getItem('userId')){
                setUsername(user.username);
                return 0;
            }
        })
    }


    const logout = () =>{
        localStorage.removeItem('userId');
        history.push('/');
    }
    useEffect(()=>{
        setShowLinks(true);
        dispatch(getUsers());
        
    },[])

    useEffect(()=>{
        console.log(users);
        getUserName();

    },[users])

    const redirectToHome = () =>{
        history.push('/');
    }

    return(
        
            <StyledNavbar showLinks={showLinks}>
                <StyledDivLogo>
                    <StyledLogo src={logo} onClick={()=>redirectToHome()}></StyledLogo>
                </StyledDivLogo>
                <StyledList showLinks={showLinks}>
                    
                        <StyledElementNav showLinks={showLinks}>
                            <StyledLink>
                                <Link to="/shop"><StyledP1>Boutique</StyledP1></Link>
                            </StyledLink>    
                        </StyledElementNav>
                        <StyledElementNav showLinks={showLinks}>
                            <StyledLink>
                                <Link to="/fav"><StyledP1>Favories</StyledP1></Link>
                            </StyledLink>
                        </StyledElementNav>
                        <StyledElementNav showLinks={showLinks}>
                            <StyledLink>
                                <Link to="/panier"><StyledP1>panier</StyledP1></Link>
                            </StyledLink>
                        </StyledElementNav>
                        <StyledElementNav showLinks={showLinks}>
                            <StyledLink>
                                <StyledP1 onClick={()=>logout()}>Deconexion</StyledP1>
                            </StyledLink>
                        </StyledElementNav>
                </StyledList>
                <StyledDiv>
                    <StyledP2>{username}</StyledP2>
                    <FaUserCircle size="2em" color="#58DD94"/>
                </StyledDiv>
                <StyledBurgerButton onClick={handleShowLinks}>
                    <StyledSpanBurgerLine showLinks={showLinks}></StyledSpanBurgerLine>
                </StyledBurgerButton>
            </StyledNavbar>
        
    );
}

export default UnLogedNav;

const container = styled.div`
 background:blue;
`

const StyledNavbar = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    position: fixed;
    width: 100%;
    min-height: 50px;
    background:#3D3939;
    z-index: 9999;
    box-sizing:border-box;
`

const StyledDivLogo = styled.div`

`

const StyledLogo = styled.img`
    width:80px;
    z-index: 10;
`

const StyledList = styled.ul`
    list-style: none;
    padding-right:3vh;
    margin: 0;
    display: flex;
    gap:50px;
    @media screen and (max-width:767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        right:-100vw;
        right: ${props =>
            props.showLinks ? props.showLinks : 0};
        visibility: ${props =>
            props.showLinks ? props.showLinks : 'visible'};
        width: 0;
        width: ${props =>
            props.showLinks ? props.showLinks : '100%'};
        bottom: 0;
        height: 100%;
        padding:2rem;
        padding-right: 0;
        background-color: #3D3939;
        transition: all 0.8s ease-out;
    }    
`

const StyledElementNav = styled.li`
    @media screen and (max-width:767px) {
        transform: translateY(100vh);
        transform: ${props =>
            props.showLinks ? props.showLinks : "translateY(0)"};
        &:first-child {
            transition: ${props =>
                props.showLinks ? props.showLinks : "all 1s ease-out"};
        }
        &:nth-child(2) {
            transition: ${props =>
                props.showLinks ? props.showLinks : "all 1.15s ease-out"};
        }
        &:nth-child(3) {
            transition: ${props =>
            props.showLinks ? props.showLinks : "all 1.3s ease-out"};
        }
        &:nth-child(4) {
            transition: ${props =>
            props.showLinks ? props.showLinks : "all 1.45s ease-out"};
        }
        &:after{
            content:"";
            display:block;
            margin: 0 auto;
            width:3vw;
            height:1px;
            background: white;
        }
        &:last-child:after{
            display:none;
        }
    }
`

const StyledLink = styled.p`
    text-decoration: none;
    padding:0 0.3rem;
    @media screen and (max-width:767px) {
        display: block;
        padding:1.5rem;
        font-size: 5vw;
    }
`

const StyledBurgerButton = styled.button`
    width: 40px;
    height: 40px;
    background: transparent;
    color:inherit;
    border:none;
    display: none;
    @media screen and (max-width:767px) {
        display:block;
        position: fixed;

        right:1rem;
        &:hover{
            cursor:pointer;
        }
    }
`

const StyledSpanBurgerLine = styled.span`
    @media screen and (max-width:767px) {
        display:block;
        width:40px;
        width: ${props =>
            props.showLinks ? props.showLinks : 0};
        transition: all .5s ease-in-out;
        height:3px;
        position: relative;
        background: white;
        background: ${props =>
            props.showLinks ? props.showLinks : 'transparent'};
        border-radius: 3px;
        &:before{
            display:block;
            width:40px;
            height:3px;
            position: absolute;
            background: white;
            transition: all .5s ease-in-out;
            content:"";
            left:0;
            border-radius: 3px;
            transform: translateY(-12px);
            transform: ${props =>
                props.showLinks ? props.showLinks : 'rotate(45deg)'};

        }
        &:after {
            display:block;
            width:40px;
            height:3px;
            position: absolute;
            background: white;
            transition: all .5s ease-in-out;
            content:"";
            left:0;
            border-radius: 3px;
            transform: translateY(12px);
            transform: ${props =>
                props.showLinks ? props.showLinks : 'rotate(-45deg)'};
        }
    }
`

const StyledP1 = styled.div`
font-family:Nunito;
color:#58DD94
`
const StyledP2 = styled.div`
font-family:Nunito;
color:white;
font-weight:bold;
`

const StyledDiv = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   margin-right:15px;
   gap:30px;
   @media screen and (max-width:767px) {
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:70px;
    gap:30px;
   }
`
