import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        {/* === BRAND & DESCRIPTION === */}
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoVPN className="h-8 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">GeoForest</strong> adalah
            penyedia layanan <strong>pemetaan dan analisis geospasial</strong>{" "}
            yang membantu instansi, perusahaan, dan individu dalam memahami dan
            mengelola wilayah secara akurat dan efisien.
          </p>

          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer hover:bg-orange-100 transition">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer hover:bg-orange-100 transition">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer hover:bg-orange-100 transition">
              <Instagram className="h-6 w-6" />
            </div>
          </div>

          <p className="text-gray-400">
            ©{new Date().getFullYear()} - GeoForest. All rights reserved.
          </p>
        </div>

        {/* === LAYANAN === */}
        <div className="row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Layanan</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Pemetaan Wilayah
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Survey Drone & Udara
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Analisis Geospasial
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Pembuatan Peta Tematik
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Konsultasi GIS
            </li>
          </ul>
        </div>

        {/* === INFORMASI === */}
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Informasi</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tentang Kami
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Proyek & Portofolio
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Kebijakan Privasi
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Syarat & Ketentuan
            </li>
          </ul>
        </div>

        {/* === HUBUNGI KAMI === */}
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">
            Hubungi Kami
          </p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              info@GeoForest.id
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              +62 812 3456 7890
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              WhatsApp
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Jadi Mitra
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
