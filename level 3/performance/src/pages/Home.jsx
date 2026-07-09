import { lazy, Suspense, useCallback, useState } from "react";

import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

import Loader from "../components/Loader";

import hero from "../assets/images/hero.webp";

const PageSections = lazy(() => import("../components/PageSections"));

function Home() {
    const [openModal, setOpenModal] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const openModalHandler = useCallback(() => setOpenModal(true), []);
    const closeModalHandler = useCallback(() => setOpenModal(false), []);
    const closeToastHandler = useCallback(() => setShowToast(false), []);

    return (

        <>

            <Header />

            <div className="docs-layout">

                <Sidebar />
                <main className="content">

                        <section id="overview" className="hero">

                            <img
                                src={hero}
                                alt="Nova UI hero illustration"
                                className="hero-image"
                                loading="eager"
                                decoding="async"
                                fetchPriority="high"
                                width="800"
                                height="450"
                            />

                            <h1>Nova UI</h1>

                            <p>

                                A modern React Component Library
                                built using reusable and customizable
                                components.

                            </p>

                            <div className="install-box">

                                npm install nova-ui

                            </div>

                        </section>

                        <Suspense fallback={<Loader />}>
                            <PageSections
                                openModal={openModal}
                                showToast={showToast}
                                setOpenModal={setOpenModal}
                                setShowToast={setShowToast}
                                closeModalHandler={closeModalHandler}
                                closeToastHandler={closeToastHandler}
                                openModalHandler={openModalHandler}
                            />
                        </Suspense>
                    </main>
            </div>

        </>

    );

}

export default Home;