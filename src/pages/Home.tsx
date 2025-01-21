import {colors} from "../components/Sidebar.tsx";
import {MainLayout} from "../components/MainLayout.tsx";
import {Check, Gift, Heart, MapPin} from "lucide-react";
import {NavLink} from "react-router-dom";
import {env} from "../config.ts";
//
// const images = [
//     "placeholder.png",
//     "placeholder.png",
//     "placeholder.png"
// ];

// const ImageCarousel = () => {
//     const [currentImage, setCurrentImage] = useState(0);
//
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentImage((prev) => (prev + 1) % images.length);
//         }, 5000);
//         return () => clearInterval(timer);
//     }, []);
//
//     return (
//         <div className="aspect-video max-w-3xl mx-auto relative overflow-hidden rounded-2xl shadow-lg">
//             <div className="relative h-full w-full">
//                 {images.map((src, index) => (
//                     <img
//                         key={index}
//                         src={src}
//                         alt={`Foto ${index + 1}`}
//                         className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
//                             currentImage === index ? "opacity-100" : "opacity-0"
//                         }`}
//                     />
//                 ))}
//             </div>
//
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//                 {images.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentImage(index)}
//                         className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                             currentImage === index
//                                 ? "bg-white w-4"
//                                 : "bg-white/50 hover:bg-white/75"
//                         }`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

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

    const name = env.NAME

    return (
        <MainLayout>
                <div className="md:ml-64 pt-16 pb-16">
                    <section className="space-y-12 p-4 max-w-full">
                        <h1 className="text-4xl md:text-6xl font-cursive text-center"
                            style={{color: colors.secondary}}>
                            Tati & Iuri {name}
                            <div className="text-lg md:text-xl mt-4 font-sans" style={{color: colors.text}}>
                                15 de Dezembro de 2024
                            </div>
                        </h1>
                        <div className="max-w-full overflow-hidden ">
                            <img
                                src={"tatieiuri.jpg"}
                                alt={"Foto"}

                                // className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                                //     currentImage === index ? "opacity-100" : "opacity-0"
                                // }`}
                            />
                            {/*<ImageCarousel/>*/}
                        </div>
                    </section>

                    <section className="max-w-6xl mx-auto mt-16 px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {sections.map((section, index) => (
                                <NavLink
                                    key={index}
                                    to={section.to}
                                    className="group bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="flex items-start space-x-4">
                                        <section.icon
                                            size={32}
                                            className="transition-colors duration-300"
                                            style={{color: colors.primary}}
                                        />
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2"
                                                style={{color: colors.secondary}}>
                                                {section.title}
                                            </h3>
                                            <p className="text-gray-600">
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
