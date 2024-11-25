import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./components/Header";
import Home from "./components/home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/country',
                element: <div>country</div>,
            },
        ],
    },
    
])
const root = createRoot(document.querySelector('#root'))
root.render(
<RouterProvider router={router} />)

