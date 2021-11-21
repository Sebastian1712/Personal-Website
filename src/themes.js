import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: "#F7F2EC",
    fontColor: "#000",
    purpleColor: "#DBC6FF",
    iconColor: "#000"
}

export const darkTheme = {
    body: "#0C0B0B",
    fontColor: "#fff",
    purpleColor: "#7736FF",
    iconColor: "#fff"
}

export const GlobalStyles = createGlobalStyle `
    body {
        background-color: ${(props) => props.theme.body};
    }

    .circleFrame {
        background-color: ${(props) => props.theme.purpleColor};
    }

    .titleLine {
        background-color: ${(props) => props.theme.purpleColor};
    }

    .iconProvider {
        color: ${(props) => props.theme.iconColor};
        transition: all .5s ease;
    }

    .icon:hover {
        fill: ${(props) => props.theme.purpleColor};
        transition: all .5s ease;
    }

    .themeIcons {
        fill: ${(props) => props.theme.fontColor};
    }

    .themeIcons:hover {
        fill: ${(props) => props.theme.purpleColor};
        transition: all .5s ease;
    }

    .navLink {
        color: ${(props) => props.theme.fontColor};

        /* Fade in */
        &::after {
                top: 23px;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 0.2em;
                background-color: ${(props) => props.theme.purpleColor};
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
        }
    }
`;