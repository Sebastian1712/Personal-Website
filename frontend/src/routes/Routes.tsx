import { Route } from "react-router-dom";
import Experiences from "../pages/Experiences/Experiences";
import Jobs from "../pages/Experiences/components/Jobs";
import JobsBlog from "../pages/Experiences/components/JobsBlog";
import Projects from "../pages/Experiences/components/Projects";
import Home from "../pages/Home/Home";
import Self from "../pages/Self/Self";

export const routes = [
    {
        path: "/Personal-Website",
        component: Home,
        exact: true
    },
    {
        path: "/experiences",
        component: Experiences,
        routes: [
            {
                path: "/experiences",
                component: Jobs,
                exact: true
            },
            {
                path: "/experiences/projects",
                component: Projects,
                exact: false
            },
            {
                path: "/experiences/one",
                component: JobsBlog,
                exact: false
            }
        ]
    },
    {
        path: "/self",
        component: Self,
        exact: false
    }
];

export function RouteWithSubRoutes(route: any) {
    return (
      <Route
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes} exact={route.exact}/>
        )}
      />
    );
}
