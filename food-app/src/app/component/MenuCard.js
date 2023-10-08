import React from "react";
import Image from "next/image";

const MenuCard = (props) => {
  return (
    <div className="flex gap-2">
      <Image
        className="w-[80px] h-[80px]"
        src={props.img}
        width={80}
        height={80}
      />

      <div className="space-y-2">
        <div>
          <h2>{props.title}</h2>
          <p className="text-[14px] text-gray-600 pt-1">{props.desc}</p>
        </div>
        <p className="text-accent">{props.price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
