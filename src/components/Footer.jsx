import React from 'react';

import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

import { FooterSection, FooterLogo, Network, FooterInfo } from '../styles/footer';

function Footer() {

  return (
    <FooterSection>
        <section>
            <FooterLogo>Seu Clima</FooterLogo>
        </section>
        <Network>
            <a href="https://www.linkedin.com/in/machadodev/" target="_blank">
             <FaLinkedinIn />
            </a>

            <a href="https://github.com/machadofguilherme" target="_blank">
                <FiGithub />
            </a>
        </Network>
        <FooterInfo>
            <p>Aplicação desenvolvida com React, React Icons, Styled-Components e Vite.</p>
            <strong>Guilherme Machado</strong>
        </FooterInfo>
    </FooterSection>
  );
}

export default Footer;
