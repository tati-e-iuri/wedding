import {colors} from "../components/Sidebar.tsx";
import {MainLayout} from "../components/MainLayout.tsx";
import {Check, Gift, Heart, MapPin} from "lucide-react";
import {NavLink} from "react-router-dom";

export const HomePage = () => {
    const sections = [
        {
            icon: Heart,
            title: "Nossa História",
            description: "Conheça um pouco sobre nós",
            to: "/sobre"
        },
        {
            icon: Gift,
            title: "Lista de Presentes",
            description: "Escolha seu presente para os noivos",
            to: "/presentes"
        },
        {
            icon: MapPin,
            title: "Local da Festa",
            description: "Como chegar ao nosso grande dia",
            to: "/local"
        },
        {
            icon: Check,
            title: "Confirme sua Presença",
            description: "Faça parte deste momento especial",
            to: "/confirmar"
        }
    ];

    return (
        <MainLayout>
            <div className="w-full">
                {/* Banner para mobile */}
                <div className="relative md:hidden">
                    <div className="w-full h-[40vh] relative overflow-hidden">
                        {/* Flor posicionada absolutamente em relação ao container */}
                        <img
                            src={`flor-2.png`}
                            alt="Decoração"
                            className="absolute top-2 right-0 w-44 h-auto z-10"
                        />

                        {/* Imagem principal com corte no topo */}
                        <img
                            src={`tatieiuri.jpg`}
                            alt={"Foto"}
                            className="w-full h-[80vh] object-cover object-[center_10%] absolute -top-24"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>

                        {/* Texto centralizado na parte inferior */}
                        <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center">
                            <h1 className="text-5xl font-cursive text-[#FCFB1B] mb-2">
                                Tatá & Iuri
                            </h1>

                        </div>
                    </div>
                    <div className="text-lg font-sans text-black text-center">
                        15 de Dezembro de 2024
                    </div>
                </div>

                {/* Versão desktop */}
                <div className="hidden md:block mx-auto px-4 pt-16 pb-4 md:ml-64">
                <section className="space-y-12 max-w-4xl mx-auto">
                        <h1 className="text-6xl font-cursive text-center" style={{color: colors.secondary}}>
                            Tatá & Iuri
                            <div className="text-xl mt-4 font-sans" style={{color: colors.text}}>
                                15 de Dezembro de 2024
                            </div>
                        </h1>
                        <div className="max-w-4xl mx-auto relative h-[400px]"> {/* Define uma altura fixa */}
                            <img
                                src={`flor-2.png`}
                                alt="Decoração"
                                className="absolute top-4 right-4 md:w-64 lg:w-80 h-auto z-10"
                            />
                            <img
                                src={`tatieiuri.jpg`}
                                alt={"Foto"}
                                className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                            />
                        </div>
                    </section>
                </div>


                {/* Seção de cards */}
                <section className="max-w-6xl mx-auto mt-8 md:mt-16 px-4 md:pl-64">
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
                        {sections.map((section, index) => (
                            <NavLink
                                key={index}
                                to={section.to}
                                className="group bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4">
                                    <section.icon
                                        size={24}
                                        className="transition-colors duration-300 mb-2 md:mb-0"
                                        style={{color: colors.primary}}
                                    />
                                    <div className="text-center md:text-left">
                                        <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-2"
                                            style={{color: colors.secondary}}>
                                            {section.title}
                                        </h3>
                                        <p className="text-xs md:text-base text-gray-600 hidden md:block">
                                            {section.description}
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};
