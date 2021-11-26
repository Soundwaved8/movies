import { useState, useEffect } from "react";
import LogedNav from '../components/nav/logedNav';
import UnLogedNav from '../components/nav/unLogedNav';
import Accueil from '../components/accueil';
import Shop from '../screens/shop';
import Wishlist from '../screens/wishlist';
import Panier from '../components/panier';
import Details from '../components/movieDetail/details';
import Stripe from '../stripe/StripeContainer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import styled from 'styled-components';
import SingInForm from '../components/singInForm';
import LoginForm from '../components/loginForm';
import GlobalStyle from './globalStyle';
import { lightTheme, darkTheme } from './themes'
import { ThemeProvider } from "styled-components";
const Routes = () => {
    const [currentTheme, setCurrentTheme] = useState(darkTheme)
    const switchTheme = (theme) => {
        setCurrentTheme(theme)
    }
    const [userId,setUserId] = useState(null);

    useEffect(()=>{
        setUserId(localStorage.getItem('userId'));
        console.log(userId);
    })

    return (
        <ThemeProvider theme={currentTheme}>
        <Router>
        <SDiv>
                {userId != null ? <UnLogedNav/>:<LogedNav switchTheme={switchTheme}/>}
        </SDiv>
        <GlobalStyle/>
            <Switch>
                <Route exact path ="/" component={Accueil}/>
                <Route path="/signin" component={SingInForm}/>
                <Route path="/login" component={LoginForm}/>
                <Route path="/panier" component={Panier}/>
                <Route path="/shop" component={Shop}/>
                <Route path="/fav" component={Wishlist}/>
                <Route exact path="/details/:id" component={Details}/>
                <Route exact path ="/stripe" component={Stripe}/>
            </Switch>   
        </Router>
        </ThemeProvider>
    );
};

export default Routes;



const SDiv = styled.div`
  width:100%;
  height:50px;
  
`
