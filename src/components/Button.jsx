import React, { useEffect } from "react";

const Button = (props) => {
  const type = props.type;
  const text = props.text;
  const size = props.size;
  const klik = props.klik;

  return (
    <>
      {type === "orange1" && size === "small" ? (
        <button
          type="button"
          onClick={klik}
          className="bg-sefas-orange-primary text-white font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg h-10 w-16 sm:w-24 lg:w-32 xl:w-36 2xl:w-40 rounded-md hover:bg-sefas-orange-primary/90 drop-shadow-lg"
        >
          {text}
        </button>
      ) : type === "orange2" && size === "small" ? (
        <button
          type="button"
          onClick={klik}
          className="outline outline-2 bg-white outline-sefas-orange-primary text-sefas-orange-primary font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg h-10 w-16 sm:w-24 lg:w-32 xl:w-36 2xl:w-40 rounded-md hover:bg-sefas-orange-primary/20 drop-shadow-lg"
        >
          {text}
        </button>
      ) : type === "red1" && size === "small" ? (
        <button
          type="button"
          onClick={klik}
          className="bg-sefas-red-primary text-white font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg h-10 w-16 sm:w-24 lg:w-32 xl:w-36 2xl:w-40 rounded-md hover:bg-sefas-red-primary/90 drop-shadow-lg"
        >
          {text}
        </button>
      ) : type === "red2" && size === "small" ? (
        <button
          type="button"
          onClick={klik}
          className="outline outline-2 bg-white outline-sefas-red-primary text-sefas-red-primary font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg h-10 w-16 sm:w-24 lg:w-32 xl:w-36 2xl:w-40 rounded-md hover:bg-sefas-red-primary/20 drop-shadow-lg"
        >
          {text}
        </button>
      ) : type === "gray1" && size === "small" ? (
        <button
          type="button"
          onClick={klik}
          className="bg-sefas-gray-secondary text-white font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg h-10 w-16 sm:w-24 lg:w-32 xl:w-36 2xl:w-40 rounded-md hover:bg-sefas-gray-secondary/90 drop-shadow-lg"
        >
          {text}
        </button>
      ) : type === "gray2" && size === "small" ? (
        <button
          type="button"
          onClick={klik}
          className="outline outline-2 bg-white outline-sefas-gray-secondary text-sefas-gray-secondary font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg h-10 w-16 sm:w-24 lg:w-32 xl:w-36 2xl:w-40 rounded-md hover:bg-sefas-gray-secondary/20 drop-shadow-lg"
        >
          {text}
        </button>
      ) : type === "orange1" && size === "large" ? (
        <button
          type="button"
          onClick={klik}
          className="bg-sefas-orange-primary text-white font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg h-10 w-16 sm:w-24 lg:w-48 xl:w-52 2xl:w-64 rounded-md hover:bg-sefas-orange-primary/90 drop-shadow-lg"
        >
          {text}
        </button>
      ) : type === "orange2" && size === "large" ? (
        <button
          type="button"
          onClick={klik}
          className="outline outline-2 bg-white outline-sefas-orange-primary text-sefas-orange-primary font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg h-10 w-16 sm:w-24 lg:w-48 xl:w-52 2xl:w-64 rounded-md hover:bg-sefas-orange-primary/20 drop-shadow-lg"
        >
          {text}
        </button>
      ) : type === "red1" && size === "large" ? (
        <button
          type="button"
          onClick={klik}
          className="bg-sefas-red-primary text-white font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg h-10 w-16 sm:w-24 lg:w-48 xl:w-52 2xl:w-64 rounded-md hover:bg-sefas-red-primary/90 drop-shadow-lg"
        >
          {text}
        </button>
      ) : type === "red2" && size === "large" ? (
        <button
          type="button"
          onClick={klik}
          className="outline outline-2 bg-white outline-sefas-red-primary text-sefas-red-primary font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg h-10 w-16 sm:w-24 lg:w-48 xl:w-52 2xl:w-64 rounded-md hover:bg-sefas-red-primary/20 drop-shadow-lg"
        >
          {text}
        </button>
      ) : type === "gray1" && size === "large" ? (
        <button
          type="button"
          onClick={klik}
          className="bg-sefas-gray-secondary text-white font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg h-10 w-16 sm:w-24 lg:w-48 xl:w-52 2xl:w-64 rounded-md hover:bg-sefas-gray-secondary/90 drop-shadow-lg"
        >
          {text}
        </button>
      ) : type === "gray2" && size === "large" ? (
        <button
          type="button"
          onClick={klik}
          className="outline outline-2 bg-white outline-sefas-gray-secondary text-sefas-gray-secondary font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg h-10 w-16 sm:w-24 lg:w-48 xl:w-52 2xl:w-64 rounded-md hover:bg-sefas-gray-secondary/20 drop-shadow-lg"
        >
          {text}
        </button>
      ) : type === "gray3" && size === "small" ? (
        <button
          type="button"
          onClick={klik}
          className="outline outline-2 outline-sefas-gray-secondary text-sefas-gray-secondary font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg h-10 w-16 sm:w-24 lg:w-32 xl:w-36 2xl:w-40 rounded-md hover:bg-sefas-gray-secondary/20 active:bg-sefas-gray-secondary/20"
        >
          {text}
        </button>
      ) : type === "white" && size === "small" ? (
        <button
          type="button"
          onClick={klik}
          className="outline outline-1 outline-black bg-white text-black font-semibold hover:font-bold text-xs md:text-sm lg:text-base 2xl:text-lg h-8 w-16 sm:w-16 lg:w-24 xl:w-24 2xl:w-24 rounded-sm hover:bg-sefas-gray-secondary/20 active:bg-sefas-gray-secondary/20"
        >
          {text}
        </button>
      ) : type === "orangeIcon" && size === "small" ? (
        <button
          type="button"
          onClick={klik}
          className="bg-sefas-orange-primary text-white font-semibold text-xs md:text-sm lg:text-base 2xl:text-lg h-10 w-16 sm:w-24 lg:w-32 xl:w-36 2xl:w-40 rounded-md hover:bg-sefas-orange-primary/90"
        >
          <div className="flex flex-row justify-center items-center space-x-1">
            <MdUploadFile size={20} color="white" />

            <p>{text}</p>
          </div>
        </button>
      ) : (
        <div>button</div>
      )}
    </>
  );
};

export default Button;
