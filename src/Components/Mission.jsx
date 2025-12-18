import ImagenPulseras from "../assets/Imagen pulseras niños.png";

export default function Mission() {
    return (
        <>
            <section className="py-20 md:py-40 px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div className="text-center md:text-left">
                    <label className="text-[#FADA63] text-3xl md:text-5xl font-bold">
                        Nuestra Misión
                    </label>
                    <p className="text-[#696984] text-base md:text-lg lg:text-xl mt-4 md:mt-6 px-2 md:px-0">
                        Crear y fomentar espacios libres de violencia para ofrecer a niños, niñas, adolescentes y familias en situación de riesgo, pobreza o marginación social, herramientas necesarias a través de la sana convivencia, programas artísticos, deportivos, educativos y psicológicos para fortalecer su autoestima.
                    </p>
                </div>

                <div className="flex justify-center">
                    <img
                        src={ImagenPulseras}
                        alt="Imagenes de niños mostrando su pulsera"
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
                    />
                </div>

            </section>
        </>
    );
}
