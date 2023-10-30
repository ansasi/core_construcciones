import React from "react";
import { logo } from "../assets";


function NavBar() {
    // // This function checks if the device is a mobile device or a tablet
    // function checkDevice() {
    //     const isMobileDeviceOrTablet = window.matchMedia(
    //         "(max-width: 1024px)"
    //     ).matches;
    //     return isMobileDeviceOrTablet;
    // }

    // <button className="cursor-pointer border-none bg-transparent shrink-0 lg:visible items-center" onClick={() => setMenuVisible(!menuVisible)}>
    //     <img className="flex w-[60px] h-[60px] md:w-[50px] md:h-[50px] sm:w-[30px] sm:h-[30px] px-10" alt="" src={menu} />
    // </button>

    return (
        <header className="self-stretch fixed top-0 left-0 bg-white overflow-hidden flex flex-row items-center justify-between lg:justify-center py-2 px-4 w-full h-[66px] sm:h-[40px] z-50" id="NavBar">
            <div className="self-stretch flex flex-row items-center">
                <img className="w-[256px] sm:w-[150px] object-contain" alt="" src={logo} />
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-end mr-10 gap-5 sm:gap-0 lg:invisible">
                <nav className="overflow-hidden flex flex-row items-center gap-8 lg:hidden text-decoration-none">
                    <a href="#Inicio" className="cursor-pointer py-1 px-2 no-underline">
                        <div className="text-lg leading-[28px] font-semibold font-body-lg-regular text-neutral-900 text-left">
                            INICIO
                        </div>
                    </a >
                    <a href="#AreaNegocio" className="cursor-pointer py-1 px-2 no-underline">
                        <div className="text-lg leading-[28px] font-semibold font-body-lg-regular text-neutral-900 text-left">
                            ÁREAS DE NEGOCIO
                        </div>
                    </a>
                    <a href="#TrabajaConNosotros" className="cursor-pointer py-1 px-2 no-underline">
                        <div className="text-lg leading-[28px] font-semibold font-body-lg-regular text-neutral-900 text-left">
                            TRABAJA CON NOSOTROS
                        </div>
                    </a>
                    <a href="#Contacto" className="cursor-pointer py-1 px-2 no-underline">
                        <div className="text-lg leading-[28px] font-semibold font-body-lg-regular text-neutral-900 text-left">
                            CONTACTO
                        </div>
                    </a>
                </nav >
            </div >
        </header >
    );
}

export default NavBar;
