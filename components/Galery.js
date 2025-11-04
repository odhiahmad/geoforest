import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import axios from "axios";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Galery = () => {
  const [galery, setGalery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sliderRef, setSliderRef] = useState(null);

  // === SETTINGS SLIDER ===
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a>
          <span className="mx-2 rounded-full h-3 w-3 block cursor-pointer bg-gray-300 hover:bg-green-600 transition-all"></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-6",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  // === FETCH DATA GALERY ===
  useEffect(() => {
    const fetchGalery = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/galery?cari=&page=0&size=1000&sortField=id&sortOrder=ASC`
        );
        setGalery(res.data?.data || []);
        console.log(res.data?.data, 'gambar url');
      } catch (error) {
        console.error("Gagal memuat galeri:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGalery();
  }, []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="galery"
    >
      <div className="w-full text-center mb-10">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-green-700">
          Galeri GeoForest
        </h3>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Koleksi dokumentasi kegiatan pemetaan, survei udara, dan analisis
          lingkungan oleh tim{" "}
          <span className="font-semibold">GeoForest</span>.
        </p>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Memuat galeri...</p>
      ) : galery.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada foto galeri.</p>
      ) : (
        <>
          <Slider
            {...settings}
            arrows={false}
            ref={setSliderRef}
            className="flex items-stretch justify-items-stretch"
          >
            {galery.map((item, index) => (
              <div className="px-3 flex items-stretch" key={index}>
                <div className="border-2 border-gray-200 hover:border-green-600 transition-all rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg w-full">
                  <div className="relative w-full h-64">
                    <Image
                      src={item.url}
                      alt={`Galeri GeoForest ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* === PANAH NEXT & PREV === */}
          <div className="flex w-full items-center justify-end">
            <div className="flex flex-none justify-between w-auto mt-10">
              <div
                className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-600 border hover:bg-green-600 hover:text-white transition-all text-green-600 cursor-pointer"
                onClick={() => sliderRef?.slickPrev()}
              >
                <ArrowBack className="h-6 w-6" />
              </div>
              <div
                className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-600 border hover:bg-green-600 hover:text-white transition-all text-green-600 cursor-pointer"
                onClick={() => sliderRef?.slickNext()}
              >
                <ArrowNext className="h-6 w-6" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Galery;
