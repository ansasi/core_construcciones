import React from 'react'
import SectionAnchor from './SectionAnchor';
import { linkedin, trabajaconnosotros } from '../assets';

function TrabajaConNosotros() {
  return (
    <section className='px-[50px]' id="TrabajaConNosotros">
      <SectionAnchor />
      <div className="self-stretch bg-neutral-50 overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[60px] text-center text-29xl text-neutral-900 font-body-lg-regular sm:pl-5 sm:pr-5 sm:box-border ">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[30px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-bold font-inherit sm:text-11xl">
            Trabaja con Nosotros
          </h1>
          <div className="self-stretch relative text-lg leading-[28px]">
            <b>Conecta</b>
            <span>{` con nosotros en `}</span>
            <b>LinkedIn</b>
            <span>{` para estar al tanto de nuestras ofertas de empleo haciendo `}</span>
            <b>click</b>
            <span>{` en la `}</span>
            <b>imagen</b>
            <span>.</span>
          </div>
        </div>
        <a
          className="[text-decoration:none] w-[600px] h-[600px] overflow-hidden shrink-0 flex flex-col items-end justify-start bg-cover bg-no-repeat bg-[top] sm:w-[280px] sm:h-[280px]" style={{ backgroundImage: `url(${trabajaconnosotros})` }}
          href="https://www.linkedin.com/in/angelsanchezsierra/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="relative w-[100px] h-[100px] md:w-[80px] md:h-[80px] sm:w-[50px] sm:h-[50px] object-cover"
            alt=""
            src={linkedin}
            loading='lazy'
          />
        </a>
      </div>
    </section>
  );
}

export default TrabajaConNosotros;
