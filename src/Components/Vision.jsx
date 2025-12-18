import Circle140 from "../assets/decorations/Circle 140 x 140.png";
import Circle30 from "../assets/decorations/Circulo 30 x 30.png";
import Imagenes2 from "../assets/2 imagenes sobrepuestas.png";

export default function Vision() {
    return (
        <section className="py-28 bg-white">
            <div className="max-w-full mx-auto px-6 lg:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="relative flex justify-center">

                        <img
                            src={Circle140}
                            alt="Imagen de circulo de 140"
                            className="absolute -top-10 -left-10 w-32 h-32"
                        />

                        <img
                            src={Circle30}
                            alt="Imagen de circulo de 30"
                            className="absolute top-10 right-10 w-6 h-6"
                        />

                        <img
                            src={Imagenes2}
                            alt="Imagen de 2 imagenes sobrepuestas"
                            className="relative w-full max-w-md lg:max-w-lg object-contain"
                        />
                    </div>

                    <div className="text-center lg:text-left space-y-6 max-w-xl mx-auto lg:mx-0">
                        <h2 className="text-[#FADA63] font-semibold text-3xl sm:text-4xl lg:text-5xl">
                            Nuestra Visión
                        </h2>

                        <p className="text-[#696984] text-base sm:text-lg lg:text-xl leading-relaxed">
                            Ser el Centro de Convivencia Integral de referencia local, que
                            refuerza patrones de conducta positivos e interrumpe los negativos
                            de niños, adolescentes y familias, crea conciencia del valor propio,
                            incide en el pleno desarrollo y fomenta un mejor ambiente para vivir.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
