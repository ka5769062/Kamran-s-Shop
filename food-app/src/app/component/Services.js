import React from "react";
import Dash from "./Dash";
import ServiceCard from "./ServiceCard";

const servicesData = [
    {
      img: "/services__1.png",
      title: "Professonal Kitchen",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
    {
      img: "/services__2.png",
      title: "Delivery",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
    {
      img: "/services__3.png",
      title: "Wine List",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
    {
      img: "/services__4.png",
      title: "Free Wifi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
  ];
  


const Services = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Choose Best <span className="text-accent">Service</span>
        </h2>
        <p className="text-gray-700">
          diseño. El punto de usar Lorem Ipsum es que tiene una distribución más
          o <br />
          menos normal de las letras, al contrario de usar
        </p>

        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

     <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">

{
    servicesData.map((e)=>{

      return(
        <ServiceCard
        img = {e.img}
        title = {e.title}
        desc = {e.desc}
        />
        
      )

    })

}
     </div>





    </div>
  );
};

export default Services;
