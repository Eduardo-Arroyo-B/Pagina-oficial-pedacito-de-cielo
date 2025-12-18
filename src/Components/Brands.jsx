import Marcas from "../assets/Imagenes de marcas.png";

export default function Brands() {
    return (
        <section className="bg-white py-24">
            <div className="max-w-full mx-auto px-6 text-center">

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#696984]">
                    Nuestras Alianzas
                </h2>

                <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#696984] max-w-3xl mx-auto">
                    Gracias a todas nuestras alianzas, Pedacito de Cielo sigue conformando
                    un ecosistema que suma cada día a la vida de niños, niñas, adolescentes
                    y sus familias.
                </p>

                <div className="mt-16 flex justify-center">
                    <img
                        src={Marcas}
                        alt="Imagen de marcas de Pedacito de Cielo"
                        className="w-full max-w-7xl object-contain"
                    />
                </div>

            </div>
        </section>
    );
}
