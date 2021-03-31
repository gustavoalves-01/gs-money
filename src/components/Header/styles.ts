import styled from 'styled-components'

export const Container = styled.header`
    background: #171717;
    width: 100vw;
    box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        font-weight: 400;
        color: white;
        border: 0;
        padding: 0 2rem;
        border-radius: 50px;
        height: 3rem;

        background-size: 300% 100%;
        background-image: linear-gradient(to right, #12c9c9, #2abf77, #18ad65, #2bb673);
        

        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;

        
    &:hover {
        background-position: 100% 0;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;

   }
}

`