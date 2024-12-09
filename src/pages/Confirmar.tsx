import {Check} from "lucide-react";
import {colors} from "../components/Sidebar.tsx";
import {useState} from "react";
import {MainLayout} from "../components/MainLayout.tsx";

export const ConfirmPresencePage = () => {
    const [formData, setFormData] = useState({
        name: "",
        guestName: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your submission logic here
        console.log(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <MainLayout>
            <div className="mx-auto pt-16">
                <div className="max-w-2xl mx-auto p-4 space-y-8">
                    <h1 className="text-4xl md:text-6xl font-cursive text-center"
                        style={{color: colors.secondary}}>
                        Confirmar Presença
                    </h1>

                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block mb-2 font-medium" style={{color: colors.text}}>
                                    Seu Nome*
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-4 border rounded-lg"
                                    placeholder="Digite seu nome completo"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium" style={{color: colors.text}}>
                                    Nome do Acompanhante
                                </label>
                                <input
                                    type="text"
                                    name="guestName"
                                    value={formData.guestName}
                                    onChange={handleChange}
                                    className="w-full p-4 border rounded-lg"
                                    placeholder="Nome do seu acompanhante (opcional)"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium" style={{color: colors.text}}>
                                    Mensagem aos Noivos
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-4 border rounded-lg h-32"
                                    placeholder="Deixe uma mensagem especial (opcional)"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full p-4 rounded-lg text-white font-semibold flex items-center justify-center gap-2"
                                style={{backgroundColor: colors.secondary}}>
                                <Check size={20} />
                                Confirmar Presença
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};
