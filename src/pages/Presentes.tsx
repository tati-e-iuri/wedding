import {colors} from "../components/Sidebar.tsx";
import {useState} from "react";
import {MainLayout} from "../components/MainLayout.tsx";

interface Gift {
    id: number;
    name: string;
    description: string;
    value: number;
    image: string;
}

const gifts: Gift[] = [
    {
        id: 1,
        name: "Kit Cozinha Básico",
        description: "Conjunto essencial para começar",
        value: 50,
        image: "placeholder.png"
    },
    {
        id: 2,
        name: "Jogo de Toalhas",
        description: "Kit completo para o novo lar",
        value: 100,
        image: "placeholder.png"
    },
    {
        id: 3,
        name: "Jogo de Panelas",
        description: "Conjunto premium antiaderente",
        value: 200,
        image: "placeholder.png"
    },
    {
        id: 4,
        name: "Jogo de Jantar",
        description: "Conjunto para 6 pessoas",
        value: 350,
        image: "placeholder.png"
    },
    {
        id: 5,
        name: "Robô Aspirador",
        description: "Limpeza inteligente",
        value: 500,
        image: "placeholder.png"
    },
    {
        id: 6,
        name: "Kit Eletrodomésticos",
        description: "Conjunto completo para casa",
        value: 1000,
        image: "placeholder.png"
    },
    {
        id: 7,
        name: "Outro Valor",
        description: "Escolha um valor personalizado",
        value: 0,
        image: "placeholder.png"
    }
];

export const GiftsPage = () => {
    const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const pixKey = "12345678900";

    const handleGiftSelect = (gift: Gift) => {
        setSelectedGift(gift);
        setIsModalOpen(true);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(pixKey);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <MainLayout>
            <div className="mx-auto pt-16 pb-8">
                <div className="max-w-6xl mx-auto p-4 space-y-8 mx-auto">
                    <h1 className="text-4xl md:text-6xl font-cursive text-center mb-12"
                        style={{color: colors.secondary}}>
                        Lista de Presentes
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl gap-8 mx-auto">
                        {gifts.map((gift) => (
                            <div key={gift.id}
                                 className="bg-white rounded-2xl mr-4 shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <div className="relative">
                                    <img
                                        src={gift.image}
                                        alt={gift.name}
                                        className="w-full h-56 object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md">
                                        <span className="font-semibold" style={{color: colors.secondary}}>
                                            {gift.value ? `R$ ${gift.value}` : "Personalizado"}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-semibold" style={{color: colors.secondary}}>
                                        {gift.name}
                                    </h3>
                                    <p className="text-gray-600">{gift.description}</p>
                                    <button
                                        onClick={() => handleGiftSelect(gift)}
                                        className="w-full p-4 rounded-lg text-white font-semibold transition-all duration-300 hover:opacity-90"
                                        style={{backgroundColor: colors.secondary}}>
                                        Presentear
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isModalOpen && selectedGift && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl max-w-md w-full p-8 space-y-6">
                        <h3 className="text-2xl font-semibold text-center" style={{color: colors.secondary}}>
                            {selectedGift.name}
                        </h3>

                        <div className="text-center">
                            <p className="text-gray-600 mb-2">Valor: {selectedGift.value ? `R$ ${selectedGift.value}` : "Personalizado"}</p>
                            <p className="text-gray-600">Clique no botão abaixo para copiar a chave PIX</p>
                        </div>

                        <button
                            onClick={handleCopy}
                            className="w-full p-4 rounded-lg text-white font-semibold transition-all duration-300 hover:opacity-90"
                            style={{backgroundColor: colors.secondary}}>
                            {copied ? "Copiado!" : "Copiar Chave PIX"}
                        </button>

                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="w-full p-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300">
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </MainLayout>
    );
};
