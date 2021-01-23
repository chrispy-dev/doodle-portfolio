import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faSteam } from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/index';

const Home = () => {
    return (
        <StyledContainer>
            <StrongHeader><p>Welcome to my page!</p></StrongHeader>
            <FlexDiv>
                <p>I think I want it to be an online portfolio, but I haven't decided yet. I've considered also making it a Swiss Army Knife of online tools, custom made to fit my style which I'm sure you could tell is pretty simplistic.</p>
                <p>Of course you're also welcome to use my tools. They're for everyone, that's why I put them on the internet. If you enjoy using them and have got some suggestions please feel free to contact me! I'll leave all my information below.</p>
            </FlexDiv>
            <StrongHeader>Enjoy.</StrongHeader>

            <address>
                <div>
                    <SortOfStrongIGuess>e-mail:</SortOfStrongIGuess>
                    <span> onetrckchris@gmail.com</span>
                </div>
                <div>
                    <SortOfStrongIGuess>phone:</SortOfStrongIGuess>
                    <span> +1 (323) 313-8358</span>
                </div>
                <SocialsContainer>
                    <SortOfStrongIGuess>socials:</SortOfStrongIGuess>
                    <div>
                        <a href="https://www.instagram.com/pelaydough/"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.facebook.com/chris.pelayo.98"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://steamcommunity.com/id/taramith"><FontAwesomeIcon icon={faSteam} /></a>
                    </div>
                </SocialsContainer>
            </address>
        </StyledContainer>
    );
};

const SocialsContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${styles.sizes.laptopL}) {
        flex-direction: row;
        align-items: center;

        div {
            margin-left: 0.7rem;
        }
    }
`;

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${styles.sizes.tablet}) {
        flex-direction: row;
        justify-content: space-between;
        
        p {
            width: 48%;
        }
    }
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15% 1.25rem;
    min-height: calc(100vh - 273.6px);
    line-height: 2rem;
    justify-content: center;
    background-color: ${styles.colors.lightTan};
    color: ${styles.colors.darkTan};

    @media (min-width: ${styles.sizes.tablet}) {
        padding: 5% 10%;
    }

    @media (min-width: ${styles.sizes.laptopL}) {
        padding: 5% 20%;
    }

    @media (min-width: ${styles.sizes.laptopXL}) {
        padding: 5% 32%;
    }

    p {
        margin: 0 0 1.25rem 0;
        font-size: 1rem;
        font-weight: 300;
    }

    address {
        margin: 1.25rem 0 0 0;
        display: flex;
        flex-direction: column;
        text-align: center;

        a {
            text-decoration: none;
            color: ${styles.colors.darkTan};
            margin: 0 0.25rem;
            font-size: 3rem;
        }

        @media (min-width: ${styles.sizes.laptopL}) {
            flex-direction: row;
            margin: 8% 0 0 0;
            width: 80%;
            justify-content: space-between;
            align-items: center;

            a {
                font-size: 2rem;
            }
        }
    }
`;

const StrongHeader = styled.span`
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 600;

    p {
        font-weight: 600;
        font-size: 1.6rem;
    }
`;

const SortOfStrongIGuess = styled.span`
    font-weight: 600;
`;

export default Home;