import React from 'react'
import SectionAnchorFooter from './SectionAnchorFooter';
import { email, insta, linkedin, phone } from '../assets';

function Footer() {
  return (
    <footer className="self-stretch flex flex-col items-center justify-start" id="Contacto">
      <SectionAnchorFooter />
      <div className="self-stretch bg-neutral-900 flex flex-col items-center justify-center py-2.5 px-5 gap-[10px] text-center text-29xl text-white font-body-lg-regular lg:pb-5 lg:box-border md:pb-5 md:box-border sm:h-auto sm:gap-[0px] sm:pt-0 sm:px-5 sm:pb-5 sm:box-border">
        <div className="overflow-hidden flex flex-col items-center justify-start py-[22px] px-[69px] gap-[10px]">
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[60px] font-semibold font-inherit sm:text-13xl">
            Contáctanos
          </h1>
          <div className="relative text-5xl leading-[32px] font-medium text-lightgray sm:text-sm">
            Escríbenos a nuestro email o llámanos si prefieres
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-center p-5 gap-[100px] text-xl md:flex-col md:items-center md:justify-center sm:flex-col sm:gap-[40px] sm:items-center sm:justify-center sm:pl-2.5 sm:pr-2.5 sm:pb-5 sm:box-border">
          <a
            className="[text-decoration:none] flex-1 rounded-xl bg-neutral-800 overflow-hidden flex flex-col items-center justify-start py-[22px] px-5 gap-[15px] text-[inherit] md:flex-[unset] md:self-stretch sm:self-stretch sm:w-auto sm:h-auto sm:cursor-auto sm:flex-[unset]"
            href="tel:+34 686603421" target="_blank"
          >
            <div className="self-stretch h-[100px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[11px] px-px box-border gap-[15px]">
              <img
                className="relative w-16 h-16 object-contain"
                alt=""
                src={phone} />
              <div className="relative leading-[28px] font-medium sm:leading-[18px]">
                Teléfono
              </div>
            </div>
            <div className="relative text-5xl leading-[32px] font-medium sm:text-xl">
              +34 686603421
            </div>
          </a>
          <a
            className="[text-decoration:none] flex-1 rounded-xl bg-neutral-800 overflow-hidden flex flex-col items-center justify-start py-[22px] px-5 gap-[15px] text-[inherit] md:flex-[unset] md:self-stretch sm:self-stretch sm:w-auto sm:h-auto sm:flex-[unset]"
            href="mailto:core@core.com?subject=Contacto a través de web" target="_blank">
            <div className="self-stretch h-[100px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[11px] px-px box-border gap-[15px]">
              <img
                className="relative w-16 h-16 object-contain"
                alt=""
                src={email} />
              <div className="relative leading-[28px] font-medium sm:text-lg">
                Email
              </div>
            </div>
            <div className="relative text-5xl leading-[32px] font-medium sm:text-xl">
              core@core.core
            </div>
          </a>
        </div>
      </div>
      <footer className="self-stretch bg-neutral-800 flex flex-row items-center justify-center py-[15px] px-[25px] text-left text-lg text-white font-body-lg-regular">
        <div className="relative leading-[28px] md:text-sm sm:text-[10px]">
          © 2023 Desarrollado por Angel Sanchez. Propiedad de CORE. All rights
          reserved
        </div>
        <div className="self-stretch flex-1 flex flex-row items-center justify-end gap-[25px]">
          <a href="https://www.instagram.com/" target="_blank">
            <img
              className="relative w-10 h-10 object-contain"
              alt=""
              src={linkedin} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <img
              className="relative w-10 h-10 object-contain"
              alt=""
              src={insta} />
          </a>
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
