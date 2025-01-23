import { MainLayout } from "../components/MainLayout.tsx";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
    const calculateDaysRemaining = () => {
        const weddingDate = new Date('2025-07-19');
        const today = new Date();
        //@ts-ignore
        const diffTime = Math.abs(weddingDate - today);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    return (
        <MainLayout>
            <div className="w-full min-h-screen bg-[#C6CFBE] relative overflow-hidden">
                {/* Mobile Version */}
                <div className="md:hidden flex flex-col">
                    {/* Mobile content remains the same */}
                    <div className="relative w-full h-[70vh]">
                        <div className="absolute inset-0"
                             style={{
                                 clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)'
                             }}>
                            <img
                                src="wedding.jpg"
                                alt="Wedding"
                                className="w-full h-full object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-b from-[#C6CFBE]/80 via-transparent to-transparent"/>
                        </div>
                    </div>

                    <div className="px-6 -mt-4 bg-[#C6CFBE] relative z-10">
                        <div className="text-xl text-[#394831] mt-4">
                            19.07.2025 — Faltam {calculateDaysRemaining()} dias
                        </div>
                        <h1 className="text-5xl font-sans font-semibold text-white mb-8">
                            Tatá & Iuri
                        </h1>

                        <NavLink
                            to="/confirmar"
                            className="block w-full bg-[#394831] text-white text-center py-4 rounded-lg text-lg font-medium shadow-lg mb-8"
                        >
                            PRESENÇA
                        </NavLink>
                    </div>

                    <img
                        src="flor-2.png"
                        alt="Decorative Flower"
                        className="absolute right-0 bottom-[30vh] w-auto h-32 rotate-45 translate-x-6 pointer-events-none z-10"
                    />
                </div>

                {/* Desktop Version - Full Screen Hero */}
                <div className="hidden md:block">
                    <div className="relative h-screen">
                        {/* Full screen background image */}
                        <img
                            src="wedding.jpg"
                            alt="Wedding"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Overlay gradient */}
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-[#C6CFBE]/80 via-transparent to-black/30"/>

                        {/* Content Container */}
                        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                            <div className="mt-16"> {/* Spacing for navbar */}
                                <div className="text-2xl text-white mb-4">
                                    19.07.2025 — Faltam {calculateDaysRemaining()} dias
                                </div>
                                <h1 className="text-8xl font-sans font-semibold text-white mb-12">
                                    Tatá & Iuri
                                </h1>
                                <NavLink
                                    to="/confirmar"
                                    className="inline-block px-16 bg-[#394831] text-white text-center py-4 rounded-lg text-xl font-medium shadow-lg hover:bg-[#4a5c40] hover:text-white transition-colors"
                                >
                                    PRESENÇA
                                </NavLink>
                            </div>
                        </div>

                        {/* Decorative flower */}
                        <img
                            src="flor-2.png"
                            alt="Decorative Flower"
                            className="absolute right-0 bottom-0 w-96 h-auto "
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;
