import React, { useEffect } from "react";
import $ from "jquery";
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
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
      <Navbar />

        {/* <!-- Home Section Start --> */}
    <section className="home-section-2 home-section-bg pt-0 overflow-hidden">
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12">
                    <div className="slider-animate">
                        <div>
                            <div className="home-contain rounded-0 p-0">
                                <img src="/assets/images/unnamed.jpg"
                                    className="img-fluid bg-img blur-up lazyload home-img" alt="" sizes='1920*637' style={{width:'100%'}}/>
                                <div className="home-detail home-big-space p-center-left home-overlay ">
                                    <div className="container-fluid-lg">
                                        <div>
                                            <h6 className="ls-expanded theme-color text-uppercase">New Generation Protein
                                            </h6>
                                            <h1 className="heding-2 text-width-h1">unlock Your Full Potential With Yeast.</h1>
                                            {/* <h2 className="content-2">Dryfruits shopping made Easy</h2> */}
                                            <h5 className="text-content text-width-p">Experience the sustainable, gut-friendly power of Evercore yeast Protein. Compele amino acid profile, zero bloating, and incredible taste in every scoop. 
                                            </h5>
                                           <a href = '/Shop'>  <button
                                                className="btn theme-bg-color btn-md text-white fw-bold mt-md-4 mt-2 mend-auto"
                                               >Shop Now <i
                                                    className="fa-solid fa-arrow-right icon"></i></button></a>
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
    {/* <!-- Home Section End --> */}

        {/* <!-- Service Section Start --> */}
    <section className="service-section section-b-space d-none d-md-block">
  <div className="container-fluid-lg">
    <div className="row g-3 row-cols-xxl-4 row-cols-lg-3 row-cols-md-2">

      <div>
        <div className="service-contain-2">
          <svg className="icon-width">
            <use href="../assets/svg/svg/service-icon-4.svg#shipping"></use>
          </svg>
          <div className="service-detail">
            <h3>100% Vegan</h3>
            <h6 className="text-content">Plant-based nutrition, no animal ingredients</h6>
          </div>
        </div>
      </div>

      <div>
        <div className="service-contain-2">
          <svg className="icon-width">
            <use href="../assets/svg/svg/service-icon-4.svg#service"></use>
          </svg>
          <div className="service-detail">
            <h3>Complete Amino</h3>
            <h6 className="text-content">Full essential amino acid profile</h6>
          </div>
        </div>
      </div>

      <div>
        <div className="service-contain-2">
          <svg className="icon-width">
            <use href="../assets/svg/svg/service-icon-4.svg#pay"></use>
          </svg>
          <div className="service-detail">
            <h3>Eco-Friendly</h3>
            <h6 className="text-content">Sustainable packaging & clean ingredients</h6>
          </div>
        </div>
      </div>

      <div>
        <div className="service-contain-2">
          <svg className="icon-width">
            <use href="../assets/svg/svg/service-icon-4.svg#offer"></use>
          </svg>
          <div className="service-detail">
            <h3>Gut Health</h3>
            <h6 className="text-content">Supports digestion & overall wellness</h6>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    {/* <!-- Service Section End --> */}

     {/* <!-- Product Section Start --> */}
    <section className="product-section">
        <div className="container-fluid-lg">
            <div className="row g-sm-4 g-3">
                <div className="col-xxl-12">
                    <div className="title title-flex">
                        <div>
                            <h2>Top Save Today</h2>
                            <span className="title-leaf">
                                <svg className="icon-width">
                                    <use href="../assets/svg/leaf.svg#leaf"></use>
                                </svg>
                            </span>
                            <p>Don't miss this opportunity at a special discount just for this week.</p>
                        </div>
                      
                    </div>

                    <div className="section-b-space">
                        <div className="row row-cols-xxl-6 row-cols-md-4 row-cols-sm-3 row-cols-2 g-sm-4 g-3 no-arrow">
                           <div>
    <div className="product-box product-white-bg wow fadeIn">
        <div className="product-image">
            <a href="/Productdetails">
                <img src="/assets/images/product1.webp"
                    className="img-fluid blur-up lazyload" alt="Double Chocolate Yeast Protein" />
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
        <div className="product-detail position-relative">
            <a href="/Productdetails">
                <h6 className="name">Evercore Yeast Protein - Double Chocolate</h6>
            </a>
            <h6 className="sold weight text-content fw-normal">1 KG</h6>
            <h6 className="price theme-color">₹ 1250.00</h6>
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



