import Header from "./components/Header"
import "./App.css"
import { Outlet } from "react-router"
import Countrieslistshimmer from "./components/Countrieslistshimmer"

const App = () => {
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}
export default App