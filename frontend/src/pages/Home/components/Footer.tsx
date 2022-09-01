import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Icons from '../../../components/IconLinks/Icon';
import Music from './Music';

const FooterDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    bottom: 0;
    flex-direction: column;
    position: absolute;
    width: 100%;
    align-items: center;
    padding-bottom: 3%;

    @media only screen and (max-width: 500px) {
        width: 100%;
        height: 30%;
        bottom: 0;
        padding-bottom: 0;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

function Footer() {
    return (
        <FooterDiv>
            <Music/>
            <Icons/>
        </FooterDiv>
    );
}

export default Footer;