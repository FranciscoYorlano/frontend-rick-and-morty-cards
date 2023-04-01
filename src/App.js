// React router
import { Routes, Route } from "react-router-dom";

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
import UserCards from "./pages/UserCards";
import UserFavorites from "./pages/UserFavorites";

function App() {
    const user = "user";

    return (
        <div className="bg-purple-950 text-gray-300 min-w-screen min-h-screen font-sans">
            <Nav />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/cards" element={<AllCards />} />
                <Route path={`/${user}/cards/:id`} element={<CardDetail />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path={`/${user}/cards`} element={<UserCards />} />
                <Route
                    path={`/${user}/favorites`}
                    element={<UserFavorites />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
