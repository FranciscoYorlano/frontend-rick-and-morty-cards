// React router
import { Routes, Route } from "react-router-dom";

// Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

// Pages
import About from "./pages/About";
import AllCards from "./pages/AllCards";
import CardDetail from "./pages/CardDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserFavorites from "./pages/UserFavorites";

import DropDown from "./components/DropDown";

function App() {
    const user = "user";
    // =========== state
    const [isSignIn, setIsSignIn] = useState(true);

    // =========== hooks
    const navigate = useNavigate();

    // =========== handlers

    // Sign In

    // Sign Up

    // Add favorite

    // Remove favorite

    //

    return (
        <div className="bg-slate-100 text-black">
            {isSignIn ? <Nav /> : navigate("/signin")}

            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/cards" element={<AllCards />} />
                <Route path={`/detail/:id`} element={<CardDetail />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route
                    path={`/${user}/favorites`}
                    element={<UserFavorites />}
                />

                <Route path="/dropdown" element={<DropDown />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
