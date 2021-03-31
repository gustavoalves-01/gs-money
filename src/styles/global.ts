import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/** CSS Global Styles */
:root {
    --background: #292929;
    --red: #e0002d;
;
    --blue: #34528A;
    --green: #10c775;

    --blue-light: #00aeff;

    --text-title: #e3e3e3;
    --text-body: #b3b3b3;

    --shape: #FFFFFF;    
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:focus{
        outline: none;
    }
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

.react-modal-overlay{
    background: rgba(0,0,0,.3);
    backdrop-filter: blur(4px);
    box-shadow: 0 0 10px #FFFFFF;

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}
.react-modal-content{
    width:100%;
    max-width:576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 2rem;
    align-items: center;
}
.react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: all .3s ease-in-out;

    &:hover{
        filter: brightness(.8);
        transform: scale(1.2);
    }
}
`