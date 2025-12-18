import Circulo72 from "../assets/decorations/Ellipse 12.png";
import Circulo30 from "../assets/decorations/Ellipse 13.png";

export default function VideoInfo() {
    return (
        <section className="py-28 bg-white">
            <div className="max-w-full mx-auto px-6 lg:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* TEXTO */}
                    <div className="space-y-10 max-w-xl">
                        <img
                            src={Circulo72}
                            alt="Imagen circulo 72 x 72"
                            className="w-20 h-20"
                        />

                        <p className="text-lg sm:text-xl lg:text-2xl text-[#696984] leading-relaxed">
                            En este video, Verónica Osuna Directora de Pedacito de Cielo,
                            nos habla un poco sobre Pedacito de Cielo. Gracias a “Soy TJ”
                            por regalarnos un espacio en su plataforma para hablar de
                            Pedacito de Cielo.
                        </p>

                        <img
                            src={Circulo30}
                            alt="Imagen circulo 30 x 30"
                            className="w-10 h-10 ml-auto"
                        />
                    </div>

                    <div className="w-full">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
                            <iframe
                                src="https://www.youtube.com/embed/tw5aKvKbMQU"
                                title="Video de pedacito de cielo"
                                className="absolute inset-0 w-full h-full"
                                frameBorder="0"
                                allowFullScreen
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
