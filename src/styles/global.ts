import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/** CSS Global Styles */
:root {
    --background: #F2F0F5;
    --red: #E52E4D;
    --blue: #34528A;
    --green: #33CC95;

    --blue-light: #7D90B3;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFFFFF;    
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    // 1rem = 16px --> Tela Padrão
    @media (max-width: 1080px) {
        font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }

}

body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`