<div>
    <div className="product-box product-white-bg wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
            <a href="/Productdetails">
                <img src="/assets/images/product2.webp"
                    className="img-fluid blur-up lazyload" alt="Vanilla Yeast Protein" />
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
        <div className="product-detail position-relative">
            <a href="/Productdetails">
                <h6 className="name">Evercore Yeast Protein - Vanilla</h6>
            </a>
            <h6 className="sold weight text-content fw-normal">1 KG</h6>
            <h6 className="price theme-color">₹ 1250.00</h6>
            <div className="add-to-cart-btn-2 addtocart_btn">
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



<div>
    <div className="product-box product-white-bg wow fadeIn">
        <div className="product-image">
            <a href="/Productdetails">
                <img src="/assets/images/product3.webp"
                    className="img-fluid blur-up lazyload" alt="Mixed Berry Yeast Protein" />
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
        <div className="product-detail position-relative">
            <a href="/Productdetails">
                <h6 className="name">Evercore Yeast Protein - Mixed Berry</h6>
            </a>
            <h6 className="sold weight text-content fw-normal">1 KG</h6>
            <h6 className="price theme-color">₹ 1250.00</h6>
            <div className="add-to-cart-btn-2 addtocart_btn">
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



<div>
    <div className="product-box product-white-bg wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
            <a href="/Productdetails">
                <img src="/assets/images/product4.webp"
                    className="img-fluid blur-up lazyload" alt="Chocolate Peanut Butter Protein Bar" />
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
        <div className="product-detail position-relative">
            <a href="/Productdetails">
                <h6 className="name">Protein Bar - Chocolate Peanut Butter</h6>
            </a>
            <h6 className="sold weight text-content fw-normal">60 Grams</h6>
            <h6 className="price theme-color">₹ 120.00</h6>
            <div className="add-to-cart-btn-2 addtocart_btn">
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

<div>
    <div className="product-box product-white-bg wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
            <a href="/Productdetails">
                <img src="/assets/images/product2.webp"
                    className="img-fluid blur-up lazyload" alt="Vanilla Yeast Protein" />
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
        <div className="product-detail position-relative">
            <a href="/Productdetails">
                <h6 className="name">Evercore Yeast Protein - Vanilla</h6>
            </a>
            <h6 className="sold weight text-content fw-normal">1 KG</h6>
            <h6 className="price theme-color">₹ 1250.00</h6>
            <div className="add-to-cart-btn-2 addtocart_btn">
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

