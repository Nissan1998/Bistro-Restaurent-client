import React from "react";

const SectionHeader = ({ title1, title, textWhite }) => {
  return (
    <div className="max-w-screen-xl mx-auto container my-5">
      <div className={`text-center ${textWhite} `}>
        <p
          className={textWhite ? "text-white" : "text-yellow-600 w-96 mx-auto"}
        >
          --- {title1} ---
        </p>

        <p
          className={
            textWhite
              ? "md:text-3xl border-y-2 p-4 border-dashed border-white w-96 mx-auto "
              : "md:text-3xl border-y-2 p-4 border-dashed border-black w-96 mx-auto"
          }
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
