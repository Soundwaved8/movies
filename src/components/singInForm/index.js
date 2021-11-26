import styled from 'styled-components';
import logo from '../../img/MZ.png';
import Footer from '../footer';
import { media } from '../../features/media';
import { useState,useEffect } from 'react';
import firebase from '../../config/Firebase';
import { useHistory } from 'react-router';
import { useSelector,useDispatch } from 'react-redux';
import { addUser,getUsers } from '../../actions/database';
import { uuid } from 'uuidv4';
import _ from 'lodash';


const SingInForm = () => {

    const [firstname,setFirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorRegister, setErrorRegister] = useState(false);
    const [filledInputs, setFilledInputs] = useState(true);
    

    const history = useHistory();
    const dispatch = useDispatch()

    const users = useSelector(state=>state.database.users);
    
    useEffect(()=>{
        const isLoged = localStorage.getItem('userId');
        isLoged != null ? history.push('/') : dispatch(getUsers());
        console.log(`filledinputs: ${filledInputs}`)
    },[])

     

    const checkInputs = () => {
        if((firstname === '')||(lastname === '')||(username === '')||(email === '')||(password === '')){
             setFilledInputs(false);
             return false;
        }
        setFilledInputs(true);
        return true;
    } 

    const UserExist = () =>{
        for(let i=0;i<users.length;i++){
            if((users[i].email === email)||(users[i].username === username)){
                setErrorRegister(true);
                return true;
            }
        }
        setErrorRegister(false);
     return false;
    }

    const addU = () =>{
        const newUser = {
            firstname:firstname,
            lastname:lastname,
            username:username,
            email:email,
            password:password,
            fav:[],
            movies:[],
            panier:[],
            id:uuid()
        }
        addUser(newUser);
        localStorage.setItem('userId',newUser.id);
    }

    const clearInputs = () => {
        setFirstName('');
        setLastname('');
        setUsername('');
        setEmail('');
        setPassword('');
    }

    const handleSubmit = () =>{
        
        if(checkInputs()){
           if(!UserExist()){
               clearInputs();
               addU();
               history.push('/');
               console.log("user Added");
           }else{
               console.log("user Not Added");
           }
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
                                    placeholder="firstame"
                                    value={firstname}
                                    onChange={(e)=>{setFirstName(e.target.value)}}
                                ></StyledInput>
                                <StyledInput 
                                    type="text" 
                                    placeholder="lastname"
                                    value={lastname}
                                    onChange={(e)=>{setLastname(e.target.value)}}
                                ></StyledInput>
                                <StyledInput 
                                    type="text" 
                                    placeholder="username"
                                    value={username}
                                    onChange={(e)=>{setUsername(e.target.value)}}
                                ></StyledInput>
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
                                            (errorRegister ?
                                                        <StyledP>User already exist</StyledP>
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

export default SingInForm;

const MainContainer = styled.div`
  width:100%;
  height:100vh;
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
    height:400px;
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
      font-family:Nunito;
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