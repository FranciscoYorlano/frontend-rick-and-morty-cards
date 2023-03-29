// React router
import { Routes, Route } from "react-router-dom";

// Components
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

// Pages
import About from "./Pages/About";

function App() {
    return (
        <>
            <Nav />
            <div className="container bg-gray-200 min-w-full">
                <h1>App</h1>
            </div>
        </>
    );
}

export default App;
