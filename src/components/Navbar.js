import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from 'reactstrap';

import styles from '../styles/index';

const Navbar = ({ open, setOpen, width }) => {
    return (
        <NavbarContainer>
            <h3>Chris Pelayo</h3>
            <ToggleNav onClick={() => setOpen(!open)}>
                { open ? <StyledX icon={faPlus} /> : <StyledBurger icon={faBars} /> }
            </ToggleNav>

            {
                width < 1024
                ? <StyledNav isOpen={open} open={open}>
                    <Link to="/" onClick={() => setOpen(!open)}>home</Link>
                    <Link to="/tools" onClick={() => setOpen(!open)}>tools</Link>
                    <Link to="/clones" onClick={() => setOpen(!open)}>clones</Link>
                </StyledNav>
                : <ActualStyledNav>
                    <Link to="/">home</Link>
                    <span>•</span>
                    <Link to="/tools">tools</Link>
                    <span>•</span>
                    <Link to="/clones">clones</Link>
                </ActualStyledNav>
            }
        </NavbarContainer>
    );
};

const ActualStyledNav = styled.nav`
    display: flex;
    background-color: ${styles.colors.mediumBlue};
    width: 100%;
    justify-content: center;
    align-items: center;

    span {
        color: ${styles.colors.lightBlue};
    }

    a {
        padding: 1rem;
        letter-spacing: normal;
        transition: letter-spacing 0.2s;
        text-decoration: none;
        text-align: center;
        color: ${styles.colors.lightBlue};

        &:hover {
            letter-spacing: 3px;
        }
    }
`;

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${styles.colors.lightBlue};

    h3 {
        margin: 30px 0;
        font-size: 2.4rem;
        font-weight: 300;
        color: ${styles.colors.darkBlue};
    }
`;

const StyledNav = styled(Collapse)`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid ${styles.colors.lightBlue};

    a {
        padding: 1rem;
        letter-spacing: normal;
        transition: letter-spacing 0.2s;
        text-decoration: none;
        text-align: center;
        border-bottom: 1px solid ${styles.colors.lightBlue};
        background-color: ${styles.colors.mediumBlue};
        color: ${styles.colors.lightBlue};

        &:hover {
            letter-spacing: 3px;
        }
    }
`;

const StyledBurger = styled(FontAwesomeIcon)`
    color: ${styles.colors.lightBlue};
`;

const StyledX = styled(FontAwesomeIcon)`
    color: ${styles.colors.lightBlue};
    transform: rotate(45deg);
`;

const ToggleNav = styled.div`
    background-color: ${styles.colors.mediumBlue};
    width: 100%;
    text-align: center;
    padding: 1rem 0;

    @media (min-width: ${styles.sizes.laptop}) {
        display: none;
    }
`;

export default Navbar;