import React from 'react';
import styled from 'styled-components';

import styles from '../styles/index';

const Footer = () => {
    return (
        <StyledFooter>
            <p>This footer was put in here for stylistic purposes. Nothing more.</p>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
    background-color: ${styles.colors.lightBlue};
    color: ${styles.colors.darkBlue};
    padding: 2.75rem 1.25rem;
    text-align: center;

    p {
        margin: 0;
    }
`;

export default Footer;