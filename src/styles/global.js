import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Quicksand', sans-serif;
    list-style: none;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-size: 100% 100%;
    background-position: 0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px;
    background-image: radial-gradient(18% 28% at 24% 50%, #CEFAFFFF 7%, #073AFF00 100%),radial-gradient(18% 28% at 18% 71%, #FFFFFF59 6%, #073AFF00 100%),radial-gradient(70% 53% at 36% 76%, #73F2FFFF 0%, #073AFF00 100%),radial-gradient(42% 53% at 15% 94%, #FFFFFFFF 7%, #073AFF00 100%),radial-gradient(42% 53% at 34% 72%, #FFFFFFFF 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 87%, #FFFFFFFF 7%, #073AFF00 100%),radial-gradient(31% 43% at 7% 98%, #FFFFFFFF 24%, #073AFF00 100%),radial-gradient(21% 37% at 72% 23%, #D3FF6D9C 24%, #073AFF00 100%),radial-gradient(35% 56% at 91% 74%, #8A4FFFF5 9%, #073AFF00 100%),radial-gradient(74% 86% at 67% 38%, #6DFFAEF5 24%, #073AFF00 100%),linear-gradient(125deg, #4EB5FFFF 1%, #4C00FCFF 100%);
  }

  input, button {
    border: none;
    outline: none;
  }
`

export default GlobalStyle;
