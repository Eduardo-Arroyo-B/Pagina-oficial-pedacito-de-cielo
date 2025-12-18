import LogoPedacito from "../assets/PDC - LogoSello 1.png";

export default function Header() {
    return (
        <header className="bg-[#00C6AE]">
            <div className="max-w-full mx-auto px-4">
                <div className="flex items-center justify-between h-20">

                    <div className="flex items-center gap-3">
                        <img
                            src={LogoPedacito}
                            alt="Logo De Pedacito De Cielo"
                            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                        />
                        <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                            Pedacito de Cielo
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8 text-white">
                        <a className="cursor-pointer text-sm lg:text-base hover:opacity-80">Inicio</a>
                        <a className="cursor-pointer text-sm lg:text-base hover:opacity-80">Talleres</a>
                        <a className="cursor-pointer text-sm lg:text-base hover:opacity-80">Blog</a>
                        <a className="cursor-pointer text-sm lg:text-base hover:opacity-80">Equipo</a>
                    </nav>

                    {/* Menu hamburguesa para movil */}
                    <div className="md:hidden">
                        <button className="text-white text-2xl">☰</button>
                    </div>

                </div>
            </div>
        </header>
    );
}
