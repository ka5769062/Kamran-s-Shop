import React from "react";
import Image from "next/image";


const ServiceCard = (props) => {
  return (
    <div>
      <div className="space-y-3 text-center">
        <Image className="mx-auto" src={props.img} width={70} height={70} />

        <div className="uppercase">
          {props.title}

          <div className="flex gap-2 w-fit mx-auto mt-2">
            <div className="bg-accent w-[7px] h-[7px] rounded-full" />
            <div className="bg-accent w-[7px] h-[7px] rounded-full" />
            <div className="bg-accent w-[7px] h-[7px] rounded-full" />
          </div>
        </div>
        <p className="text-[14px] text-gray-700">
           {props.desc}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
