import React from 'react'
import { happy, launch, money, person } from '../assets';

function Estadisticas() {
  return (
    <div className="bg-neutral-50 flex lg:flex-col flex-row items-center justify-start sm:py-10 sm:px-10 py-20 px-28 box-border gap-10 text-left sm:text-13xl text-29xl text-neutral-900 font-body-lg-regular self-stretch">
      <div className="w-5/12 lg:w-full overflow-hidden flex-shrink-0 flex flex-col items-start justify-start gap-4">
        <b
          className="self-stretch relative tracking-[-0.02em] leading-[60px]"
        >
          20+ años creando valor para nuestros clientes
        </b>
        <div className="self-stretch relative text-lg leading-[28px]">
          Nuestros números hablan por sí solos
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-10 text-2xl">
        <div className="overflow-hidden flex sm:flex-col flex-row items-center justify-start gap-8">
          <div className="w-72 flex flex-row items-center justify-start gap-4">
            <img
              className="relative w-12 h-[50px] object-contain"
              alt=""
              src={launch} />
            <div className="flex-1 overflow-hidden flex flex-col items-start justify-start">
              <b className="self-stretch relative tracking-[-0.02em] leading-[45px]">
                250+
              </b>
              <div className="self-stretch relative text-base leading-[24px]">
                Proyectos completados
              </div>
            </div>
          </div>
          <div className="w-72 flex flex-row items-center justify-start gap-4">
            <img
              className="relative w-12 h-[50px] object-contain"
              alt=""
              src={money} />
            <div className="flex-1 overflow-hidden flex flex-col items-start justify-start">
              <b className="self-stretch relative tracking-[-0.02em] leading-[45px]">
                200 M+
              </b>
              <div className="self-stretch relative text-base leading-[24px]">
                Euros gestionados en proyectos
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex sm:flex-col flex-row items-center justify-start gap-8">
          <div className="w-72 flex flex-row items-center justify-start gap-4">
            <img
              className="relative w-12 h-[50px] object-contain"
              alt=""
              src={person} />
            <div className="flex-1 overflow-hidden flex flex-col items-start justify-start">
              <b className="self-stretch relative tracking-[-0.02em] leading-[45px]">
                60+
              </b>
              <div className="self-stretch relative text-base leading-[24px]">
                Profesionales a tu servicio
              </div>
            </div>
          </div>
          <div className="w-72 flex flex-row items-center justify-start gap-4">
            <img
              className="relative w-12 h-[50px] object-contain"
              alt=""
              src={happy} />
            <div className="flex-1 overflow-hidden flex flex-col items-start justify-start">
              <b className="self-stretch relative tracking-[-0.02em] leading-[45px]">
                50+
              </b>
              <div className="self-stretch relative text-base leading-[24px]">
                Clientes satisfechos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estadisticas;
