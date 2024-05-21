import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="relative w-9/12 m-auto bg-slate-200">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="flex flex-row items-center justify-center h-100 text-lg font-normal overflow-hidden mt-0">
          <div className="animate-slidein500 lg:opacity-0 w-6/12 order-1 order-lg-2 ml-10">
            <img
              loading="lazy"
              src={introdata.your_img_url}
              className="h-80 lg:h-full   bg-cover bg-center relative overflow-hidden"
              alt="Icon"
            />
          </div>

          <div className="text order-2 order-lg-1 d-lg-flex justify-content-center w-6/12  ml-24 ">
            <div className="align-self-center">
              <div className="">
                <h2 className="mb-1 mt-5 text-2xl font-black text-black">
                  {introdata.title}
                </h2>
                <h1 className="mb-2 text-xl font-bold text-blue-800">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-6 text-base">{introdata.description}</p>
                <div className="space-x-4">
                  <Link to="/portfolio">
                    <button className="h-12 text-base cursor-pointer transition-all bg-gray-700 text-white px-4 py-2 rounded-xl border-2 border-blue-500 hover:bg-blue-500 hover:text-gray-200 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                      Portfolio
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="h-12 text-base cursor-pointer transition-all bg-gray-700 text-white px-4 py-2  rounded-xl border-2 border-blue-500 hover:bg-blue-500 hover:text-gray-200 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                      Contact
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
