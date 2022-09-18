import styled from "styled-components";

const Button = styled.button`
    color: blue;
    font-size: 1.5rem;
    background: none;
    cursor: pointer;
    transition: all 500ms ease;
    position: absolute;
    border-radius: 50%;
    border: 1px solid blue;
    padding: 5px 10px; 
    left: 37%;

    @media screen and (max-width: 320px) {
        font-size: .8rem;
        left: 8%;
    }

    &:hover {
        opacity: .8;
        background-color: aqua;
    }
`;

const City = styled.div`
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: blue;

    @media screen and (max-width: 320px) {
        font-size: 1rem;
    }

    img {
        width: 32px;
        margin-left: 5px;
        @media screen and (max-width: 320px) {
            width: 25px;
        }
    }
`;

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 320px) {
        flex-direction: column;
        gap: 0;
    }
`;

const Icon = styled.img`
    width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 320px) {
        width: 10rem;
    }
`;

const Temp = styled.p`
    color: blue;
    font-weight: 600;
    font-size: 3rem;
    text-align: center;
    width: 150px;
    @media screen and (max-width: 320px) {
        font-size: 3rem;
    }
`;

const Description = styled.p`
    text-align: center;
    font-size: 1rem;
`;

const Details = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    gap: 100px;
    width: 300px;
    text-align: center;
    padding-top: 20px;
    @media screen and (max-width: 320px) {
        display: none;
    }
`;

const Extra = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 95px;
    font-weight: 700;
    color: blue;
    font-size: 2rem;
    @media screen and (max-width: 320px) {
        display: none;
    }
`;

export {
    Button,
    City,
    Icon,
    Temp,
    Description,
    Details,
    Main,
    Extra
};
