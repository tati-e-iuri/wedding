import {ReactNode, useState} from "react";
import {colors, Navbar} from "./Navbar.tsx";

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout = ({children}: MainLayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="min-h-screen relative w-screen " style={{backgroundColor: colors.background}}>
            <Navbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            {children}
        </div>
    );
};

