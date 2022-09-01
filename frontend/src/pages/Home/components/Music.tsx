import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import SpotifyLogoImg from  '../../../public/Spotify.jpeg';

const MusicDiv = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    right: 87%;

    @media only screen and (max-width: 500px) {
        position: relative;
        right: 0%;
        padding-bottom: 10%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        align-content: center;
    }
`

const JammingOutText = styled.text`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
`

const SongTitle = styled.text`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-style: italic;
    justify-content: center;
    align-items: center;
    align-content: center;
`

function Music() {
    return (
        <>
            <MusicDiv>
                <JammingOutText>
                    🎶 Offline - Last Played 🎶
                </JammingOutText>
                <SongTitle>
                    Close to Why - Parcels
                </SongTitle>
            </MusicDiv>
        </>
    );
}

export default Music;