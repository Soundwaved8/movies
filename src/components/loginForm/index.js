import styled from 'styled-components';
import logo from '../../img/MZ.png';
import { media } from '../../features/media';
import { useState,useEffect } from 'react';
import { get_data } from '../../actions/database';
import { getUsers } from '../../actions/database';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Footer from '../footer';
const LoginForm = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState(false);
    const [filledInputs, setFilledInputs] = useState(true);

    const history = useHistory()
    const dispatch = useDispatch()

    
    const users = useSelector(state=>state.database.users);
    

    const checkInputs = () => {
        if((email === '')||(password === '')){
             setFilledInputs(false);
        }else{
                setFilledInputs(true);
             }
    } 

    const login = () =>{
        users.map(user=>{
            if(user.email === email){
                if(user.password == password){
                    clearInputs();
                    localStorage.setItem('userId',user.id);
                    history.push('/');
                }
            }
        })

        setErrorLogin(true);
    }

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    useEffect(()=>{
        const isLoged = localStorage.getItem('userId');
        isLoged != null ? history.push('/') : dispatch(getUsers());
    },[])

    const handleSubmit = () =>{
        checkInputs();
        if(filledInputs){
            login();
        }
    }

    return(
       <div>
        <MainContainer>
                <FormContainer>
                    <StyledDiv>
                            <StyledDiv2>
                                <StyledImg src={logo}/>
                            </StyledDiv2>
                            <StyledDiv3>
                                <StyledInput 
                                        type="text" 
                                        placeholder="email"
                                        value={email}
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                ></StyledInput>
                                <StyledInput 
                                        type="password" 
                                        placeholder="password"
                                        value={password}
                                        onChange={(e)=>{setPassword(e.target.value)}}        
                                ></StyledInput>
                            </StyledDiv3>
                            <StyledDiv2>
                                <StyledButton
                                    onClick={()=>handleSubmit()}
                                >Sing In</StyledButton>
                            </StyledDiv2> 
                            <StyledDiv4>
                                {filledInputs ? 
                                            (errorLogin ?
                                                        <StyledP>email or password wrong</StyledP>
                                                        :null
                                            ):<StyledP>You must fill all the inputs</StyledP> 
                                }
                            </StyledDiv4>   
                    </StyledDiv>
            </FormContainer>
        </MainContainer>
        <Footer></Footer>
     </div>
    );
}

export default LoginForm;

const MainContainer = styled.div`
  width:100%;
  height:94vh;
  display: flex;
  justify-content: center;
  padding-top:50px;
  background:#555454;
  ${media.phone}{
    padding-top:0px;
    width:100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const StyledImg = styled.img`
     width:100px;
     height:50px;
     margin-bottom:20px;
`

const FormContainer = styled.div`
    padding-top:30px;
    width:300px;
    height:300px;
    background:#3D3939;
    display:flex;
    justify-content:center;
    border-radius:7px;
    box-shadow: 10px 5px 5px #484444;
`

const StyledInput = styled.input`
      width:80%;
      height:30px;
      border-radius:4px;
      margin-bottom:13px;
      border-style:none;
`

const StyledButton = styled.button`
margin-top:20px;
    width:70%;
    height:30px;
    color:white;
    border-radius:4px;
    background:#58DD94;
    border-style:solid;
    border-width:1px;
`

const StyledDiv = styled.div`
    width:250px;
    height:100%;
    display:flex;
    aligh-items:center;
    flex-direction:column;
    box-sizing:border-box;
    padding-left:5px;
    padding-right:5px;
`

const StyledDiv2 = styled.div`
    width:100%;
    display:flex;
    aligh-items:center;
    justify-content:center;
`

const StyledDiv3 = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const StyledDiv4 = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:5px;
`

const StyledP = styled.div`
    color:red;
    font-family:Nunito;
    font-size:13px;
`