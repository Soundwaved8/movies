import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    
body{
   margin:0px;
   background-color: ${props=>props.theme.background};
}
`

export default GlobalStyle