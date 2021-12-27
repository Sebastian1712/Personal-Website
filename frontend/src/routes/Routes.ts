import Experiences from "../pages/Experiences/Experiences";
import Home from "../pages/Home/Home";
import Self from "../pages/Self/Self";

export const routes = [
    {
        path: "/Personal-Website",
        component: Home
    },
    {
        path: "/experiences",
        component: Experiences
    },
    {
        path: "/self",
        component: Self
    }
];
