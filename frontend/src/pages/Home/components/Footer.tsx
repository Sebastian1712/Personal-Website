import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Icons from '../../../components/IconLinks/Icon';
import Music from './Music';

const FooterDiv = styled.div`
    /* background: red; */
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 125px;
    position: absolute;
    width: 100%;
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