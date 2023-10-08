import React from "react";
import Dash from "./Dash";
import Image from "next/image";
const Feature = () => {
  return (
    <div className="container pt-40">
      <h2 className="text-6xl  font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Featured
        <span className="text-accent pl-3">Food</span>
      </h2>
      <p className="max-w-[550px] pt-10 text-gray-700">
        distraerá con el contenido del texto de un sitio mientras que mira su
        diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o
        menos normal de las letras, al contrario de usar
      </p>
      <Dash />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__1.png"
            width={300}
            height={600}
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl"> Shrim Salad</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            diseño. El punto de usar Lorem Ipsum es que tiene una distribución
            más o menos normal de las letras, al contrario de usar
            </p>
          </div>
        </div>


        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__2.png"
            width={500}
            height={900}
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl"> Baked Apple</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            diseño. El punto de usar Lorem Ipsum es que tiene una distribución
            más o menos normal de las letras, al contrario de usar
            </p>
          </div>
        </div>


        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__3.png"
            width={300}
            height={600}
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl"> Cherries Chicken</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            diseño. El punto de usar Lorem Ipsum es que tiene una distribución
            más o menos normal de las letras, al contrario de usar
            </p>
          </div>
        </div>













      </div>
    </div>
  );
};

export default Feature;
