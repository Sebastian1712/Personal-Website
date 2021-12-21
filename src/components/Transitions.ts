export const pageTransitions = {
    initial: {
        opacity: 0,
        x: "-8vw"
    },
    visible: {
        opacity: 1,
        x: 0
    },
    hidden: {
        opacity: 0,
        y: "-100vh"
    }
};

export const transitionSettings = {
    type: "easeIn",
    duration: .3
};