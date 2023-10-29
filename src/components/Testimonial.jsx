import React from 'react'
import { brandhubspot, clientLogo, clientLogo1, quoteMark } from '../assets';

function Testimonial() {
  return (
    <section className="self-stretch bg-neutral-50 overflow-hidden shrink-0 flex flex-col items-start justify-center sm:pt:0 px-10 text-left text-29xl text-neutral-900 font-body-lg-regular" id='Testimonial'>
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-20 sm:pt-20 px-[150px] pb-0 relative gap-[50px] md:pl-10 md:pr-10 md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[8px] z-[0]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-bold font-inherit lg:text-17xl md:text-17xl sm:text-11xl">
            Que opinan nuestros clientes
          </h1>
          <div className="self-stretch relative text-lg leading-[28px] sm:text-sm">
            En sus propias palabras
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[22px] left-[53px] w-[142px] h-[116px] overflow-hidden shrink-0 opacity-[0.3] z-[1]"
          alt=""
          src={quoteMark} />
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center pt-10 sm:pt6 px-[50px] pb-[50px] gap-[50px] text-lg">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[32px] md:flex-col sm:flex-col">
          <div className="rounded-31xl bg-white shadow-[0px_4px_8px_-2px_rgba(17,_24,_39,_0.1),_0px_2px_4px_-2px_rgba(17,_24,_39,_0.06)] overflow-hidden flex flex-col items-start justify-start p-8 box-border gap-[32px] min-w-[300px]">
            <img
              className="relative w-28 h-8 overflow-hidden shrink-0"
              alt=""
              src={clientLogo} />
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[16px]">
              <img
                className="relative w-4 h-[13px] overflow-hidden shrink-0"
                alt=""
                src={quoteMark} />
              <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch relative leading-[28px]">
                  Hemos contado con ellos durante 3 años, y lo seguiremos
                  haciendo, gran equipo.
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <b className="self-stretch relative leading-[28px]">
                    Jane Cooper
                  </b>
                  <div className="self-stretch relative text-sm leading-[20px] text-neutral-500">
                    CEO, Airbnb
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-31xl bg-white shadow-[0px_4px_8px_-2px_rgba(17,_24,_39,_0.1),_0px_2px_4px_-2px_rgba(17,_24,_39,_0.06)] overflow-hidden flex flex-col items-start justify-start p-8 box-border gap-[32px] min-w-[300px] sm:flex">
            <img
              className="relative w-28 h-8 overflow-hidden shrink-0"
              alt=""
              src={clientLogo1} />
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[16px]">
              <img
                className="relative w-4 h-[13px] overflow-hidden shrink-0"
                alt=""
                src={quoteMark} />
              <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch relative leading-[28px]">
                  La experiencia de su equipo me da total confianza en su
                  capacidad de resolver cualquier desafio que pueda aparecer.
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <b className="self-stretch relative leading-[28px]">
                    Kristin Watson
                  </b>
                  <div className="self-stretch relative text-sm leading-[20px] text-neutral-500">
                    Co-Founder, Strapi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start md:flex-col sm:flex-col">
          <div className="rounded-31xl bg-white shadow-[0px_4px_8px_-2px_rgba(17,_24,_39,_0.1),_0px_2px_4px_-2px_rgba(17,_24,_39,_0.06)] overflow-hidden flex flex-col items-start justify-start py-[30px] px-5 box-border gap-[25px] min-w-[300px] md:w-auto md:[align-self:unset]">
            <img
              className="relative w-28 h-8 overflow-hidden shrink-0"
              alt=""
              src={brandhubspot} />
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[16px]">
              <img
                className="relative w-4 h-[13px] overflow-hidden shrink-0"
                alt=""
                src={quoteMark} />
              <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch relative leading-[28px]">{`CORE me ha ayudado de la manera más profesional y en el menor tiempo posible a llevar a cabo mi obra. `}</div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <b className="self-stretch relative leading-[28px]">
                    Floyd Miles
                  </b>
                  <div className="self-stretch relative text-sm leading-[20px] text-neutral-500">
                    Vice President, GoPro
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
