import ImageFigures from "../assets/Cifras de niños.png";

export default function Figures() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-full mx-auto px-6 text-center">

                <h2 className="font-bold">
                <span className="text-[#FADA63] text-2xl sm:text-3xl lg:text-4xl">
                    Algunas Cifras de{" "}
                </span>
                <span className="text-[#F48C06] text-2xl sm:text-3xl lg:text-4xl">
                    México
                </span>
                </h2>

                <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#696984] max-w-3xl mx-auto">
                    Algunos de los números actuales de niños y niñas en situaciones críticas
                </p>

                <div className="mt-16 flex justify-center">
                    <img
                        src={ImageFigures}
                        alt="Imágenes de cifras de niños"
                        className="w-full max-w-7xl object-contain"
                    />
                </div>

            </div>
        </section>
    );
}
