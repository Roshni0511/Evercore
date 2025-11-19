
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
 
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
                                <img src="../assets/images/grocery/banner/1.jpg"
                                    className="img-fluid bg-img blur-up lazyload" alt="" />
                                <div className="home-detail home-big-space p-center-left home-overlay ">
                                    <div className="container-fluid-lg">
                                        <div>
                                            <h6 className="ls-expanded theme-color text-uppercase">Weekend Special offer
                                            </h6>
                                            <h1 className="heding-2">Premium Quality Dry Fruits</h1>
                                            <h2 className="content-2">Dryfruits shopping made Easy</h2>
                                            <h5 className="text-content">Fresh & Top Quality Dry Fruits are available here!
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
    <section className="service-section section-b-space">
        <div className="container-fluid-lg">
            <div className="row g-3 row-cols-xxl-5 row-cols-lg-3 row-cols-md-2">
                <div>
                    <div className="service-contain-2">
                        <svg className="icon-width">
                            <use href="../assets/svg/svg/service-icon-4.svg#shipping"></use>
                        </svg>
                        <div className="service-detail">
                            <h3>Free Shipping</h3>
                            <h6 className="text-content">Free Shipping world wide</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="service-contain-2">
                        <svg className="icon-width">
                            <use href="../assets/svg/svg/service-icon-4.svg#service"></use>
                        </svg>
                        <div className="service-detail">
                            <h3>24 x 7 Service</h3>
                            <h6 className="text-content">Online Service For 24 x 7</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="service-contain-2">
                        <svg className="icon-width">
                            <use href="../assets/svg/svg/service-icon-4.svg#pay"></use>
                        </svg>
                        <div className="service-detail">
                            <h3>Online Pay</h3>
                            <h6 className="text-content">Online Payment Avaible</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="service-contain-2">
                        <svg className="icon-width">
                            <use href="../assets/svg/svg/service-icon-4.svg#offer"></use>
                        </svg>
                        <div className="service-detail">
                            <h3>Festival Offer</h3>
                            <h6 className="text-content">Super Sale Upto 50% off</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="service-contain-2">
                        <svg className="icon-width">
                            <use href="../assets/svg/svg/service-icon-4.svg#return"></use>
                        </svg>
                        <div className="service-detail">
                            <h3>100% Original</h3>
                            <h6 className="text-content">100% Money Back</h6>
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
                        <div className="row row-cols-xxl-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-sm-4 g-3 no-arrow">
                            <div>
                                <div className="product-box product-white-bg wow fadeIn">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="../assets/images/furniture/1.png"
                                                className="img-fluid blur-up lazyload" alt="" />
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
                                            <h6 className="name">Home Decor Lucky Deer Family Matte Finish Ceramic Figures
                                            </h6>
                                        </a>

                                        <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 className="price theme-color">$ 80.00</h6>

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
                                            <img src="../assets/images/furniture/2.png"
                                                className="img-fluid blur-up lazyload" alt="" />
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
                                            <h6 className="name">luxury comfort full size 17*27 jumbo border pillow</h6>
                                        </a>

                                        <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 className="price theme-color">$ 80.00</h6>

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
                                            <img src="../assets/images/furniture/3.png"
                                                className="img-fluid blur-up lazyload" alt="" />
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
                                            <h6 className="name">Coral Bean Bag Chair</h6>
                                        </a>

                                        <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 className="price theme-color">$ 80.00</h6>

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
                                            <img src="../assets/images/furniture/4.png"
                                                className="img-fluid blur-up lazyload" alt="" />
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
                                            <h6 className="name">ELSTONE HOME White Colour Bath Towel</h6>
                                        </a>

                                        <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 className="price theme-color">$ 80.00</h6>

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
                                            <img src="../assets/images/furniture/5.png"
                                                className="img-fluid blur-up lazyload" alt="" />
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
                                            <h6 className="name">Benefits of using natural stone tile flooring</h6>
                                        </a>

                                        <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 className="price theme-color">$ 80.00</h6>

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
                                            <img src="../assets/images/furniture/6.png"
                                                className="img-fluid blur-up lazyload" alt="" />
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
                                            <h6 className="name">Nature Baby Merino Knit Bassinet Blanket</h6>
                                        </a>

                                        <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 className="price theme-color">$ 80.00</h6>

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
                                            <img src="../assets/images/furniture/7.png"
                                                className="img-fluid blur-up lazyload" alt="" />
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
                                            <h6 className="name">Wooden Tea Cup Coaster Coffee Drinks</h6>
                                        </a>

                                        <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 className="price theme-color">$ 80.00</h6>

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
                                            <img src="../assets/images/furniture/8.png"
                                                className="img-fluid blur-up lazyload" alt="" />
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
                                            <h6 className="name">Goddess Marble Hexagon Party Plates</h6>
                                        </a>

                                        <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 className="price theme-color">$ 80.00</h6>

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
                                            <img src="../assets/images/furniture/9.png"
                                                className="img-fluid blur-up lazyload" alt="" />
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
                                            <h6 className="name">Handmade Brown Mango Wooden Tray Square</h6>
                                        </a>

                                        <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 className="price theme-color">$ 80.00</h6>

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
                                            <img src="../assets/images/furniture/10.png"
                                                className="img-fluid blur-up lazyload" alt="" />
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
                                            <h6 className="name">heavy duty cane round basket</h6>
                                        </a>

                                        <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 className="price theme-color">$ 80.00</h6>

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
                        <h2>Bowse by Categories</h2>
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
                                    <img src="../assets/images/furniture/icon/decorations.svg" className="blur-up lazyload"
                                        alt="" />
                                    <h5>Decorations</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="../assets/images/furniture/icon/pillows.svg" className="blur-up lazyload"
                                        alt="" />
                                    <h5>Bed linen</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="../assets/images/furniture/icon/cushions.svg" className="blur-up lazyload"
                                        alt="" />
                                    <h5>Cushions</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="../assets/images/furniture/icon/blankets.svg" className="blur-up lazyload"
                                        alt="" />
                                    <h5>Blankets</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="../assets/images/furniture/icon/gift.svg" className="blur-up lazyload" alt="" />
                                    <h5>Giftwraps</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="../assets/images/furniture/icon/sleepware.svg" className="blur-up lazyload"
                                        alt="" />
                                    <h5>Sleepwear</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="../assets/images/furniture/icon/bakeware.svg" className="blur-up lazyload"
                                        alt="" />
                                    <h5>Cookware & Bakeware</h5>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="section-t-space section-b-space">
                        <div className="row g-md-4 g-3">
                            <div className="col-md-6">
                                <div className="banner-contain hover-effect" style={{backgroundImage:'url(../assets/images/furniture/banner/4.jpg)'}}>
                                    {/* <img src="../assets/images/furniture/banner/4.jpg" className="bg-img blur-up lazyload"
                                        alt="" /> */}
                                    <div className="banner-details p-center-left p-4">
                                        <div>
                                            <h3 className="text-kaushan text-yellow">50% offer</h3>
                                            <h4 className="theme-color mb-2 fw-normal"><span
                                                    className="theme-color fw-bold">Restyling</span> your Home</h4>
                                            <button onclick="location.href = '/Shop';"
                                                className="btn btn-furniture btn-sm mend-auto">Shop Now <i
                                                    className="fa-solid fa-arrow-right icon"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="banner-contain hover-effect" style={{backgroundImage:'url(../assets/images/furniture/banner/5.jpg)'}}>
                                    {/* <img src="../assets/images/furniture/banner/5.jpg" className="bg-img blur-up lazyload"
                                        alt="" /> */}
                                    <div className="banner-details p-center-left p-4">
                                        <div>
                                            <h3 className="text-kaushan text-yellow">50% offer</h3>
                                            <h4 className="theme-color mb-2 fw-normal"><span className="theme-color fw-bold">New
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
                        <h2>Food Cupboard</h2>
                        <span className="title-leaf">
                            <svg className="icon-width">
                                <use href="../assets/svg/leaf.svg#leaf"></use>
                            </svg>
                        </span>
                        <p>A virtual assistant collects the products from your list</p>
                    </div>

                    <div className="row row-cols-xxl-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-sm-4 g-3 no-arrow">
                        <div>
                            <div className="product-box product-white-bg wow fadeIn">
                                <div className="product-image">
                                    <a href="/Productdetails">
                                        <img src="../assets/images/furniture/13.png" className="img-fluid blur-up lazyload"
                                            alt="" />
                                    </a>
                                    <ul className="product-option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
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
                                        <h6 className="name">Elama Fine Round Gloss Dinnerware Dish Set</h6>
                                    </a>

                                    <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                    <h6 className="price theme-color">$ 80.00</h6>

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
                                        <img src="../assets/images/furniture/8.png" className="img-fluid blur-up lazyload"
                                            alt="" />
                                    </a>
                                    <ul className="product-option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
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
                                        <h6 className="name">Goddess Marble Hexagon Party Plates</h6>
                                    </a>

                                    <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                    <h6 className="price theme-color">$ 80.00</h6>

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
                                        <img src="../assets/images/furniture/10.png" className="img-fluid blur-up lazyload"
                                            alt="" />
                                    </a>
                                    <ul className="product-option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
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
                                        <h6 className="name">heavy duty cane round basket</h6>
                                    </a>

                                    <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                    <h6 className="price theme-color">$ 80.00</h6>

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
                                        <img src="../assets/images/furniture/6.png" className="img-fluid blur-up lazyload"
                                            alt="" />
                                    </a>
                                    <ul className="product-option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
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
                                        <h6 className="name">Nature Baby Merino Knit Bassinet Blanket</h6>
                                    </a>

                                    <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                    <h6 className="price theme-color">$ 80.00</h6>

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
                                        <img src="../assets/images/furniture/4.png" className="img-fluid blur-up lazyload"
                                            alt="" />
                                    </a>
                                    <ul className="product-option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
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
                                        <h6 className="name">ELSTONE HOME White Colour Bath Towel</h6>
                                    </a>

                                    <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                    <h6 className="price theme-color">$ 80.00</h6>

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
            <div className="row">
                <div className="col-12">
                    <div className="banner-contain-3 section-b-space section-t-space hover-effect overflow-visible" style={{backgroundImage:'url(https://themes.pixelstrap.com/fastkart/assets/images/furniture/banner/6.jpg)'}}>
                        {/* <img src="https://themes.pixelstrap.com/fastkart/assets/images/furniture/banner/6.jpg" className="bg-img" alt="" width={"100%"}/> */}
                        <img src="../assets/images/furniture/banner/1-1.png" className="flower-pot img-fluid" alt="" />
                        <div
                            className="banner-detail p-center-left position-relative d-block py-0 banner-furniture mend-auto">
                            <div className="row">
                                <div className="col-xl-6 offset-xxl-2 offset-xl-1 col-md-8 col-sm-9">
                                    <h4 className="text-uppercase text-yellow text-kaushan furniture-title">Best of
                                        Collections <img src="../assets/images/furniture/arrow.svg" alt="" /></h4>
                                    <h2 className="mt-sm-3 mt-1 mb-2 text-content">Home Decor <span
                                            className="theme-color fw-bold">LookBook</span> 2022</h2>
                                    <p className="text-content">In publishing and graphic design, Lorem ipsum is a
                                        placeholder text commonly used to demonstrate.</p>
                                    <button className="btn theme-bg-color mt-sm-4 mt-2 btn-md text-white fw-bold"
                                        onclick="location.href = '/Shop';">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Banner Section End --> */}
       {/* <!-- Best Seller Section Start --> */}
    <section>
        <div className="container-fluid-lg">
            <div className="title d-block">
                <div>
                    <h2>Our best Seller</h2>
                    <span className="title-leaf">
                        <svg className="icon-width">
                            <use href="../assets/svg/leaf.svg#leaf"></use>
                        </svg>
                    </span>
                    <p>A virtual assistant collects the products from your list</p>
                </div>
            </div>
            <div className="banner-slider product-wrapper wow fadeInUp">
                <div>
                    <ul className="product-list">
                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/1.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">Home Decor Lucky Deer Family Matte Finish</h6>
                                        </a>
                                        <span>500 G</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/2.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">Potato</h6>
                                        </a>
                                        <span>500 G</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/3.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">Coral Bean Bag Chair</h6>
                                        </a>
                                        <span>200 G</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/4.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">ELSTONE HOME White Colour Bath Towel</h6>
                                        </a>
                                        <span>150 G</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="product-list">
                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/5.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">Benefits of using natural stone tile flooring</h6>
                                        </a>
                                        <span>500 G</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/6.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">Nature Baby Merino Knit Bassinet Blanket</h6>
                                        </a>
                                        <span>1 L</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/7.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">Wooden Tea Cup Coaster</h6>
                                        </a>
                                        <span>1 KG</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/8.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">Goddess Marble Hexagon</h6>
                                        </a>
                                        <span>150 G</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="product-list">
                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/9.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">Handmade Brown Mango Wooden Tray Square</h6>
                                        </a>
                                        <span>1 L</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/10.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">heavy duty cane round basket</h6>
                                        </a>
                                        <span>500 G</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/11.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">WaahKart Antique Fiber Flower Vase</h6>
                                        </a>
                                        <span>1 KG</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/12.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">Towels Cotton Soft</h6>
                                        </a>
                                        <span>160 ML</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="product-list">
                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/13.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">Gloss Dinnerware Dish</h6>
                                        </a>
                                        <span>500 G</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/14.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">Marble Small Amenity Tray</h6>
                                        </a>
                                        <span>1 L</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/5.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">Benefits of using natural stone tile flooring</h6>
                                        </a>
                                        <span>1 KG</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="offer-product">
                                <a href="/Productdetails" className="offer-image">
                                    <img src="../assets/images/furniture/9.png" className="blur-up lazyload" alt="" />
                                </a>

                                <div className="offer-detail">
                                    <div>
                                        <a href="/Productdetails" className="text-title">
                                            <h6 className="name">Handmade Brown Mango Wooden Tray Square</h6>
                                        </a>
                                        <span>150 G</span>
                                        <h6 className="price theme-color">$ 10.00</h6>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Best Seller Section End --> */}

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
                                    <h5>$20 discount for your first order</h5>
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
                                <img src="../assets/images/product/category/1.jpg" className="img-fluid blur-up lazyload"
                                    alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="right-sidebar-modal">
                                <h4 className="title-name">Peanut Butter Bite Premium Butter Cookies 600 g</h4>
                                <h4 className="price">$36.99</h4>
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
                                    <h4>Cake Size :</h4>
                                    <select className="form-select select-form-size">
                                        <option selected>Select Size</option>
                                        <option value="1.2">1/2 KG</option>
                                        <option value="0">1 KG</option>
                                        <option value="1.5">1/5 KG</option>
                                        <option value="red">Red Roses</option>
                                        <option value="pink">With Pink Roses</option>
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