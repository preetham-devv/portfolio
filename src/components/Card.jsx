import React from "react";

const Card = ({ image, title, subtitle, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="m-4 block max-w-sm overflow-hidden rounded-lg"
    >
      <div className="relative">
        <img className="w-full" src={image} alt={title} />
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent">
          <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>
          <p className="mb-4 text-sm font-medium text-white">{subtitle}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
