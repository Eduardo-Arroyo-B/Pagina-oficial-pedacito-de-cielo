import ImagenDonacion from "../assets/Imagen de donacion.png";

export default function Donations() {

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Haciendo click al boton");
    }

    return (
        <>
            <section className="max-w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 px-4 md:px-20 py-10 md:py-20 items-center">

                <div className="flex justify-center">
                    <img
                        src={ImagenDonacion}
                        alt="Imagen de donaciones"
                        className="w-full max-w-full md:max-w-md lg:max-w-lg object-contain"
                    />
                </div>

                <div className="text-center md:text-left">
                    <label className="text-[#2F327D] text-3xl md:text-5xl font-bold">
                        Apóyanos
                    </label>
                    <p className="text-[#696984] text-base md:text-lg lg:text-xl mt-4 md:mt-6 px-2 md:px-0">
                        Nuestra fundación se apoya de donaciones por los grandes corazones que nos apoyan. Si quieres poner tu pedacito de cielo, lo recibiremos con mucho gusto.
                    </p>
                    <div className="flex justify-center md:justify-start mt-6">
                        <button
                            className="w-40 h-14 md:h-16 rounded-full bg-gradient-to-r from-[#00C6AE] to-[#60A9F4] text-white text-lg md:text-xl shadow-xl"
                            onClick={onSubmit}
                        >
                            Donar
                        </button>
                    </div>
                </div>

            </section>
        </>
    )
}
