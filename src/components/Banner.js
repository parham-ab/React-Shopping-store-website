import { useContext } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { ProductContext } from "../contexts/ProductContextProvider";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Box, Typography } from "@mui/material";

const Banner = () => {
  const data = useContext(ProductContext);

  return (
    <Box
      sx={{
        width: "100%",
        my: 4,
        p: 2,
        borderRadius: "24px",
        background: "linear-gradient(145deg, #f8f8fc 0%, #ededf7 100%)",
        border: "1px solid rgba(108,99,255,0.1)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: -40,
          right: -40,
          width: 180,
          height: 180,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -30,
          left: -30,
          width: 140,
          height: 140,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(62,207,207,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      {/* Section header */}
      <Typography
        sx={{
          fontSize: { xs: "1rem", md: "1.15rem" },
          fontWeight: 700,
          color: "#1a1a2e",
          mb: 3,
          letterSpacing: "-0.01em",
        }}
      >
        Browse the Collection
      </Typography>

      <Swiper
        slidesPerView={2}
        spaceBetween={16}
        slidesPerGroup={2}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Autoplay]}
        breakpoints={{
          480: { slidesPerView: 3, slidesPerGroup: 3 },
          768: { slidesPerView: 4, slidesPerGroup: 4 },
          1024: { slidesPerView: 5, slidesPerGroup: 5 },
          1280: { slidesPerView: 6, slidesPerGroup: 6 },
        }}
      >
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>
            <Link
              to={`/products/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  p: 1.5,
                  transition: "all 0.22s ease",
                  "&:hover": {
                    borderColor: "rgba(108,99,255,0.35)",
                    boxShadow: "0 6px 20px rgba(108,99,255,0.13)",
                    "& img": { transform: "scale(1.1)" },
                  },
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Banner;
