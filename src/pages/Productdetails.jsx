import React, { useEffect, useState } from "react";
import $ from "jquery";
import Navbar from './Navbar'
import Footer from './Footer'
import {
  FaWeight,        // Aids Weight Management
  FaSmile,         // No Aftertaste
  FaHandHoldingMedical, // Diabetic Friendly
  FaRegCircle,     // Zero Calories
  FaChartLine,     // No Insulin Spike
  FaCube           // No Artificial Ingredients
} from "react-icons/fa";
const features = [
  { icon: <FaWeight size={34} />, text: "Supports Muscle Growth" },
  { icon: <FaSmile size={34} />, text: "Smooth Taste & Easy to Digest" },
  { icon: <FaHandHoldingMedical size={34} />, text: "Boosts Recovery & Performance" },
  { icon: <FaRegCircle size={34} />, text: "Low Calories, High Protein" },
  { icon: <FaChartLine size={34} />, text: "Helps Maintain Energy Levels" },
  { icon: <FaCube size={34} />, text: "No Artificial Additives" },
];




const Productdetails = () => {
    const [selectedSize, setSelectedSize] = useState("small"); // for grams
const [selectedPack, setSelectedPack] = useState("sachet"); // for pack
const [isExpanded, setIsExpanded] = useState(""); // for pack

    useEffect(() => {
        /**=====================
            Quantity 2 js
        ==========================**/
        $(".addcart-button").click(function () {
          $(this).next().addClass("open");
          $(".add-to-cart-box .qty-input").val("1");
        });
    
        $(".qty-left-minus").on("click", function () {
          var $qty = $(this).siblings(".qty-input");
          var _val = $($qty).val();
          if (_val === "1") {
            var _removeCls = $(this).parents(".cart_qty");
            $(_removeCls).removeClass("open");
          }
          var currentVal = parseInt($qty.val());
          if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
          }
        });
    
        $(".qty-right-plus").click(function () {
          if ($(this).prev().val() < 9) {
            $(this).prev().val(+$(this).prev().val() + 1);
          }
        });
      }, []); 
  return (
    <>
       <Navbar  />
       
    {/* <!-- Product Left Sidebar Start --> */}
    <section className="product-section">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-xxl-12 col-xl-12 col-lg-12  wow fadeInUp">
                    <div className="row g-4">
                        <div className="col-xl-6 wow fadeInUp">
                            <div className="product-left-box">
                                <div className="row g-sm-4 g-2">
                                    <div className="col-12">
                                        <div className="product-main no-arrow">
                                            <div>
                                                <div className="slider-image">
                                                    <img src="/assets/images/product1.webp" id="img-1"
                                                        data-zoom-image="/assets/images/product1.webp" className="
                                                        img-fluid image_zoom_cls-0 blur-up lazyload" alt="img" />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="slider-image">
                                                    <img src="/assets/images/product2.webp"
                                                        data-zoom-image="/assets/images/product2.webp" className="
                                                        img-fluid image_zoom_cls-1 blur-up lazyload" alt="img" />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="slider-image">
                                                    <img src="/assets/images/product3.webp"
                                                        data-zoom-image="/assets/images/product3.webp" className="
                                                        img-fluid image_zoom_cls-2 blur-up lazyload" alt="img" />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="slider-image">
                                                    <img src="/assets/images/product4.webp"
                                                        data-zoom-image="/assets/images/product4.webp" className="
                                                        img-fluid image_zoom_cls-3 blur-up lazyload" alt="img" />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="slider-image">
                                                    <img src="/assets/images/product5.webp"
                                                        data-zoom-image="/assets/images/product5.webp" className="
                                                        img-fluid image_zoom_cls-4 blur-up lazyload" alt="img" />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="slider-image">
                                                    <img src="/assets/images/product3.webp"
                                                        data-zoom-image="/assets/images/product3.webp" className="
                                                        img-fluid image_zoom_cls-5 blur-up lazyload" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="left-slider-image left-slider no-arrow slick-top">
                                            <div>
                                                <div className="sidebar-image">
                                                    <img src="/assets/images/product1.webp"
                                                        className="img-fluid blur-up lazyload" alt="img" />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="sidebar-image">
                                                    <img src="/assets/images/product2.webp"
                                                        className="img-fluid blur-up lazyload" alt="img" />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="sidebar-image">
                                                    <img src="/assets/images/product3.webp"
                                                        className="img-fluid blur-up lazyload" alt="img" />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="sidebar-image">
                                                    <img src="/assets/images/product4.webp"
                                                        className="img-fluid blur-up lazyload" alt="img" />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="sidebar-image">
                                                    <img src="/assets/images/product5.webp"
                                                        className="img-fluid blur-up lazyload" alt="img"/>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="sidebar-image">
                                                    <img src="/assets/images/product3.webp"
                                                        className="img-fluid blur-up lazyload" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 wow fadeInUp">
                            <div className="right-box-contain">
                                <h6 className="offer-top">30% Off</h6>
                                <h2 className="name">Evercore Yeast Protein - Double Chocolate</h2>
                                <div className="price-rating">
                                    <h3 className="theme-color price">₹1200.50 <del className="text-content">₹1300.46</del> <span
                                            className="offer theme-color">(8% off)</span></h3>
                                    <div className="product-rating custom-rate">
                                        <ul className="rating">
                                            <li>
                                                <i data-feather="star" className="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" className="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" className="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star" className="fill"></i>
                                            </li>
                                            <li>
                                                <i data-feather="star"></i>
                                            </li>
                                        </ul>
                                        <span className="review">23 Customer Review</span>
                                    </div>
                                </div>

                                <div className="product-contain">
                                    <p className="w-100 d-none d-md-block">Evercore Yeast Protein – Double Chocolate delivers a rich, smooth chocolaty taste powered by clean, high-quality yeast protein. Designed for lean muscle support, faster recovery, and easy digestion, it offers a complete amino acid profile with exceptional purity. Whether post-workout or as a daily protein boost, enjoy a delicious chocolate blend that fuels your fitness naturally.</p>
                                </div>

                                    <div class="coupon-product">
  <div class="left">
    <div>Enjoy Your Gift</div>
  </div>
  <div class="center">
    <div>
      <h2>50% OFF</h2>
      <h3>Coupon</h3>
      <small>Valid until May, 2023</small>
    </div>
  </div>
  
  <div class="right">
    <div>87878521112</div>
  </div>
  
                                </div>
                                <div className="product-package">
                                    <div className="product-title">
                                        <h4>Grams: </h4>
                                    </div>

                   <ul className="rectangle select-package">
  <li className="form-check">
    <input
      className="form-check-input"
      checked={selectedSize === "small"}
      type="radio"
      name="grams"
      id="small"
      onChange={() => setSelectedSize("small")}
    />
    <label className={`form-check-label ${selectedSize === "small" ? "active" : ""}`} htmlFor="small">
      <span>240 Grams</span>
    </label> <br/> (60 Sachets)
  </li>

  <li className="form-check">
    <input
      className="form-check-input"
      checked={selectedSize === "medium"}
      type="radio"
      name="grams"
      id="medium"
      onChange={() => setSelectedSize("medium")}
    />
    <label className={`form-check-label ${selectedSize === "medium" ? "active" : ""}`} htmlFor="medium">
      <span>400 Grams</span>
    </label> <br/> (100 Servings)
  </li>

  <li className="form-check">
    <input
      className="form-check-input"
      checked={selectedSize === "large"}
      type="radio"
      name="grams"
      id="large"
      onChange={() => setSelectedSize("large")}
    />
    <label className={`form-check-label ${selectedSize === "large" ? "active" : ""}`} htmlFor="large">
      <span>480 Grams</span>
    </label> <br/> (120 Sachets)
  </li>
</ul>

                                </div>
                                
                                  <div className="product-package">
                                    <div className="product-title">
                                        <h4>Pack: </h4>
                                    </div>

                  <ul className="rectangle select-package">
  <li className="form-check">
    <input
      className="form-check-input"
      checked={selectedPack === "sachet"}
      type="radio"
      name="pack" 
      id="sachet"
      onChange={() => setSelectedPack("sachet")}
    />
    <label className={`form-check-label ${selectedPack === "sachet" ? "active" : ""}`} htmlFor="sachet">
      <span>Sachet</span>
    </label>
  </li>

  <li className="form-check">
    <input
      className="form-check-input"
      checked={selectedPack === "box"}
      type="radio"
      name="pack"
      id="box"
      onChange={() => setSelectedPack("box")}
    />
    <label className={`form-check-label ${selectedPack === "box" ? "active" : ""}`} htmlFor="box">
      <span>Box</span>
    </label>
  </li>
</ul>

                                </div>

                            
                                <div className="note-box product-package">
                                    <div className="cart_qty qty-box product-qty">
                                        <div className="input-group">
                                            <button type="button" className="qty-left-minus" data-type="minus"
                                                data-field="">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="1" />
                                            <button type="button" className="qty-right-plus" data-type="plus" data-field="">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
<a href="/Cart">
                                    <button
                                        className="btn btn-md  cart-button text-white w-100 pro-acc-logout-btn">Add To Cart</button>
                                        </a>
                                </div>

                                <div className="buy-box">
                                    <a href="/Wishlist">
                                        <i data-feather="heart"></i>
                                        <span>Add To Wishlist</span>
                                    </a>

                                    
                                </div>

                                <div className="pickup-box">
                                   

                                    <div className="product-info">
                                        <ul className="product-info-list product-info-list-2">
                                            <li>Type : <a href="">Protein</a></li>
                                            <li>MFG : <a href="">Jun 4, 2022</a></li>
                                            <li>Stock : <a href="">5 Items Left</a></li>
                                        </ul>
                                    </div>
                                </div>
                                 <div className="features-container">
      
     <div className="features-grid">
  {features.map((f, i) => (
    <div className="feature-item" key={i}>
      <div className="icon">{f.icon}</div>
      <p>{f.text}</p>
    </div>
  ))}
</div>

    <p className="description">
  {isExpanded
    ? `Fuel your body the right way with EVERCORE Protein — a clean, high-quality protein formula crafted for athletes, fitness enthusiasts, and anyone looking to improve daily nutrition. Made with premium ingredients, it delivers the perfect balance of protein and essential nutrients without unwanted fillers, artificial additives, or sugar.

       Whether you’re building muscle, supporting weight management, or simply staying active, EVERCORE Protein makes it easier to meet your daily protein goals. Mix it in shakes, smoothies, oats, or recipes — our formula blends smoothly and tastes amazing in every sip.

       Pure, powerful, and effective — that’s the EVERCORE promise. `
    : `Fuel your body the right way with EVERCORE Protein — a clean, high-quality protein source designed to support muscle building, faster recovery, and long-lasting energy for your everyday performance.`}
  
  <span className="read-more" onClick={() => setIsExpanded(!isExpanded)}>
    {isExpanded ? " Read less" : " Read more"}
  </span>
</p>

      <div className="logo-row">
          <img src="/assets/images/Frame_1.svg"  alt="certification" className="cert-logo" />
      </div>

    </div>
                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    {/* <!-- Product Left Sidebar End --> */}

    <section class="product-highlight">
  <div class="highlight-wrapper container">

    {/* <!-- LEFT: Product Image --> */}
    <div class="highlight-image">
      <img src="assets/images/product2.webp" alt="Evercore Protein Powder" />
    </div>

    {/* <!-- RIGHT: Content --> */}
    <div class="highlight-content">
      <h2>
        A superior <span>protein replacement</span> made for  
        you and your fitness journey
      </h2>

      <ul class="highlight-features">

        <li>
          <span class="icon">
            {/* <!-- Leaf / Natural icon --> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M20.7333 9.0725C22.02 8.39257 23.097 7.37487 23.8487 6.12876C24.6004 4.88266 24.9982 3.45526 24.9996 2C24.9996 1.73478 24.8942 1.48043 24.7067 1.29289C24.5191 1.10536 24.2648 1 23.9996 1H22.9996C21.57 1.00054 20.1666 1.38415 18.9356 2.11092C17.7045 2.83769 16.6907 3.88107 15.9996 5.1325C15.3084 3.88107 14.2946 2.83769 13.0635 2.11092C11.8325 1.38415 10.4291 1.00054 8.99955 1H7.99955C7.73434 1 7.47998 1.10536 7.29245 1.29289C7.10491 1.48043 6.99955 1.73478 6.99955 2C6.99955 2.26522 7.10491 2.51957 7.29245 2.70711C7.47998 2.89464 7.73434 3 7.99955 3H8.99955C10.4261 3.00196 11.8055 3.51129 12.891 4.43693C13.9764 5.36257 14.6973 6.64415 14.9246 8.0525C12.2776 8.31158 9.81414 9.5209 7.99023 11.4566C6.16632 13.3923 5.10548 15.9232 5.00409 18.5809C4.90271 21.2385 5.76765 23.843 7.4388 25.912C9.10994 27.981 11.4741 29.3744 14.0936 29.8344C16.7132 30.2944 19.4106 29.7897 21.6867 28.4138C23.9628 27.038 25.6632 24.884 26.4734 22.3508C27.2835 19.8176 27.1484 17.0766 26.0931 14.6354C25.0377 12.1941 23.1336 10.2179 20.7333 9.0725ZM22.9158 3C22.6799 4.38309 21.9677 5.64011 20.9025 6.55328C19.8373 7.46645 18.4862 7.97825 17.0833 8C17.3192 6.61691 18.0314 5.35989 19.0966 4.44672C20.1618 3.53355 21.5129 3.02175 22.9158 3ZM15.9996 28C14.2195 28 12.4795 27.4722 10.9994 26.4832C9.51938 25.4943 8.36583 24.0887 7.68464 22.4442C7.00345 20.7996 6.82522 18.99 7.17248 17.2442C7.51975 15.4984 8.37692 13.8947 9.63559 12.636C10.8943 11.3774 12.4979 10.5202 14.2437 10.1729C15.9896 9.82567 17.7992 10.0039 19.4437 10.6851C21.0882 11.3663 22.4938 12.5198 23.4828 13.9999C24.4717 15.4799 24.9996 17.22 24.9996 19C24.9969 21.3861 24.0478 23.6738 22.3606 25.361C20.6733 27.0483 18.3857 27.9974 15.9996 28ZM22.9858 20.165C22.7286 21.6147 22.0323 22.9505 20.9912 23.9916C19.95 25.0327 18.6143 25.729 17.1646 25.9862C17.11 25.9951 17.0548 25.9997 16.9996 26C16.7488 25.9996 16.5074 25.9051 16.3231 25.7351C16.1388 25.5651 16.025 25.3321 16.0044 25.0822C15.9838 24.8323 16.0579 24.5838 16.2118 24.3859C16.3658 24.188 16.5885 24.0552 16.8358 24.0138C17.8764 23.8289 18.8351 23.329 19.5824 22.5816C20.3298 21.8343 20.8297 20.8756 21.0146 19.835C21.0605 19.5754 21.207 19.3445 21.4223 19.1924C21.6376 19.0403 21.9043 18.9794 22.1643 19.0229C22.4243 19.0663 22.6566 19.2107 22.8107 19.4246C22.9647 19.6385 23.0281 19.9046 22.9871 20.165H22.9858Z" fill="#191919"></path>
</svg>
          </span>
          Made from high-quality whey/plant protein for clean nutrition.
        </li>

        <li>
          <span class="icon">
            {/* <!-- Muscle / Power icon --> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M30.0006 16.0001V24.0001C30.0006 24.2653 29.8952 24.5196 29.7077 24.7072C29.5201 24.8947 29.2658 25.0001 29.0006 25.0001H21.0006C20.7353 25.0001 20.481 24.8947 20.2934 24.7072C20.1059 24.5196 20.0006 24.2653 20.0006 24.0001C20.0006 23.7349 20.1059 23.4805 20.2934 23.293C20.481 23.1054 20.7353 23.0001 21.0006 23.0001H26.5868L17.0006 13.4138L12.7081 17.7076C12.6152 17.8005 12.5049 17.8743 12.3835 17.9246C12.2621 17.975 12.132 18.0009 12.0006 18.0009C11.8691 18.0009 11.739 17.975 11.6176 17.9246C11.4962 17.8743 11.3859 17.8005 11.2931 17.7076L2.29306 8.70757C2.10542 8.51993 2 8.26543 2 8.00007C2 7.7347 2.10542 7.48021 2.29306 7.29257C2.4807 7.10493 2.73519 6.99951 3.00056 6.99951C3.26592 6.99951 3.52042 7.10493 3.70806 7.29257L12.0006 15.5863L16.2931 11.2926C16.3859 11.1996 16.4962 11.1258 16.6176 11.0755C16.739 11.0252 16.8691 10.9993 17.0006 10.9993C17.132 10.9993 17.2621 11.0252 17.3835 11.0755C17.5049 11.1258 17.6152 11.1996 17.7081 11.2926L28.0006 21.5863V16.0001C28.0006 15.7349 28.1059 15.4805 28.2934 15.293C28.481 15.1054 28.7353 15.0001 29.0006 15.0001C29.2658 15.0001 29.5201 15.1054 29.7077 15.293C29.8952 15.4805 30.0006 15.7349 30.0006 16.0001Z" fill="#191919"></path>
</svg>
          </span>
          Helps build lean muscle mass and improves performance.
        </li>

        <li>
          <span class="icon">
            {/* <!-- Blend / Cycle icon --> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M17.0007 9.9998V15.4335L21.5157 18.1423C21.7432 18.2789 21.907 18.5002 21.9713 18.7576C22.0355 19.015 21.9948 19.2874 21.8582 19.5148C21.7217 19.7422 21.5003 19.9061 21.2429 19.9703C20.9855 20.0345 20.7132 19.9939 20.4857 19.8573L15.4857 16.8573C15.3378 16.7684 15.2153 16.6427 15.1303 16.4924C15.0453 16.3421 15.0007 16.1724 15.0007 15.9998V9.9998C15.0007 9.73458 15.1061 9.48023 15.2936 9.29269C15.4812 9.10516 15.7355 8.9998 16.0007 8.9998C16.266 8.9998 16.5203 9.10516 16.7079 9.29269C16.8954 9.48023 17.0007 9.73458 17.0007 9.9998ZM28.0007 6.9998C27.7355 6.9998 27.4812 7.10516 27.2936 7.29269C27.1061 7.48023 27.0007 7.73458 27.0007 7.9998V10.2498C26.207 9.3298 25.397 8.44355 24.4857 7.52105C22.8181 5.85318 20.6959 4.71375 18.3843 4.24512C16.0727 3.77649 13.6743 3.99945 11.4887 4.88613C9.30316 5.77282 7.42734 7.28391 6.09567 9.2306C4.76399 11.1773 4.03552 13.4732 4.00127 15.8316C3.96701 18.1899 4.6285 20.5061 5.90307 22.4906C7.17765 24.4752 9.00879 26.0401 11.1677 26.9899C13.3266 27.9397 15.7175 28.2322 18.0417 27.8309C20.3659 27.4296 22.5203 26.3523 24.2357 24.7335C24.3313 24.6433 24.4081 24.535 24.4618 24.4151C24.5155 24.2951 24.5451 24.1657 24.5488 24.0343C24.5525 23.9029 24.5303 23.7721 24.4835 23.6493C24.4366 23.5265 24.366 23.4141 24.2757 23.3185C24.1855 23.223 24.0772 23.1462 23.9573 23.0925C23.8373 23.0388 23.7079 23.0092 23.5765 23.0055C23.4451 23.0018 23.3143 23.024 23.1915 23.0708C23.0687 23.1177 22.9563 23.1883 22.8607 23.2785C21.4308 24.6261 19.6355 25.5226 17.6992 25.856C15.7628 26.1894 13.7711 25.945 11.9728 25.1532C10.1745 24.3614 8.64927 23.0574 7.58764 21.4041C6.52601 19.7507 5.97499 17.8212 6.00339 15.8565C6.03179 13.8918 6.63836 11.979 7.74734 10.357C8.85632 8.73501 10.4186 7.47564 12.239 6.73619C14.0594 5.99674 16.0574 5.80997 17.9833 6.1992C19.9093 6.58844 21.6779 7.53643 23.0682 8.9248C24.0857 9.9548 24.977 10.9473 25.8757 11.9998H23.0007C22.7355 11.9998 22.4812 12.1052 22.2936 12.2927C22.1061 12.4802 22.0007 12.7346 22.0007 12.9998C22.0007 13.265 22.1061 13.5194 22.2936 13.7069C22.4812 13.8944 22.7355 13.9998 23.0007 13.9998H28.0007C28.266 13.9998 28.5203 13.8944 28.7079 13.7069C28.8954 13.5194 29.0007 13.265 29.0007 12.9998V7.9998C29.0007 7.73458 28.8954 7.48023 28.7079 7.29269C28.5203 7.10516 28.266 6.9998 28.0007 6.9998Z" fill="#191919"></path>
</svg>
          </span>
          Blends smoothly into shakes and daily meals with great taste.
        </li>

      </ul>
    </div>

  </div>
</section>


 <section className="adv-container container">
      <div className="adv-left">
        <h2 className="adv-title">
          The <span className="highlight">Evercore</span> Protein Advantage
        </h2>
        <div className="adv-img-box">
          <img
            src="/assets/images/recipe.webp"
            alt="Evercore Protein"
            className="adv-product-img"
          />
        </div>
      </div>

      <div className="adv-right">
        

        <div className="adv-list">
          {[
            "High-quality whey protein",
            "No artificial sweeteners",
            "Fast absorption for muscle recovery",
            "Rich amino acid profile",
            "Easy to mix, lump-free",
          ].map((item, index) => (
            <div className="adv-item" key={index}>
              <div className="adv-icon">
                <i class="fa-solid fa-check"></i>

              </div>
              <p>{item}</p>
              <div className="adv-cross">
                <i class="fa-solid fa-xmark"></i>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


  <section className="banner-section">
        <div className="container-fluid-lg">
            <div className="row ">
                <div className="col-12">
                    <div className="banner-contain-3 section-b-space section-t-space hover-effect overflow-visible" style={{backgroundImage:'url(/assets/images/top.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                        {/* <img src="https://themes.pixelstrap.com/fastkart/assets/images/furniture/banner/6.jpg" className="bg-img" alt="img" width={"100%"}/> */}
                        <img src="/assets/images/Natural_Protein_PB.png" className="flower-pot img-fluid" alt="img" style={{height:'276px'}}/>
                        <div
                            className="banner-detail p-center-left position-relative d-block py-0 banner-furniture mend-auto">
                            <div className="row d-flex justify-content-center">
                                <div className="col-xl-6 offset-xxl-2 offset-xl-1 col-md-8 col-sm-9">
                                   
                                    <h2 className="mt-sm-3 mt-1 mb-2 text-content">Curious about the <span>ingredients?</span></h2>
                                    <p className="text-content">With clarity and transparency, here’s the truth behind what goes into your protein.</p>
                                    <a href="/Shop">
                                    <button className="pro-acc-logout-btn mt-sm-4 mt-2 btn-md text-white fw-bold">DISCOVER MORE</button>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    {/* <!-- Nav Tab Section Start --> */}
    <section>
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="product-section-box m-0">
                        <ul className="nav nav-tabs custom-nav" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="description-tab" data-bs-toggle="tab"
                                    data-bs-target="#description" type="button" role="tab">Description</button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info"
                                    type="button" role="tab">Additional
                                    info</button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="care-tab" data-bs-toggle="tab" data-bs-target="#care"
                                    type="button" role="tab">Care
                                    Instructions</button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review"
                                    type="button" role="tab">Review</button>
                            </li>
                        </ul>

                        <div className="tab-content custom-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="description" role="tabpanel">
    <div className="product-description">
        <div className="nav-desh">

            <p>Evercore Yeast Protein – Double Chocolate is crafted for those who demand clean nutrition without compromising on taste. Made from premium yeast-derived protein, it delivers a rich, smooth chocolate flavor that satisfies your cravings while supporting your fitness goals.</p>

            <p>This advanced protein formula offers a complete amino acid profile, helping you build lean muscle, enhance strength, and speed up post-workout recovery. Its naturally light and easy-to-digest composition makes it suitable for daily use, even for those with sensitive stomachs.</p>

            <p>With every scoop, you enjoy a delicious double-chocolate blend packed with high-quality protein, essential nutrients, and exceptional purity. Use it as a post-workout shake, a meal supplement, or a nutritious boost during your busy day.</p>

            <p>Choose Evercore Yeast Protein – Double Chocolate for clean, sustainable, and efficient nutrition that powers your performance from the inside out—one smooth, chocolaty sip at a time.</p>

        </div>
    </div>
</div>


                            <div className="tab-pane fade" id="info" role="tabpanel">
                                <div className="table-responsive">
                                   <table className="table info-table">
    <tbody>
        <tr>
            <td>Specialty</td>
            <td>Vegan, Lactose-Free</td>
        </tr>

        <tr>
            <td>Protein Source</td>
            <td>Yeast Protein Isolate</td>
        </tr>

        <tr>
            <td>Brand</td>
            <td>Evercore</td>
        </tr>

        <tr>
            <td>Flavor</td>
            <td>Double Chocolate</td>
        </tr>

        <tr>
            <td>Form</td>
            <td>Powder</td>
        </tr>

        <tr>
            <td>Package Type</td>
            <td>Jar / Pouch</td>
        </tr>

        <tr>
            <td>Manufacturer</td>
            <td>Evercore Nutrition Labs</td>
        </tr>

        <tr>
            <td>Net Quantity</td>
            <td>1 kg</td>
        </tr>

        <tr>
            <td>Diet Type</td>
            <td>Vegetarian</td>
        </tr>

        <tr>
            <td>Allergen Info</td>
            <td>No Dairy, No Soy, No Gluten</td>
        </tr>

        <tr>
            <td>Shelf Life</td>
            <td>18 Months</td>
        </tr>

        <tr>
            <td>Recommended Usage</td>
            <td>1 Scoop (30g) Daily</td>
        </tr>
    </tbody>
</table>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="care" role="tabpanel">
                                <div className="information-box">
                                   <ul>
    <li>Store the protein powder in a cool, dry place away from direct sunlight.</li>

    <li>Always keep the container tightly sealed to prevent moisture absorption.</li>

    <li>Use only a clean, dry scoop to avoid lumps or contamination.</li>

    <li>Do not refrigerate or freeze the powder, as it may affect texture and quality.</li>

    <li>Mix one scoop with water or milk and consume immediately for best taste and nutrition.</li>

    <li>Check the scoop placement before use—sometimes it settles at the bottom.</li>

    <li>Keep out of reach of small children.</li>

    <li>Use within 45 days of opening the container for optimal freshness.</li>
</ul>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="review" role="tabpanel">
                                <div className="review-box">
                                    <div className="row">
                                        <div className="col-xl-5">
                                            <div className="product-rating-box">
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="product-main-rating">
                                                            <h2>3.40
                                                                <i data-feather="star"></i>
                                                            </h2>

                                                            <h5>5 Overall Rating</h5>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-12">
                                                        <ul className="product-rating-list">
                                                            <li>
                                                                <div className="rating-product">
                                                                    <h5>5<i data-feather="star"></i></h5>
                                                                    <div className="progress">
                                                                        <div className="progress-bar" style={{width:'40%'}}>
                                                                        </div>
                                                                    </div>
                                                                    <h5 className="total">2</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="rating-product">
                                                                    <h5>4<i data-feather="star"></i></h5>
                                                                    <div className="progress">
                                                                        <div className="progress-bar"  style={{width:'20%'}}>
                                                                        </div>
                                                                    </div>
                                                                    <h5 className="total">1</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="rating-product">
                                                                    <h5>3<i data-feather="star"></i></h5>
                                                                    <div className="progress">
                                                                        <div className="progress-bar"  style={{width:'0%'}}>
                                                                        </div>
                                                                    </div>
                                                                    <h5 className="total">0</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="rating-product">
                                                                    <h5>2<i data-feather="star"></i></h5>
                                                                    <div className="progress">
                                                                        <div className="progress-bar" style={{width:'20%'}}>
                                                                        </div>
                                                                    </div>
                                                                    <h5 className="total">1</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="rating-product">
                                                                    <h5>1<i data-feather="star"></i></h5>
                                                                    <div className="progress">
                                                                        <div className="progress-bar"  style={{width:'20%'}}>
                                                                        </div>
                                                                    </div>
                                                                    <h5 className="total">1</h5>
                                                                </div>
                                                            </li>

                                                        </ul>

                                                        <div className="review-title-2">
                                                            <h4 className="fw-bold">Review this product</h4>
                                                            <p>Let other customers know what you think</p>
                                                            <button className="btn" type="button" data-bs-toggle="modal"
                                                                data-bs-target="#writereview">Write a
                                                                review</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-7">
                                            <div className="review-people">
                                                <ul className="review-list">
                                                    <li>
                                                        <div className="people-box">
                                                            <div>
                                                                <div className="people-image people-text">
                                                                    <img alt="user" className="img-fluid "
                                                                        src="/assets/images/user.png" />
                                                                </div>
                                                            </div>
                                                            <div className="people-comment">
                                                                <div className="people-name"><a href=""
                                                                        className="name">Jack Doe</a>
                                                                    <div className="date-time">
                                                                        <h6 className="text-content"> 29 Sep 2023
                                                                            06:40:PM
                                                                        </h6>
                                                                        <div className="product-rating">
                                                                            <ul className="rating">
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"></i>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="reply">
                                                                   <p>Absolutely loved this protein! The Double Chocolate flavor is rich and smooth, and it mixes instantly without lumps. Perfect for my post-workout recovery. Highly recommended!</p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="people-box">
                                                            <div>
                                                                <div className="people-image people-text">
                                                                    <img alt="user" className="img-fluid "
                                                                        src="/assets/images/user.png" />
                                                                </div>
                                                            </div>
                                                            <div className="people-comment">
                                                                <div className="people-name"><a href=""
                                                                        className="name">Jessica
                                                                        Miller</a>
                                                                    <div className="date-time">
                                                                        <h6 className="text-content"> 29 Sep 2023
                                                                            06:34:PM
                                                                        </h6>
                                                                        <div className="product-rating">
                                                                            <div className="product-rating">
                                                                                <ul className="rating">
                                                                                    <li>
                                                                                        <i data-feather="star"
                                                                                            className="fill"></i>
                                                                                    </li>
                                                                                    <li>
                                                                                        <i data-feather="star"
                                                                                            className="fill"></i>
                                                                                    </li>
                                                                                    <li>
                                                                                        <i data-feather="star"
                                                                                            className="fill"></i>
                                                                                    </li>
                                                                                    <li>
                                                                                        <i data-feather="star"
                                                                                            className="fill"></i>
                                                                                    </li>
                                                                                    <li>
                                                                                        <i data-feather="star"></i>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="reply">
                                                                    <p>This is one of the cleanest proteins I’ve tried. No bloating, easy to digest, and the taste is amazing. A great choice for daily nutrition.</p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="people-box">
                                                            <div>
                                                                <div className="people-image people-text">
                                                                    <img alt="user" className="img-fluid "
                                                                        src="/assets/images/user.png" />
                                                                </div>
                                                            </div>
                                                            <div className="people-comment">
                                                                <div className="people-name"><a href=""
                                                                        className="name">Rome Doe</a>
                                                                    <div className="date-time">
                                                                        <h6 className="text-content"> 29 Sep 2023
                                                                            06:18:PM
                                                                        </h6>
                                                                        <div className="product-rating">
                                                                            <ul className="rating">
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"></i>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="reply">
                                                                   <p>Fantastic quality! I noticed improved energy and better muscle recovery within a week. The texture and purity feel premium. Totally worth it.</p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="people-box">
                                                            <div>
                                                                <div className="people-image people-text">
                                                                    <img alt="user" className="img-fluid "
                                                                        src="/assets/images/user.png" />
                                                                </div>
                                                            </div>
                                                            <div className="people-comment">
                                                                <div className="people-name"><a href=""
                                                                        className="name">Sarah
                                                                        Davis</a>
                                                                    <div className="date-time">
                                                                        <h6 className="text-content"> 29 Sep 2023
                                                                            05:58:PM
                                                                        </h6>
                                                                        <div className="product-rating">
                                                                            <ul className="rating">
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"></i>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="reply">
                                                                   <p>I was surprised by how natural and smooth the flavor is. It doesn’t feel artificial at all. Great mixability and perfect for shakes or smoothies.</p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="people-box">
                                                            <div>
                                                                <div className="people-image people-text">
                                                                    <img alt="user" className="img-fluid "
                                                                        src="/assets/images/user.png" />
                                                                </div>
                                                            </div>
                                                            <div className="people-comment">
                                                                <div className="people-name"><a href=""
                                                                        className="name">John Doe</a>
                                                                    <div className="date-time">
                                                                        <h6 className="text-content"> 29 Sep 2023
                                                                            05:22:PM
                                                                        </h6>
                                                                        <div className="product-rating">
                                                                            <ul className="rating">
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"
                                                                                        className="fill"></i>
                                                                                </li>
                                                                                <li>
                                                                                    <i data-feather="star"></i>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="reply">
                                                                   <p>Very impressed with this protein. High-quality ingredients and no unnecessary fillers. Great results and a superb chocolate taste!</p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Nav Tab Section End --> */}

    {/* <!-- Related Product Section Start --> */}
    <section className="product-list-section section-b-space">
        <div className="container-fluid-lg">
            <div className="title">
                <h2>Related Products</h2>
           
            </div>
         <div className="row">
                <div className="col-12">
                    <div className="slider-6_1 product-wrapper">
                        <div>
                            <div className="product-box-3 wow fadeInUp">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product1.webp"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                           

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" className="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="product-detail">
                                       
                                        <a href="/Shop">
                                            <h5 className="name">Evercore Yeast Protein - Double Chocolate</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                            </ul>
                                            <span>(5.0)</span>
                                        </div>
                                        <h6 className="unit">500 G</h6>
                                       <h5 className="price">
  <span
 className="gradintback"
  >
    <span >₹10.25</span>
    <del style={{color:'#f6efdb'}}>₹12.57</del>
  </span>
