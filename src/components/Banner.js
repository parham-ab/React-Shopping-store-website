import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { ProductContext } from "../contexts/ProductContextProvider";
import { shorten } from "../helper/functions";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Banner = () => {
  const data = useContext(ProductContext);

  return (
    <Swiper
      style={{ margin: "200px 0" }}
      slidesPerView={5}
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {data.map((items) => (
        <SwiperSlide key={items.id}>
          <Card sx={{ height: "250px" }}>
            <CardMedia component="div">
              <img
                src={items.image}
                alt={items.id}
                loading="lazy"
                style={{
                  width: "100px",
                  display: "flex",
                  margin: "0 auto",
                }}
              />
            </CardMedia>
            <CardContent
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{ position: "absolute", bottom: 8, color: "#000" }}
                gutterBottom
                variant="h5"
                component="h3"
              >
                {shorten(items.title)}
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;