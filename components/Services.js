import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonOutline from "./misc/ButtonOutline";
import ButtonPrimary from "./misc/ButtonPrimary";
import Galery from "./Galery"; // ✅ ganti Testimoni jadi Galery

const Service = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // === FETCH DATA SERVICE ===
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/services`
        );
        setServices(res.data?.data || []);
      } catch (error) {
        console.error("Gagal memuat layanan:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="services"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        {/* === HEADER === */}
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-green-700 leading-relaxed"
          >
            Layanan GeoForest
          </motion.h3>
          <motion.p
            variants={scrollAnimation}
            className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-gray-600"
          >
            Kami menyediakan layanan pemetaan, survei udara, dan analisis
            lingkungan yang akurat dan terpercaya untuk mendukung pengelolaan
            sumber daya alam secara berkelanjutan.
          </motion.p>
        </ScrollAnimationWrapper>

        {/* === DAFTAR SERVICE === */}
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
          {loading ? (
            <p className="col-span-3 text-gray-500">Memuat layanan...</p>
          ) : services.length > 0 ? (
            services.map((svc) => (
              <ScrollAnimationWrapper
                key={svc.id}
                className="flex justify-center"
              >
                <motion.div
                  variants={scrollAnimation}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="flex flex-col justify-center items-center border-2 border-gray-200 rounded-xl py-6 px-6 lg:px-10 xl:px-16 bg-white shadow-sm hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="p-4 lg:p-0 mt-6 lg:mt-10">
                    <Image
                      src={svc.icon || "/assets/default-service.png"}
                      width={120}
                      height={120}
                      alt={svc.title || "Layanan GeoForest"}
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-lg text-green-700 font-semibold capitalize my-4">
                    {svc.title || "Layanan Pemetaan"}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {svc.description ||
                      "Layanan pemetaan profesional dengan teknologi drone dan GIS."}
                  </p>
                  <div className="flex flex-col w-full justify-center mb-8 flex-none mt-8">
                    <ButtonOutline>Pelajari</ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))
          ) : (
            <p className="col-span-3 text-gray-500">Belum ada layanan.</p>
          )}
        </div>

        {/* === GALERI & CTA === */}
        <div className="flex flex-col w-full my-16" id="galeri">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-green-700 leading-normal w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
            >
              Dokumentasi Lapangan GeoForest
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12 text-gray-600"
            >
              Beberapa cuplikan dari kegiatan survei dan pemetaan yang telah kami
              lakukan di berbagai wilayah Indonesia.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Galery />
            </motion.div>
          </ScrollAnimationWrapper>

          {/* === CTA SECTION === */}
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500 shadow-md">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-green-700 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Butuh Jasa Pemetaan Profesional?
                  </h5>
                  <p className="text-gray-600 mt-2">
                    Hubungi tim <b>GeoForest</b> sekarang untuk konsultasi
                    gratis dan temukan solusi pemetaan terbaik untuk kebutuhan
                    Anda.
                  </p>
                </div>
                <ButtonPrimary>Hubungi Kami</ButtonPrimary>
              </div>
              <div
                className="absolute bg-green-700 opacity-5 w-11/12 rounded-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Service;
