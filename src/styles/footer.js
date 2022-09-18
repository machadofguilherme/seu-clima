import styled from "styled-components";

const FooterSection = styled.footer`
    position: absolute;
    bottom: 0;
    background-color: aqua;
    width: 100%;
    height: 80px;
    border-top: 1px solid black;
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: space-evenly;
`;

const FooterLogo = styled.h3`
    font-size: 1.5rem;
    color: blue;

    @media screen and (max-width: 320px) {
        font-size: 1rem;
    }
`;

const Network = styled.section`
    font-size: 1.3rem;
    display: flex;
    gap: 20px;
    
    @media screen and (max-width: 320px) {
        font-size: .8rem;
        gap: 5px;
    }
    
    a {
        color: blue;
        transition: all 500ms ease;
        &:hover {
            opacity: .8;
        }
    }
`

const FooterInfo = styled.section`
    width: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-size: .9rem;
    color: blue;



    @media screen and (max-width: 320px) {
        font-size: .7rem;
        width: 140px;

        p {
            display: none;
        }
    }
`;

export { FooterSection, FooterLogo, Network, FooterInfo };
