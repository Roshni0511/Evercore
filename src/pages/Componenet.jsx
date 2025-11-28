import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Link } from "react-router-dom";

const Componenet = ({ item }) => {
  const [activeImg, setActiveImg] = useState(item.thumbImg[0]);
  const [isFav, setIsFav] = useState(false);

  return (
    <div className="product-card type-card">
      {/* Product images */}
      <div className="product-slider">
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          className="slider-wrapper"
        >
          {item.thumbImg.map((img, i) => (
            <SwiperSlide key={i}>
              <Link to="/product-page-layout">
                <img
                  src={img}
                  className={`main-img ${activeImg === img ? "active" : ""}`}
                  alt="product"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Favorite Button */}
        <button className="fav-btn" onClick={() => setIsFav(!isFav)}>
          {isFav ? (
            <i className="fa-solid fa-heart text-danger"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </button>
      </div>

      {/* Thumbnails */}
      <div className="thumb-list">
        {item.images.map((img, i) => (
          <button
            key={i}
            className={`thumb-btn ${activeImg === img ? "active" : ""}`}
            onClick={() => setActiveImg(img)}
          >
            <img src={img} alt="thumb" />
          </button>
        ))}
      </div>

      {/* Product content */}
      <div className="content">
        <h6 className="brand">{item.brand_name}</h6>

        <Link to="/product-page-layout" className="title">
          {item.product_title}
        </Link>

        {/* Price */}
        <div className="price-wrap">
          <span className="price">₹{item.price}</span>
          <del className="old">₹{item.delprice}</del>
        </div>

        {/* Rating */}
        <div className="rating">
          <i className="fa-solid fa-star"></i> <span>{item.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Componenet;
