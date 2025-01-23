import { Menu, Heart, Gift, MapPin, Check, Home } from 'lucide-react';
import { NavLink } from "react-router-dom";

export const colors = {
    primary: "#394831",
    secondary: "#C6CFBE",
    background: "#C6CFBE",
    text: "#4A4A4A",
};

export const Navbar = ({ isOpen, setIsOpen } : any) => {
    const menuItems = [
        { icon: Home, text: "Home", to: "/home" },
        { icon: Heart, text: "Sobre os Noivos", to: "/sobre" },
        { icon: Gift, text: "Lista de Presentes", to: "/presentes" },
        { icon: MapPin, text: "Local da Festa", to: "/local" },
        { icon: Check, text: "Confirmar Presença", to: "/confirmar" },
    ];

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile navbar */}
            <div className="fixed top-0 left-0 right-0 h-16 bg-[#C6CFBE] shadow-md flex items-center justify-between px-4 z-50 md:hidden">
                <span className="text-2xl font-sans font-bold" style={{ color: colors.primary }}>
                    T & I
                </span>
                <button
                    className="p-2 rounded-lg absolute right-4 top-1/2 transform -translate-y-1/2 z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu size={24} className="text-black"/>
                </button>
            </div>

            {/* Desktop navbar */}
            <div className="hidden md:flex fixed top-0 left-0 right-0 h-20 bg-transparent items-center justify-between px-8 z-50">
                <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
                    <span className="text-2xl font-sans font-bold text-[#394831]">
                        T & I
                    </span>
                    <div className="flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.to}
                                className="flex items-center text-[#394831] hover:text-white transition-colors duration-200"
                            >
                                {item.text}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile drawer */}
            <nav
                className={`fixed top-16 left-0 h-[calc(100%-4rem)] w-64 shadow-lg transform 
                           transition-transform duration-300 ease-in-out z-50
                           ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                           md:hidden`}
                style={{ backgroundColor: colors.background }}
            >
                <div className="p-8">
                    <ul className="space-y-6">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.to}
                                    className="flex items-center p-3 rounded-lg hover:bg-white
                                             transition-colors duration-200"
                                    style={{ color: colors.text }}
                                >
                                    <item.icon
                                        size={20}
                                        className="mr-4"
                                        style={{ color: colors.primary }}
                                    />
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

export default Navbar;