<div>
    <div className="product-box product-white-bg wow fadeIn">
        <div className="product-image">
            <a href="/Productdetails">
                <img src="/assets/images/product5.webp"
                    className="img-fluid blur-up lazyload" alt="BCAA Supplement" />
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
        <div className="product-detail position-relative">
            <a href="/Productdetails">
                <h6 className="name">Post-Workout BCAA Powder - Green Apple</h6>
            </a>
            <h6 className="sold weight text-content fw-normal">250 Grams</h6>
            <h6 className="price theme-color">₹ 950.00</h6>
            <div className="add-to-cart-btn-2 addtocart_btn">
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

                    <div className="title">
                        <h2>Trending searches</h2>
                        <span className="title-leaf">
                            <svg className="icon-width">
                                <use href="../assets/svg/leaf.svg#leaf"></use>
                            </svg>
                        </span>
                        <p>Top Categories Of The Week</p>
                    </div>

                    <div className="category-slider-2 product-wrapper no-arrow">
                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="/assets/images/magnesium (1).png" className="blur-up lazyload"
                                        alt="" />
                                    <h5>Magnesium</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="/assets/images/molecule (1).png" className="blur-up lazyload"
                                        alt="" />
                                    <h5>Collagen</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="/assets/images/health.png" className="blur-up lazyload"
                                        alt="" />
                                    <h5>Protein</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="/assets/images/omega (1).png" className="blur-up lazyload"
                                        alt="" />
                                    <h5>Omega</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="/assets/images/protein.png" className="blur-up lazyload" alt="" />
                                    <h5>Sleep</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="/assets/images/multivitamin (1).png" className="blur-up lazyload"
                                        alt="" />
                                    <h5>Multivitamins</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="/assets/images/immune-booster (2).png" className="blur-up lazyload"
                                        alt="" />
                                    <h5>Immunity Boosters</h5>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="section-t-space section-b-space">
                        <div className="row g-md-4 g-3">
                            <div className="col-md-6">
                                <div className="banner-contain hover-effect" style={{backgroundImage:'url(/assets/images/chocolate-1646843503.jpg)'}}>
                                {/* 583*157  */}
                                    {/* <img src="../assets/images/furniture/banner/4.jpg" className="bg-img blur-up lazyload"
                                        alt="" /> */}
                                    <div className="banner-details p-center-left p-4">
                                        <div>
                                            <h3 className="text-kaushan text-yellow">50% offer</h3>
                                            <h4 className="text-white mb-2 fw-normal"><span
                                                    className="text-white fw-bold">Restyling</span> your Home</h4>
                                           <a href="/Shop">
                                             <button 
                                                className="btn btn-furniture btn-sm mend-auto">Shop Now <i
                                                    className="fa-solid fa-arrow-right icon"></i></button>
                                           </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="banner-contain hover-effect" style={{backgroundImage:'url(/assets/images/ba11.webp)'}}>
                                    {/* <img src="../assets/images/furniture/banner/5.jpg" className="bg-img blur-up lazyload"
                                        alt="" /> */}
                                    <div className="banner-details p-center-left p-4">
                                        <div>
                                            <h3 className="text-kaushan text-yellow">50% offer</h3>
                                            <h4 className="text-white mb-2 fw-normal"><span className="text-white fw-bold">New
                                                    Elite</span> Collections</h4>
                                            <button onclick="location.href = '/Shop';"
                                                className="btn btn-furniture btn-sm mend-auto">Shop Now <i
                                                    className="fa-solid fa-arrow-right icon"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="title d-block">
                        <h2>Shop by Budget</h2>
                        <span className="title-leaf">
                            <svg className="icon-width">
                                <use href="../assets/svg/leaf.svg#leaf"></use>
                            </svg>
                        </span>
                        <p>A virtual assistant collects the products from your list</p>
                    </div>

                  <div className="row row-cols-xxl-6 row-cols-md-4 row-cols-sm-3 row-cols-2 g-sm-4 g-3 no-arrow">
                           <div>
    <div className="product-box product-white-bg wow fadeIn">
        <div className="product-image">
            <a href="/Productdetails">
                <img src="/assets/images/product1.webp"
                    className="img-fluid blur-up lazyload" alt="Double Chocolate Yeast Protein" />
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
        <div className="product-detail position-relative">
            <a href="/Productdetails">
                <h6 className="name">Evercore Yeast Protein - Double Chocolate</h6>
            </a>
            <h6 className="sold weight text-content fw-normal">1 KG</h6>
            <h6 className="price theme-color">₹ 1250.00</h6>
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



<div>
    <div className="product-box product-white-bg wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
            <a href="/Productdetails">
                <img src="/assets/images/product2.webp"
                    className="img-fluid blur-up lazyload" alt="Vanilla Yeast Protein" />
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
        <div className="product-detail position-relative">
            <a href="/Productdetails">
                <h6 className="name">Evercore Yeast Protein - Vanilla</h6>
            </a>
            <h6 className="sold weight text-content fw-normal">1 KG</h6>
            <h6 className="price theme-color">₹ 1250.00</h6>
            <div className="add-to-cart-btn-2 addtocart_btn">
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



