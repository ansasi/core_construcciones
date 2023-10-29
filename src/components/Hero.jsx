import React from 'react'
import { background, hero } from '../assets';

function Hero() {
  return (
    <section
      className="self-stretch bg-white overflow-hidden shrink-0 pt-[60px] lg:pt-24 lg:pb-10 sm:pb-16 sm:pt-14 flex flex-col items-center justify-start relative gap-[10px] text-left text-41xl text-neutral-900 font-body-lg-regular px-[50px] sm:px-[30px]" id="Inicio">
      <img
        className="absolute h-full z-0"
        alt=""
        src={background}
      />
      <div className="self-stretch flex flex-row items-center justify-center pt-4 box-border gap-[60px] z-[2] lg:h-auto lg:flex-col lg:gap-[40px] lg:px-10 lg:box-border sm:pl-5  sm:pr-5 sm:box-border">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start  px-0  lg:self-stretch lg:w-auto  lg:box-border lg:flex-[unset]">
          <div className="w-full h-[600px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[30px] max-w-[650px] lg:h-auto">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[72px] font-bold font-inherit lg:text-29xl lg:leading-[50px] sm:text-17xl sm:leading-[50px]">
              Seguridad y experiencia
            </h1>
            <div className="self-stretch relative text-lg leading-[28px] text-neutral-700 sm:text-lg">
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                <span className="font-body-lg-regular">{`Con más de `}</span>
                <b className="font-body-lg-regular">20 años de experiencia</b>
                <span> en el sector.</span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                <span>{`Sabemos que `}</span>
                <b className="font-body-lg-regular">nuestros</b>
                <span className="font-body-lg-regular">{` `}</span>
                <b className="font-body-lg-regular">clientes</b>
                <span className="font-body-lg-regular">{` son `}</span>
                <b className="font-body-lg-regular">nuestro mayor tesoro</b>
                <span>
                  {" "}
                  y trabajamos diariamente para que tenga los mejores
                  servicios.
                </span>
              </p>
              <p className="m-0">
                <span>{`Comprometidos con el `}</span>
                <b className="font-body-lg-regular">talento</b>
                <span className="font-body-lg-regular">{` y la `}</span>
                <b className="font-body-lg-regular">sostenibilidad</b>
                <span className="font-body-lg-regular">
                  , creemos que nuestro mayor activo es nuestro capital
                  humano.
                </span>
              </p>
            </div>
          </div>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[666px] object-contain sm:object-cover lg:flex-[unset] lg:self-stretch sm:w-[330px] sm:h-[500px]"
          alt=""
          src={hero}
        />
      </div>
    </section>
  );
}

export default Hero;
