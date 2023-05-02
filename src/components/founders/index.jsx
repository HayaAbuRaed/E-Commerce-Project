import React from "react";
import { featuresData } from "./foundersData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {Pagination } from "swiper";
import { Typography } from "@mui/material";

import SocialMedia from "../socialMedia";
import './master.css'

export default function Founders() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {featuresData.map((founder) =>
            <SwiperSlide>
                <img src= {founder.img} alt="" />
                <Typography variant="h4" marginTop={"1em"}>{founder.name}</Typography>
                <Typography variant="p">{founder.position}</Typography>
                <SocialMedia twitter={founder.twitter} insta={founder.insta} linkedin={founder.in}/>
            </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}
