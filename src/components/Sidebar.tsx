import { Menu, X, Heart, Gift, MapPin, Check, Home } from 'lucide-react';
import {NavLink} from "react-router-dom";
export const colors = {
    primary: "#FFB6C1", // Rosa claro
    secondary: "#DAA520", // Dourado
    background: "#FFF5F5", // Rosa bem claro
    text: "#4A4A4A", // Cinza escuro
};

/** Sidebar Component */
export const Sidebar = ({ isOpen, setIsOpen }: any) => {
    const menuItems = [
        { icon: Home, text: "Home", to: "/" },
        { icon: Heart, text: "Sobre os Noivos", to: "/sobre" },
        { icon: Gift, text: "Lista de Presentes", to: "/presentes" },
        { icon: MapPin, text: "Local da Festa", to: "/local" },
        { icon: Check, text: "Confirmar Presença", to: "/confirmar" },
    ];

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                     onClick={() => setIsOpen(false)} />
            )}

            <button className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md md:hidden"
                    onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform 
                           transition-transform duration-300 ease-in-out z-50
                           ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                           md:translate-x-0`}
                 style={{ backgroundColor: colors.background }}>
                <div className="p-8">
                    <h1 className="text-4xl font-bold mb-10 text-center font-cursive"
                        style={{ color: colors.secondary }}>
                        Tati & Iuri
                    </h1>
                    <ul className="space-y-6">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.to}
                                   className="flex items-center p-3 rounded-lg hover:bg-white
                                            transition-colors duration-200"
                                   style={{ color: colors.text }} >
                                    <item.icon size={20}
                                               className="mr-4"
                                               style={{ color: colors.primary }} />
                                    {item.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

