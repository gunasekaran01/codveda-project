import { useEffect, useState } from "react";

import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {

            setLoading(false);

        }, 1800);

        return () => clearTimeout(timer);

    }, []);

    if (loading) {

        return <LoadingScreen />;

    }

    return (

        <>

            <ScrollProgress />

            <Navbar />

            <Hero />

            <Features />

            <Services />

            <Stats />

            <Testimonials />

            <Contact />

            <Footer />

            <BackToTop />

        </>

    );

}

export default App;