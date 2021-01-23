import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import styles from '../styles/index';

const Tools = () => {
    return (
        <StyledToolsContainer>
            
        </StyledToolsContainer>
    );
};

const StyledToolsContainer = styled.div`
    background-color: ${styles.colors.lightTan};
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: calc(100vh - 273.6px);
    padding: 1rem;

    a {
        text-decoration: none;
        color: ${styles.colors.darkTan};
        letter-spacing: normal;
        transition: letter-spacing 0.2s;

        &:hover {
            letter-spacing: 3px;
        }
    }
`;

export default Tools;