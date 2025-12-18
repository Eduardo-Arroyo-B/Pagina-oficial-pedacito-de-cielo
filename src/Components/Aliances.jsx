import ImagenBoys from "../assets/header-pic.png";

export default function Aliances() {
    return (
        <section className="min-h-screen bg-[#00C6AE] flex items-center rounded-b-[140px] sm:rounded-b-[200px] lg:rounded-b-[320px]">

            <div className="w-full">
                <div className="max-w-full mx-auto px-6 lg:px-12 py-28">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div className="space-y-10">
                            <h1 className="font-bold leading-tight">
                                <span className="block text-[#FF6319] text-3xl sm:text-4xl lg:text-5xl">
                                    Nuestro compromiso:
                                </span>

                                <span className="block text-[#FADA63] text-4xl sm:text-5xl lg:text-6xl">
                                    cada niño y niña, un pedacito de cielo
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl lg:text-2xl text-white max-w-2xl">
                                Somos un Centro de Convivencia Integral, dedicados a fomentar
                                espacios libres de violencia para niños, niñas y familias en
                                situaciones de riesgo.
                            </p>
                        </div>

                        <div className="relative flex justify-center lg:justify-end">
                            <img
                                src={ImagenBoys}
                                alt="Imagen de niños jugando"
                                className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
