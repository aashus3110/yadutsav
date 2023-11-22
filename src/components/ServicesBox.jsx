import React from "react";
import Image from "next/image";
import Decoration from "@/assets/decoration.jpg";

const ServicesBox = ({ text }) => {
  return (
    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <Image
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={Decoration}
          alt="content"
          width={400}
          height={400}
          loading="eager"
        />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          SUBTITLE
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          Chichen Itza
        </h2>
        <p className="leading-relaxed text-base">
          Fingerstache flexitarian street art 8-bit waistcoat. Distillery
          hexagon disrupt edison bulbche.
        </p>
      </div>
    </div>
  );
};

export default ServicesBox;
