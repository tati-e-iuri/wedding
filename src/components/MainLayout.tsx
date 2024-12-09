import {ReactNode, useState} from "react";
import {colors, Sidebar} from "./Sidebar.tsx";

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen relative w-screen " style={{ backgroundColor: colors.background }}>
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            {children}
        </div>
    );
};

