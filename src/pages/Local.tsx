import {MapPin} from "lucide-react";
import {colors} from "../components/Navbar.tsx";
import {MainLayout} from "../components/MainLayout.tsx";

export const LocationPage = () => {
    const location = {
        title: "Espaço Villa Real",
        address: "Rua Exemplo, 123 - Bairro, Cidade - SP",
        coordinates: {
            lat: -23.550520,
            lng: -46.633308
        }
    };

    const handleOpenMaps = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`;
        window.open(url, '_blank');
    };

    return (
        <MainLayout>
            <div className="mx-auto pt-16">
                <div className="max-w-4xl mx-auto p-4 space-y-8">
                    <h1 className="text-4xl md:text-6xl font-cursive text-center"
                        style={{color: colors.secondary}}>
                        Local da Festa
                    </h1>

                    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                        <h2 className="text-2xl font-semibold text-center" style={{color: colors.secondary}}>
                            {location.title}
                        </h2>
                        <p className="text-center text-lg" style={{color: colors.text}}>
                            {location.address}
                        </p>

                        <div className="aspect-video w-full overflow-hidden rounded-lg">
                            <img src={"mapa.png"}
                            />
                        </div>

                        <button
                            onClick={handleOpenMaps}
                            className="w-full p-4 rounded-lg text-white font-semibold flex items-center justify-center gap-2"
                            style={{backgroundColor: colors.secondary}}>
                            <MapPin size={20} />
                            Abrir no Google Maps
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};
