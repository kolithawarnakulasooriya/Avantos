import {
    createBrowserRouter
} from "react-router";
import { Dashboard } from "./pages";

export default createBrowserRouter([
    {
        path: "/",
        Component: Dashboard,
    },
]);
