import React, { useEffect, useState } from "react";
import $ from "jquery";
import Navbar from './Navbar'
import Footer from './Footer'

const Productdetails = () => {
    const [selectedSize, setSelectedSize] = useState("small");
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

                                <div className="product-package">
                                    <div className="product-title">
                                        <h4>Weight </h4>
                                    </div>

                     <ul className="rectangle select-package">
      <li className="form-check">
        <input
          className="form-check-input"
          checked={selectedSize === "small"}
          type="radio"
          name="size"
          id="small"
          onChange={() => setSelectedSize("small")}
        />
        <label
          className={`form-check-label ${selectedSize === "small" ? "active" : ""}`}
          htmlFor="small"
        >
          <span>1 KG</span>
        </label>
      </li>
      <li className="form-check">
        <input
          className="form-check-input"
          checked={selectedSize === "medium"}
          type="radio"
          name="size"
          id="medium"
          onChange={() => setSelectedSize("medium")}
        />
        <label
          className={`form-check-label ${selectedSize === "medium" ? "active" : ""}`}
          htmlFor="medium"
        >
          <span>2 KG</span>
        </label>
      </li>
      <li className="form-check">
        <input
          className="form-check-input"
          checked={selectedSize === "large"}
          type="radio"
          name="size"
          id="large"
          onChange={() => setSelectedSize("large")}
        />
        <label
          className={`form-check-label ${selectedSize === "large" ? "active" : ""}`}
          htmlFor="large"
        >
          <span>3 KG</span>
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
                                        className="btn btn-md bg-dark cart-button text-white w-100">Add To Cart</button>
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

                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    {/* <!-- Product Left Sidebar End --> */}


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
                                                                        src="../assets/images/review/1.jpg" />
                                                                </div>
                                                            </div>
                                                            <div className="people-comment">
                                                                <div className="people-name"><a href="javascript:void(0)"
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
                                                                        src="../assets/images/review/2.jpg" />
                                                                </div>
                                                            </div>
                                                            <div className="people-comment">
                                                                <div className="people-name"><a href="javascript:void(0)"
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
                                                                        src="../assets/images/review/3.jpg" />
                                                                </div>
                                                            </div>
                                                            <div className="people-comment">
                                                                <div className="people-name"><a href="javascript:void(0)"
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
                                                                        src="../assets/images/review/4.jpg" />
                                                                </div>
                                                            </div>
                                                            <div className="people-comment">
                                                                <div className="people-name"><a href="javascript:void(0)"
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
                                                                        src="../assets/images/review/5.jpg" />
                                                                </div>
                                                            </div>
                                                            <div className="people-comment">
                                                                <div className="people-name"><a href="javascript:void(0)"
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
                                        <h5 className="price"><span className="theme-color">₹10.25</span> <del>₹12.57</del>
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
                                            <h5 className="name">Evercore Yeast Protein - Vanilla</h5>
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
                                        <h5 className="price"><span className="theme-color">₹08.02</span> <del>₹15.15</del>
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
                                        <h5 className="price"><span className="theme-color">₹04.33</span> <del>₹10.36</del>
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
                                        <h5 className="price"><span className="theme-color">₹12.52</span> <del>₹13.62</del>
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
                                            <h5 className="name">Evercore Yeast Protein - Vanilla</h5>
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
                                        <h5 className="price"><span className="theme-color">₹10.25</span> <del>₹12.36</del>
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

                                        <h5 className="price"><span className="theme-color">₹14.25</span> <del>₹16.57</del>
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
                                        <h5 className="price"><span className="theme-color">₹12.52</span> <del>₹13.62</del>
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
                            <a className="btn theme-bg-color text-white" href="/Checkout"><i
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