<div>
    <div className="product-box product-white-bg wow fadeIn">
        <div className="product-image">
            <a href="/Productdetails">
                <img src="/assets/images/product3.webp"
                    className="img-fluid blur-up lazyload" alt="Mixed Berry Yeast Protein" />
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
        <div className="product-detail position-relative">
            <a href="/Productdetails">
                <h6 className="name">Evercore Yeast Protein - Mixed Berry</h6>
            </a>
            <h6 className="sold weight text-content fw-normal">1 KG</h6>
            <h6 className="price theme-color">₹ 1250.00</h6>
            <div className="add-to-cart-btn-2 addtocart_btn">
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



<div>
    <div className="product-box product-white-bg wow fadeIn" data-wow-delay="0.1s">
        <div className="product-image">
            <a href="/Productdetails">
                <img src="/assets/images/product4.webp"
                    className="img-fluid blur-up lazyload" alt="Chocolate Peanut Butter Protein Bar" />
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
        <div className="product-detail position-relative">
            <a href="/Productdetails">
                <h6 className="name">Protein Bar - Chocolate Peanut Butter</h6>
            </a>
            <h6 className="sold weight text-content fw-normal">60 Grams</h6>
            <h6 className="price theme-color">₹ 120.00</h6>
            <div className="add-to-cart-btn-2 addtocart_btn">
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



<div>
    <div className="product-box product-white-bg wow fadeIn">
        <div className="product-image">
            <a href="/Productdetails">
                <img src="/assets/images/product5.webp"
                    className="img-fluid blur-up lazyload" alt="BCAA Supplement" />
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
        <div className="product-detail position-relative">
            <a href="/Productdetails">
                <h6 className="name">Post-Workout BCAA Powder - Green Apple</h6>
            </a>
            <h6 className="sold weight text-content fw-normal">250 Grams</h6>
            <h6 className="price theme-color">₹ 950.00</h6>
            <div className="add-to-cart-btn-2 addtocart_btn">
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