</h5>

                                         <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                <button className="btn addcart-button btn buy-button"><i
                        className="fa-solid fa-plus"></i></button>
                <div className="cart_qty qty-box-2">
                    <div className="input-group">
                        <button type="button" className="qty-left-minus" data-type="minus"
                            data-field="">
                            <i className="fa fa-minus"></i>
                        </button>
                        <input className="form-control input-number qty-input" type="text"
                            name="quantity" value="1" />
                        <button type="button" className="qty-right-plus" data-type="plus"
                            data-field="">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="product-box-3 wow fadeInUp" data-wow-delay="0.05s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product2.webp"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                           

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" className="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-footer">
                                    <div className="product-detail">
                                       
                                        <a href="/Shop">
                                            <h5 className="name">Evercore Yeast Protein - Vanilla Essential</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <span>(4.0)</span>
                                        </div>
                                        <h6 className="unit">250 ml</h6>
                                        <h5 className="price">
                                            <span  className="gradintback">

                                            <span >₹08.02</span> <del style={{color:'#f6efdb'}}>₹15.15</del>
                                            </span>
                                        </h5>
                                         <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                <button className="btn addcart-button btn buy-button"><i
                        className="fa-solid fa-plus"></i></button>
                <div className="cart_qty qty-box-2">
                    <div className="input-group">
                        <button type="button" className="qty-left-minus" data-type="minus"
                            data-field="">
                            <i className="fa fa-minus"></i>
                        </button>
                        <input className="form-control input-number qty-input" type="text"
                            name="quantity" value="1" />
                        <button type="button" className="qty-right-plus" data-type="plus"
                            data-field="">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="product-box-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product3.webp"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                           

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" className="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="product-detail">
                                      
                                        <a href="/Shop">
                                            <h5 className="name">Evercore Yeast Protein - Mixed Berry</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <span>(2.4)</span>
                                        </div>
                                        <h6 className="unit">350 G</h6>
                                        <h5 className="price">
                                              <span  className="gradintback">

                                            <span >₹04.33</span> <del style={{color:'#f6efdb'}}>₹10.36</del>
                                            </span>
                                        </h5>
                                         <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                <button className="btn addcart-button btn buy-button"><i
                        className="fa-solid fa-plus"></i></button>
                <div className="cart_qty qty-box-2">
                    <div className="input-group">
                        <button type="button" className="qty-left-minus" data-type="minus"
                            data-field="">
                            <i className="fa fa-minus"></i>
                        </button>
                        <input className="form-control input-number qty-input" type="text"
                            name="quantity" value="1" />
                        <button type="button" className="qty-right-plus" data-type="plus"
                            data-field="">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="product-box-3 wow fadeInUp" data-wow-delay="0.15s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product4.webp"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                          

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" className="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="product-detail">
                                      
                                        <a href="/Shop">
                                            <h5 className="name">Protein Bar - Chocolate Peanut Butter</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                            </ul>
                                            <span>(5.0)</span>
                                        </div>
                                        <h6 className="unit">570 G</h6>
                                        <h5 className="price">
                                              <span  className="gradintback">

                                            <span >₹12.52</span> <del style={{color:'#f6efdb'}}>₹13.62</del>
                                            </span>
                                        </h5>
                                         <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                <button className="btn addcart-button btn buy-button"><i
                        className="fa-solid fa-plus"></i></button>
                <div className="cart_qty qty-box-2">
                    <div className="input-group">
                        <button type="button" className="qty-left-minus" data-type="minus"
                            data-field="">
                            <i className="fa fa-minus"></i>
                        </button>
                        <input className="form-control input-number qty-input" type="text"
                            name="quantity" value="1" />
                        <button type="button" className="qty-right-plus" data-type="plus"
                            data-field="">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="product-box-3 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product5.webp"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>


                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" className="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="product-detail">
                                       
                                        <a href="/Shop">
                                            <h5 className="name">Evercore Yeast Protein - Vanilla Essential</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <span>(3.8)</span>
                                        </div>
                                        <h6 className="unit">100 G</h6>
                                        <h5 className="price">
                                              <span  className="gradintback">

                                            <span>₹10.25</span> <del style={{color:'#f6efdb'}}>₹12.36</del>
                                            </span>
                                        </h5>
                                        <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                <button className="btn addcart-button btn buy-button"><i
                        className="fa-solid fa-plus"></i></button>
                <div className="cart_qty qty-box-2">
                    <div className="input-group">
                        <button type="button" className="qty-left-minus" data-type="minus"
                            data-field="">
                            <i className="fa fa-minus"></i>
                        </button>
                        <input className="form-control input-number qty-input" type="text"
                            name="quantity" value="1" />
                        <button type="button" className="qty-right-plus" data-type="plus"
                            data-field="">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="product-box-3 wow fadeInUp" data-wow-delay="0.25s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product3.webp"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>


                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" className="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="product-detail">
                                     
                                        <a href="/Shop">
                                            <h5 className="name">Post-Workout BCAA Powder - Green Apple</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <span>(4.0)</span>
                                        </div>

                                        <h6 className="unit">550 G</h6>

                                        <h5 className="price">
                                              <span  className="gradintback">

                                            <span>₹14.25</span> <del style={{color:'#f6efdb'}}>₹16.57</del>
                                            </span>
                                        </h5>
                                        <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                <button className="btn addcart-button btn buy-button"><i
                        className="fa-solid fa-plus"></i></button>
                <div className="cart_qty qty-box-2">
                    <div className="input-group">
                        <button type="button" className="qty-left-minus" data-type="minus"
                            data-field="">
                            <i className="fa fa-minus"></i>
                        </button>
                        <input className="form-control input-number qty-input" type="text"
                            name="quantity" value="1" />
                        <button type="button" className="qty-right-plus" data-type="plus"
                            data-field="">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                         <div>
                            <div className="product-box-3 wow fadeInUp" data-wow-delay="0.15s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product4.webp"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                          

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" className="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="product-detail">
                                      
                                        <a href="/Shop">
                                            <h5 className="name">Protein Bar - Chocolate Peanut Butter</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                            </ul>
                                            <span>(5.0)</span>
                                        </div>
                                        <h6 className="unit">570 G</h6>
                                        <h5 className="price">
                                              <span  className="gradintback">

                                            <span >₹12.52</span> <del style={{color:'#f6efdb'}}>₹13.62</del>
                                            </span>
                                        </h5>
                                         <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                <button className="btn addcart-button btn buy-button"><i
                        className="fa-solid fa-plus"></i></button>
                <div className="cart_qty qty-box-2">
                    <div className="input-group">
                        <button type="button" className="qty-left-minus" data-type="minus"
                            data-field="">
                            <i className="fa fa-minus"></i>
                        </button>
                        <input className="form-control input-number qty-input" type="text"
                            name="quantity" value="1" />
                        <button type="button" className="qty-right-plus" data-type="plus"
                            data-field="">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                     </div>

        </div>
    </section>
    {/* <!-- Related Product Section End --> */}
     {/* <!-- Sticky Cart Box Start --> */}
    <div className="sticky-bottom-cart">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="cart-content">
                        <div className="product-image">
                            <img src="/assets/images/product1.webp" className="img-fluid blur-up lazyload"
                                alt="img" />
                            <div className="content">
                                <h5>Evercore Yeast Protein - Double Chocolate</h5>
                                <div style={{ display: "flex",marginTop:'10px' }}>
        <h5
          className="price theme-color"
           
        >
          ₹70.21
        </h5>

        <h5 style={{ marginTop: "10px" }}>
          <del>₹65.25</del>
        </h5>
                                <span className=" theme-color" style={{margin:'10px'}}>55% off</span>
      </div>
                            </div>
                        </div>
                        <div className="selection-section">
                            <div className="form-group mb-0">
                                <select id="input-state" className="form-control form-select">
                                    <option selected disabled>Choose Weight...</option>
                                    <option>1/2 KG</option>
                                    <option>1 KG</option>
                                    <option>1.5 KG</option>
                                </select>
                            </div>
                            <div className="cart_qty qty-box product-qty m-0">
                                <div className="input-group h-100">
                                    <button type="button" className="qty-left-minus" data-type="minus" data-field="">
                                        <i className="fa fa-minus"></i>
                                    </button>
                                    <input className="form-control input-number qty-input" type="text" name="quantity"
                                        value="1" />
                                    <button type="button" className="qty-right-plus" data-type="plus" data-field="">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="add-btn">
                            <a className="btn theme-bg-color text-white wishlist-btn" href="/Wishlist"><i
                                    className="fa fa-bookmark"></i> Wishlist</a>
                            <a className="btn pro-acc-logout-btn text-white" href="/Checkout"><i
                                    className="fas fa-shopping-cart"></i> Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Sticky Cart Box End --> */}
        {/* <!-- Review Modal Start --> */}
    <div className="modal fade theme-modal question-modal" id="writereview" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Write a review</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="modal-body pt-0">
                    <form className="product-review-form">
                        <div className="product-wrapper">
                            <div className="product-image">
                                <img className="img-fluid" alt="Fantasy Crunchy Choco Chip Cookies0"
                                    src="/assets/images/product1.webp" />
                            </div>
                            <div className="product-content">
                                <h5 className="name">Evercore Yeast Protein - Double Chocolate</h5>
                                <div className="product-review-rating">
                                    <div className="product-rating">
                                        <h6 className="price-number">₹16.00</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review-box">
                            <div className="product-review-rating">
                                <label>Rating</label>
                                <div className="product-rating">
                                    <ul className="rating">
                                        <li>
                                             <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                        </li>
                                        <li>
                                             <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                        </li>
                                        <li>
                                             <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                        </li>
                                        <li>
                                             <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                        </li>
                                        <li>
                                             <i className="fa-solid fa-star text-xl fill" style={{ color: '#ffb321' }}></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="review-box">
                            <label for="content" className="form-label">Your Question *</label>
                            <textarea id="content" rows="3" className="form-control" placeholder="Your Question"></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-md btn-theme-outline fw-bold"
                        data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-md fw-bold text-light theme-bg-color">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Review Modal End --> */}
     {/* <!-- Quick View Modal Box Start --> */}
    <div className="modal fade theme-modal view-modal" id="view" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
            <div className="modal-content">
                <div className="modal-header p-0">
                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row g-sm-4 g-2">
                        <div className="col-lg-6">
                            <div className="slider-image">
                                <img src="/assets/images/product1.webp" className="img-fluid blur-up lazyload"
                                    alt="img" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="right-sidebar-modal">
                                <h4 className="title-name">Evercore Yeast Protein - Double Chocolate </h4>
                                <h4 className="price">₹ 1250.00</h4>
                                <div className="product-rating">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <span className="ms-2">8 Reviews</span>
                                    <span className="ms-2 text-danger">6 sold in last 16 hours</span>
                                </div>

                                <div className="product-detail">
                                    <h4>Product Details :</h4>
                                    <p>Candy canes sugar plum tart cotton candy chupa chups sugar plum chocolate I love.
                                        Caramels marshmallow icing dessert candy canes I love soufflé I love toffee.
                                        Marshmallow pie sweet sweet roll sesame snaps tiramisu jelly bear claw. Bonbon
                                        muffin I love carrot cake sugar plum dessert bonbon.</p>
                                </div>

                                <ul className="brand-list">
                                    <li>
                                        <div className="brand-box">
                                            <h5>Brand Name:</h5>
                                            <h6>Black Forest</h6>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="brand-box">
                                            <h5>Product Code:</h5>
                                            <h6>W0690034</h6>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="brand-box">
                                            <h5>Product Type:</h5>
                                            <h6>White Cream Cake</h6>
                                        </div>
                                    </li>
                                </ul>

                                <div className="select-size">
                                    <h4> Protein size:</h4>
                                    <select className="form-select select-form-size">
                                        <option selected>Select Size</option>
                                        <option value="1.2">1/2 KG</option>
                                        <option value="0">1 KG</option>
                                        <option value="1.5">1/5 KG</option>
                                    </select>
                                </div>

                                <div className="modal-button">
                                    <a href = '/cart'
                                        className="btn btn-md add-cart-button icon">Add
                                        To Cart</a>
                                    <a href = ''
                                        className="btn theme-bg-color view-button icon text-white fw-bold btn-md">
                                        View More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Quick View Modal Box End --> */}
       <Footer />
    </>
  )
}

export default Productdetails