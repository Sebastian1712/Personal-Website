import { createGlobalStyle, css } from "styled-components"
import memoji from './public/sebastianIcon.png'

export const lightTheme = {
    body: "#F7F2EC",
    fontColor: "#000",
    purpleColor: "light",
    iconColor: "#000"
}

export const darkTheme = {
    body: "#0C0B0B",
    fontColor: "#fff",
    purpleColor: "dark",
    iconColor: "#fff"
}

export const GlobalStyles = createGlobalStyle `
    body {
        background-color: ${(props) => props.theme.body};
    }

    .circleFrame {
        ${(props) => (props.theme.purpleColor !== "light") ? 
        css`background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(8,200,246,1) 0%, rgba(124,136,255,0.72) 100%);
            image-rendering: url(${memoji});
            content: url(${memoji});` 
        : css`background: linear-gradient(180deg, #DBC6FF 31.25%, rgba(249, 197, 209, 0.44) 100%);
            image-rendering: url(${memoji});
            content: url(${memoji});`};
    }

    .titleLine {
        ${(props) => (props.theme.purpleColor !== "light") ? css`background-image: url(${memoji}), 
        linear-gradient(180deg, #08C8F6 0%, rgba(124, 136, 255, .6) 100%);` : css`background-image: url(${memoji}),
        linear-gradient(180deg, #DBC6FF 31.25%, rgba(249, 197, 209, 0.44) 100%);`};
    }

    .iconProvider {
        color: ${(props) => props.theme.iconColor};
        transition: all .5s ease;
    }

    .icon:hover {
        ${(props) => {
            switch (props.theme.purpleColor) {
                case "dark":
                    return css`
                        fill: #08C8F6;
                    `;
                default:
                    return css`
                        fill: #DBC6FF;
                    `;
            }
        }}
    }

    .themeIcons {
        fill: ${(props) => props.theme.fontColor};
        transition: all .5s ease;
    }

    .themeIcons:hover {
        ${(props) => {
            switch (props.theme.purpleColor) {
                case "dark":
                    return css`
                        fill: #08C8F6;
                    `;
                default:
                    return css`
                        fill: #DBC6FF;
                    `;
            }
        }}
        transition: all .5s ease;
    }

    .navLink {
        color: ${(props) => props.theme.fontColor};
        transition: all .5s ease;
        &:hover {
            ${(props) => {
                    switch (props.theme.purpleColor) {
                        case "dark":
                            return css`
                                color: #08C8F6;
                            `;
                        default:
                            return css`
                                color: #DBC6FF;
                            `;
                    }
                }}
        }
        /* Fade in */
        /* &::after {
                top: 23px;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 0.2em;
                ${(props) => {
                    switch (props.theme.purpleColor) {
                        case "dark":
                            return css`
                                background: linear-gradient(180deg, #08C8F6 0%, rgba(124, 136, 255, .6) 100%);
                            `;
                        default:
                            return css`
                                background: linear-gradient(180deg, #DBC6FF 31.25%, rgba(249, 197, 209, 0.44) 100%);
                            `;
                    }
                }}
                opacity: 0;
                transition: opacity 300ms, transform 300ms;
        }

        &:after {
            content: '';
            opacity: 1;
            transform: scaleX(0);
            bottom: 0;
            left: 0;
            transform-origin: center;
        }

        &:hover::after,
        &:focus::after {
            transform: scaleX(.55);

        } */
    }
`;