import styled from "styled-components";
import { darken, lighten, transparentize } from 'polished';

export const Container = styled.form`

h2 {
    color: var(--text-title);
    font-size: 1.9rem;
    margin-top: 1rem;
    margin-bottom:2.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;

    span{
        font-weight:200;
    }
}

input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 50px;
    
    border: 1px solid #4d4d4d;
    background: #333333;

    font-weight: 400;
    font-size: 1rem;
    color: white;

    &::placeholder {
        color: var(--text-body);
    }

    & + input {
        margin-top: 1rem;
    }
    &:focus{
        border-color: var(--text-body);
        box-shadow: 0 0 5px var(--text-body);
    }
}

button[type="submit"] {
    width:100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-image: linear-gradient(to right, #12c9c9, #2abf77, #18ad65, #2bb673);
    color: #FFF;
    border-radius: 5rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    background-size: 300% 100%;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

    &:hover{
        background-position: 100% 0;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;


    }
}


`;

export const TransactionTypeContainer = styled.div`
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: .5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33CC95',
    red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height:4rem;
    border: 1px solid #4d4d4d;
    border-radius: 5rem;
    color: var(--text-body);

    background: ${(props) => props.isActive
        ? transparentize(0.8, colors[props.activeColor])
        : '#333333'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color .2s;

    &:focus{
        color: white;
    }

    &:hover{
       border-color: ${lighten(0.3, '#4d4d4d')};
    }

    img {
        width: 20px;
        height: 20px;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size:1rem;
        color: var(--text-tilte);
    }
`;
