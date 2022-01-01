import { createGlobalStyle, css } from "styled-components"
import memoji from './public/sebastianIcon.png'

export const lightTheme = {
    body: "#F7F2EC",
    fontColor: "#000",
    purpleColor: "light",
    iconColor: "#000",
    blueColor: "#DBC6FF"
}

export const darkTheme = {
    body: "#0C0B0B",
    fontColor: "#fff",
    purpleColor: "dark",
    iconColor: "#fff",
    blueColor: "#08C8F6"
}

export const GlobalStyles = createGlobalStyle `
    body {
        background-color: ${(props) => props.theme.body};
    }

    .circleFrame {
        ${(props) => (props.theme.purpleColor !== "light") ? 
        css`content:  url(${memoji});
            background: linear-gradient(180deg, #08C8F6 0%, rgba(8,200,246,1) 0%, rgba(124,136,255,0.72) 100%);
            image-rendering: url(${memoji});` 
        : css`background: linear-gradient(180deg, #DBC6FF 31.25%, rgba(249, 197, 209, 0.44) 100%);
            image-rendering: url(${memoji});
            content: url(${memoji});`};
    }

    .titleLine {
        ${(props) => (props.theme.purpleColor !== "light") ? css`background-image:
        linear-gradient(180deg, #08C8F6 0%, rgba(124, 136, 255, .6) 100%);` : css` background-image: linear-gradient(180deg, #DBC6FF 31.25%, rgba(249, 197, 209, 0.44) 100%);`};
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
                        transition: all .5s ease;
                    `;
                default:
                    return css`
                        fill: #DBC6FF;
                        transition: all .5s ease;
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
                        transition: all .5s ease;
                    `;
                default:
                    return css`
                        fill: #DBC6FF;
                        transition: all .5s ease;
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
    }

    .navLink-active {
        color: ${(props) => props.theme.blueColor};
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
    }

    .styleFrame {
        &:hover {
            border-color: ${(props) => (props.theme.purpleColor === "light") ? lightTheme.blueColor : darkTheme.blueColor};
            transition: all .5s ease-in;
            .icon {
                transition: all .5s ease-in;
                ${(props) => {
                    switch (props.theme.purpleColor) {
                        case "dark":
                            return css`
                                color: #08C8F6;
                                transition: all .5s ease-in;
                            `;
                        default:
                            return css`
                                color: #DBC6FF;
                                transition: all .5s ease-in;
                            `;
                    }
                }}
            }
        }
    }

    .styledFrameLink {
        size: 0;
        color: ${(props) => (props.theme.purpleColor === "light") ? "#161C1C" : "#F7F2EC"};
        text-decoration: none;
    }

    .experiencesLink {
        size: 0;
        color: ${(props) => (props.theme.purpleColor === "light") ? "#000" : "#fff"};
    }

    .activeExperiencesLink {
        display: block;
        ${(props) => (props.theme.purpleColor !== "light") ? 
            css`background: linear-gradient(180deg, #08C8F6 0%, rgba(8,200,246,1) 0%, rgba(124,136,255,0.72) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;` :
            css`background: linear-gradient(180deg, #DBC6FF 31.25%, rgba(249, 197, 209, 0.44) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;`
        }
    }
`;