<div>
    <div className="product-box product-white-bg wow fadeIn">
        <div className="product-image">
            <a href="/Productdetails">
                <img src="/assets/images/product3.webp"
                    className="img-fluid blur-up lazyload" alt="Mixed Berry Yeast Protein" />
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
        <div className="product-detail position-relative">
            <a href="/Productdetails">
                <h6 className="name">Evercore Yeast Protein - Mixed Berry</h6>
            </a>
            <h6 className="sold weight text-content fw-normal">1 KG</h6>
            <h6 className="price theme-color">₹ 1250.00</h6>
            <div className="add-to-cart-btn-2 addtocart_btn">
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
    </section>
    {/* <!-- Product Section End --> */}

    {/* <!-- Banner Section Start --> */}
    <section className="banner-section">
        <div className="container-fluid-lg">
            <div className="row ">
                <div className="col-12">
                    <div className="banner-contain-3 section-b-space section-t-space hover-effect overflow-visible" style={{backgroundImage:'url(/assets/images/top.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                        {/* <img src="https://themes.pixelstrap.com/fastkart/assets/images/furniture/banner/6.jpg" className="bg-img" alt="" width={"100%"}/> */}
                        <img src="/assets/images/Natural_Protein_PB.png" className="flower-pot img-fluid" alt="" style={{height:'276px'}}/>
                        <div
                            className="banner-detail p-center-left position-relative d-block py-0 banner-furniture mend-auto">
                            <div className="row d-flex justify-content-center">
                                <div className="col-xl-6 offset-xxl-2 offset-xl-1 col-md-8 col-sm-9">
                                    <h4 className="text-uppercase text-yellow text-kaushan furniture-title">Best of
                                        Collections <img src="../assets/images/furniture/arrow.svg" alt="" /></h4>
                                    <h2 className="mt-sm-3 mt-1 mb-2 text-content"> Premium Protein <span
                                            className="theme-color fw-bold">LookBook</span> 2025</h2>
                                    <p className="text-content">Explore our latest collection of clean, science-backed protein blends made to 
                                    support muscle growth, performance, and everyday wellness.</p>
                                    <a href="/Shop">
                                    <button className="btn theme-bg-color mt-sm-4 mt-2 btn-md text-white fw-bold">Shop Now</button>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Banner Section End --> */}
  {/* <!-- Blog Section Start --> */}
    <section className="blog-section">
        <div className="container-fluid-lg">
            <div className="title">
                <h2>Blog</h2>
            </div>

            <div className="slider-3 arrow-slider">
                <div>
                    <div className="blog-box ratio_50">
                        <div className="blog-box-image">
                            <a href="/Blogdetails">
                                <img src="/assets/images/blog1.jpg" className="img-fluid bg-img" alt="Image Size : 510 X 232" />
                            </a>
                        </div>

                        <div className="blog-detail">
                            <label>Peanut Butter</label>
                            <a href="/Blogdetails">
                                <h2>High-Protein Peanut Butter: Meeting the Demand for Fitness and Wellness</h2>
                            </a>
                            <div className="blog-list">
                                <span>March 9, 2025</span>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="blog-box ratio_50">
                        <div className="blog-box-image">
                            <a href="/Blogdetails">
                                <img src="/assets/images/blog2.webp" className="img-fluid bg-img" alt="Image Size : 510 X 232" />
                            </a>
                        </div>

                        <div className="blog-detail">
                            <label>Biozyme Performance Whey</label>
                            <a href="/Blogdetails">
                                <h2>MuscleBlaze Biozyme Performance Whey, 4.4 lb Rich Chocolate </h2>
                            </a>
                            <div className="blog-list">
                                <span>March 9, 2025</span>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="blog-box ratio_50">
                        <div className="blog-box-image">
                            <a href="/Blogdetails">
                                <img src="/assets/images/blog3.jpg" className="img-fluid bg-img" alt="Image Size : 510 X 232" />
                            </a>
                        </div>

                        <div className="blog-detail">
                            <label>Atom Whey Protein</label>
                            <a href="/Blogdetails">
                                <h2>Atom Whey Protein 1kg With Digestive Enzymes</h2>
                            </a>
                            <div className="blog-list">
                                <span>March 9, 2025</span>
                              
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="blog-box ratio_50">
                        <div className="blog-box-image">
                            <a href="/Blogdetails">
                                <img src="/assets/images/blog4.jpg" className="img-fluid bg-img" alt="Image Size : 510 X 232" />
                            </a>
                        </div>

                        <div className="blog-detail">
                            <label>High Protein Oats</label>
                            <a href="/Blogdetails">
                                <h2>Dark Chocolate: The Ultimate Breakfast Fue</h2>
                            </a>
                            <div className="blog-list">
                                <span>March 9, 2025</span>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Section End --> */}

    {/* <!-- Newsletter Section Start --> */}
    <section className="newsletter-section section-b-space">
        <div className="container-fluid-lg">
            <div className="newsletter-box newsletter-box-2">
                <div className="newsletter-contain py-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                                <div className="newsletter-detail">
                                    <h2>Join our newsletter and get...</h2>
                                    <h5>₹20 discount for your first order</h5>
                                    <div className="input-box">
                                        <input type="email" className="form-control" id="exampleFormControlInput1"
                                            placeholder="Enter Your Email" />
                                        <i className="fa-solid fa-envelope arrow"></i>
                                        <button className="sub-btn  btn-animation">
                                            <span className="d-sm-block d-none">Subscribe</span>
                                            <i className="fa-solid fa-arrow-right icon"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Newsletter Section End --> */}

<Footer />
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
                                    alt="" />
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
    </>
  )
}

export default Home