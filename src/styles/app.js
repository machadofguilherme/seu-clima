import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;

    h1 {
        text-align: center;
        margin-bottom: 10px;
        color: blue;
        font-weight: 700;
    }
`;

const Field = styled.input`
    padding: 10px 15px;
    border-radius: 10px;
    color: blue;
    input::placeholder {
        color: blue;
        text-transform: uppercase;
    }
`;

const Button = styled.button`
    padding: 9px 15px;
    margin-left: 10px;
    background-color: lightblue;
    color: blue;
    border: 1px solid blue;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
    transition: all 500ms ease-in;
        &:hover {
            opacity: .7;
        }

        &:disabled {
            opacity: .5;
        }
`;

const Logo = styled.header`
    font-size: 5rem;
    text-align: center;
    display: flex;
    gap: 1px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: darkblue;
`;

export { Main, Field, Button, Logo };
