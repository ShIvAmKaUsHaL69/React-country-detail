import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/home";
import Error from "./components/error";
import CountryDetails from "./components/CountryDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/:country',
                element: <CountryDetails/>,
            },
        ],
    },
    
])
const root = createRoot(document.querySelector('#root'))
root.render(
<RouterProvider router={router} />)

