import React from "react";

const Cover = ({ bgImg, title, subTitle }) => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage: `url("${bgImg}")`,
        }}
      >
        <div className="hero-overlay flex "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" lg:w-[900px] p-5 lg:h-[250px] flex flex-col justify-center bg-opacity-60 bg-black">
            <h1 className="mb-5 text-5xl font-extrabold">{title}</h1>
            <p className="mb-5">{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
