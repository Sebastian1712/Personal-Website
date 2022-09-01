import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import SpotifyLogoImg from  '../../../public/Spotify.jpeg';

const MusicDiv = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    margin-top: 3rem;
    left: 1rem;
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