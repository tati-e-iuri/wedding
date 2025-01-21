import {  RouterProvider, createBrowserRouter, useRouteError } from "react-router-dom";
import {HomePage} from "./pages/Home.tsx";
import {AboutPage} from "./pages/Sobre.tsx";
import {GiftsPage} from "./pages/Presentes.tsx";
import {LocationPage} from "./pages/Local.tsx";
import {ConfirmPresencePage} from "./pages/Confirmar.tsx";


const BubbleError = () => {
    const error = useRouteError();
    throw error;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <BubbleError />,
    },
    {
        path: "/sobre",
        element: <AboutPage />,
        errorElement: <BubbleError />,
    },{
        path: "/presentes",
        element: <GiftsPage />,
        errorElement: <BubbleError />,
    },{
        path: "/local",
        element: <LocationPage />,
        errorElement: <BubbleError />,
    },{
        path: "/confirmar",
        element: <ConfirmPresencePage />,
        errorElement: <BubbleError />,
    },

],{
    basename: "/wedding"
});

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
