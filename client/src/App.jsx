import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import Button from "./components/common/Button/Button";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import MainEvents from "./components/MainEvents/MainEvents";
// import Faq from "../src/components/Faq/Faq";
import Homepage from "./pages/Homepage";
import SingleEventPage from "./components/SingleEventPage/SingleEventPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import Register from "./components/common/Register/Register";
import ContactUs from "./components/ContactUs/ContactUs";
import Loading from "./components/common/Loading/Loading";

const App = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        // console.log(location);
    }, [location]);
    const [loading, setLoading] = useState(true);

    setTimeout(() => setLoading(false), 1500);
    useEffect(() => {});
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/events" element={<MainEvents />} />
                        <Route
                            path="/events/:eventId"
                            element={<SingleEventPage />}
                        />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/team" element={<TeamPage />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/contact" element={<ContactUs />} />
                        {/* <Route path="*" element={<NotFound />}></Route> */}
                        {/* <Route path="/" element={<Landing />}></Route>  */}
                        {/* <Route path="/" element={<Faq />}></Route>  */}
                    </Routes>
                    <Footer />
                    {/* <Button /> */}
                    {/* </div> */}
                </>
            )}
        </>
    );
};

export default App;
