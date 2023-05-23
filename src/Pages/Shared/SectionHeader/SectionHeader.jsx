import React from "react";

const SectionHeader = ({ title1, title }) => {
  return (
    <div>
      <div className="text-center m-10">
        <p className="text-yellow-600">--- {title1} ---</p>
        <span className="font-bold">
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        </span>
        <br />
        <p className="text-3xl">{title}</p>

        <span className="font-bold">
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        </span>
      </div>
    </div>
  );
};

export default SectionHeader;
