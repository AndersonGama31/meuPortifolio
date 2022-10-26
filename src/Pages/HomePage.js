import React from "react";
import styled from "styled-components";
//import GmailIcon from "@material-ui/icons/Gmail";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from "../Components/Particle";
import { useTranslation } from 'react-i18next';




function HomePage() {
  const { t } = useTranslation();

  
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
        {t('Home1')} <span>Anderson Gama </span>
        </h1>
        <p>
        {t('Home2')}
        </p>
        <div className="icons">
          <a href="https://api.whatsapp.com/send?phone=5511981988981" className="icon i-whatsapp" target="_blank" rel="noreferrer">
            <WhatsAppIcon />
          </a>
          <a href="https://github.com/AndersonGama31" className="icon i-github" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/andersongama31/" className="icon i-linkedin" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
     width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
             .i-whatsapp{
              &:hover{
                border: 2px solid #179C0D;
                color: #179C0D;
            }
             }
            .i-linkedin{
                &:hover{
                    border: 2px solid #0077B7;
                    color: #0077B7;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
