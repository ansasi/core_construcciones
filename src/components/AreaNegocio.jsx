import React from 'react'
import SectionAnchor from './SectionAnchor';
import { areanegocio1, areanegocio2, areanegocio3, areanegocio4, residencial, terciario } from "../assets";

function AreaNegocio() {
  return (
    <section className="px-[50px]" id="AreaNegocio">
      <SectionAnchor />
      <div className="self-stretch bg-neutral-50 overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[60px] text-center text-29xl text-neutral-900 font-body-lg-regular sm:pl-5 sm:pr-5 sm:box-border">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[15px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-bold font-inherit sm:text-11xl">
            Áreas de Negocio
          </h1>
          <div className="self-stretch relative text-lg leading-[28px]">
            Tenemos expertos en numerosas áreas: industrial, comercial,
            residencial o urbanización, entre algunas de ellas.
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[30px] md:flex-row sm:flex-row">
          <img
            className="relative w-[400px] h-[400px] object-cover md:w-[250px] md:h-[250px] sm:w-[150px] sm:h-[150px]"
            alt=""
            src={areanegocio1}
            loading='lazy' />
          <img
            className="relative w-[400px] h-[400px] object-cover md:w-[250px] md:h-[250px] sm:h-[150px]"
            alt=""
            src={areanegocio2}
            loading='lazy' />
          <img
            className="relative w-[400px] h-[400px] object-cover md:w-[250px] md:h-[250px] sm:w-[150px] sm:h-[150px]"
            alt=""
            src={areanegocio3}
            loading='lazy' />
          <img
            className="relative w-[400px] h-[400px] object-cover md:w-[250px] md:h-[250px] sm:h-[150px]"
            alt=""
            src={areanegocio4}
            loading='lazy' />
          <img
            className="relative w-[400px] h-[400px] object-cover md:w-[250px] sm:flex sm:w-[150px] sm:h-[150px]"
            alt=""
            src={terciario}
            loading='lazy' />
          <img
            className="relative w-[400px] h-[400px] object-cover md:w-[250px] md:h-[250px] sm:flex sm:w-[150px] sm:h-[150px]"
            alt=""
            src={residencial}
            loading='lazy' />
        </div>
      </div>
    </section>
  );
}

export default AreaNegocio;
