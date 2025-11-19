
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
 
  return (
    <>
      <Navbar />

        {/* <!-- Home Section Start --> */}
    <section class="home-section-2 home-section-bg pt-0 overflow-hidden">
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-12">
                    <div class="slider-animate">
                        <div>
                            <div class="home-contain rounded-0 p-0">
                                <img src="../assets/images/grocery/banner/1.jpg"
                                    class="img-fluid bg-img blur-up lazyload" alt="" />
                                <div class="home-detail home-big-space p-center-left home-overlay ">
                                    <div class="container-fluid-lg">
                                        <div>
                                            <h6 class="ls-expanded theme-color text-uppercase">Weekend Special offer
                                            </h6>
                                            <h1 class="heding-2">Premium Quality Dry Fruits</h1>
                                            <h2 class="content-2">Dryfruits shopping made Easy</h2>
                                            <h5 class="text-content">Fresh & Top Quality Dry Fruits are available here!
                                            </h5>
                                            <button
                                                class="btn theme-bg-color btn-md text-white fw-bold mt-md-4 mt-2 mend-auto"
                                                onclick="location.href = 'shop-left-sidebar.html';">Shop Now <i
                                                    class="fa-solid fa-arrow-right icon"></i></button>
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
    <section class="service-section section-b-space">
        <div class="container-fluid-lg">
            <div class="row g-3 row-cols-xxl-5 row-cols-lg-3 row-cols-md-2">
                <div>
                    <div class="service-contain-2">
                        <svg class="icon-width">
                            <use href="../assets/svg/svg/service-icon-4.svg#shipping"></use>
                        </svg>
                        <div class="service-detail">
                            <h3>Free Shipping</h3>
                            <h6 class="text-content">Free Shipping world wide</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="service-contain-2">
                        <svg class="icon-width">
                            <use href="../assets/svg/svg/service-icon-4.svg#service"></use>
                        </svg>
                        <div class="service-detail">
                            <h3>24 x 7 Service</h3>
                            <h6 class="text-content">Online Service For 24 x 7</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="service-contain-2">
                        <svg class="icon-width">
                            <use href="../assets/svg/svg/service-icon-4.svg#pay"></use>
                        </svg>
                        <div class="service-detail">
                            <h3>Online Pay</h3>
                            <h6 class="text-content">Online Payment Avaible</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="service-contain-2">
                        <svg class="icon-width">
                            <use href="../assets/svg/svg/service-icon-4.svg#offer"></use>
                        </svg>
                        <div class="service-detail">
                            <h3>Festival Offer</h3>
                            <h6 class="text-content">Super Sale Upto 50% off</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="service-contain-2">
                        <svg class="icon-width">
                            <use href="../assets/svg/svg/service-icon-4.svg#return"></use>
                        </svg>
                        <div class="service-detail">
                            <h3>100% Original</h3>
                            <h6 class="text-content">100% Money Back</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Service Section End --> */}

     {/* <!-- Product Section Start --> */}
    <section class="product-section">
        <div class="container-fluid-lg">
            <div class="row g-sm-4 g-3">
                <div class="col-xxl-12">
                    <div class="title title-flex">
                        <div>
                            <h2>Top Save Today</h2>
                            <span class="title-leaf">
                                <svg class="icon-width">
                                    <use href="../assets/svg/leaf.svg#leaf"></use>
                                </svg>
                            </span>
                            <p>Don't miss this opportunity at a special discount just for this week.</p>
                        </div>
                      
                    </div>

                    <div class="section-b-space">
                        <div class="row row-cols-xxl-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-sm-4 g-3 no-arrow">
                            <div>
                                <div class="product-box product-white-bg wow fadeIn">
                                    <div class="product-image">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/furniture/1.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>
                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                           

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="wishlist.html" class="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="product-detail position-relative">
                                        <a href="product-left-thumbnail.html">
                                            <h6 class="name">Home Decor Lucky Deer Family Matte Finish Ceramic Figures
                                            </h6>
                                        </a>

                                        <h6 class="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 class="price theme-color">$ 80.00</h6>

                                        <div class="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                                            <button class="btn addcart-button btn buy-button"><i
                                                    class="fa-solid fa-plus"></i></button>
                                            <div class="cart_qty qty-box-2">
                                                <div class="input-group">
                                                    <button type="button" class="qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1" />
                                                    <button type="button" class="qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="product-box product-white-bg wow fadeIn" data-wow-delay="0.1s">
                                    <div class="product-image">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/furniture/2.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>
                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>


                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="wishlist.html" class="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="product-detail position-relative">
                                        <a href="product-left-thumbnail.html">
                                            <h6 class="name">luxury comfort full size 17*27 jumbo border pillow</h6>
                                        </a>

                                        <h6 class="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 class="price theme-color">$ 80.00</h6>

                                        <div class="add-to-cart-btn-2 addtocart_btn">
                                            <button class="btn addcart-button btn buy-button"><i
                                                    class="fa-solid fa-plus"></i></button>
                                            <div class="cart_qty qty-box-2">
                                                <div class="input-group">
                                                    <button type="button" class="qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1" />
                                                    <button type="button" class="qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="product-box product-white-bg wow fadeIn">
                                    <div class="product-image">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/furniture/3.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>
                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>


                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="wishlist.html" class="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="product-detail position-relative">
                                        <a href="product-left-thumbnail.html">
                                            <h6 class="name">Coral Bean Bag Chair</h6>
                                        </a>

                                        <h6 class="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 class="price theme-color">$ 80.00</h6>

                                        <div class="add-to-cart-btn-2 addtocart_btn">
                                            <button class="btn addcart-button btn buy-button"><i
                                                    class="fa-solid fa-plus"></i></button>
                                            <div class="cart_qty qty-box-2">
                                                <div class="input-group">
                                                    <button type="button" class="qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1" />
                                                    <button type="button" class="qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="product-box product-white-bg wow fadeIn" data-wow-delay="0.1s">
                                    <div class="product-image">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/furniture/4.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>
                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                          

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="wishlist.html" class="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="product-detail position-relative">
                                        <a href="product-left-thumbnail.html">
                                            <h6 class="name">ELSTONE HOME White Colour Bath Towel</h6>
                                        </a>

                                        <h6 class="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 class="price theme-color">$ 80.00</h6>

                                        <div class="add-to-cart-btn-2 addtocart_btn">
                                            <button class="btn addcart-button btn buy-button"><i
                                                    class="fa-solid fa-plus"></i></button>
                                            <div class="cart_qty qty-box-2">
                                                <div class="input-group">
                                                    <button type="button" class="qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1" />
                                                    <button type="button" class="qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="product-box product-white-bg wow fadeIn">
                                    <div class="product-image">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/furniture/5.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>
                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                           

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="wishlist.html" class="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="product-detail position-relative">
                                        <a href="product-left-thumbnail.html">
                                            <h6 class="name">Benefits of using natural stone tile flooring</h6>
                                        </a>

                                        <h6 class="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 class="price theme-color">$ 80.00</h6>

                                        <div class="add-to-cart-btn-2 addtocart_btn">
                                            <button class="btn addcart-button btn buy-button"><i
                                                    class="fa-solid fa-plus"></i></button>
                                            <div class="cart_qty qty-box-2">
                                                <div class="input-group">
                                                    <button type="button" class="qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1" />
                                                    <button type="button" class="qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="product-box product-white-bg wow fadeIn" data-wow-delay="0.1s">
                                    <div class="product-image">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/furniture/6.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>
                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>


                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="wishlist.html" class="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="product-detail position-relative">
                                        <a href="product-left-thumbnail.html">
                                            <h6 class="name">Nature Baby Merino Knit Bassinet Blanket</h6>
                                        </a>

                                        <h6 class="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 class="price theme-color">$ 80.00</h6>

                                        <div class="add-to-cart-btn-2 addtocart_btn">
                                            <button class="btn addcart-button btn buy-button"><i
                                                    class="fa-solid fa-plus"></i></button>
                                            <div class="cart_qty qty-box-2">
                                                <div class="input-group">
                                                    <button type="button" class="qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1" />
                                                    <button type="button" class="qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="product-box product-white-bg wow fadeIn">
                                    <div class="product-image">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/furniture/7.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>
                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                        

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="wishlist.html" class="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="product-detail position-relative">
                                        <a href="product-left-thumbnail.html">
                                            <h6 class="name">Wooden Tea Cup Coaster Coffee Drinks</h6>
                                        </a>

                                        <h6 class="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 class="price theme-color">$ 80.00</h6>

                                        <div class="add-to-cart-btn-2 addtocart_btn">
                                            <button class="btn addcart-button btn buy-button"><i
                                                    class="fa-solid fa-plus"></i></button>
                                            <div class="cart_qty qty-box-2">
                                                <div class="input-group">
                                                    <button type="button" class="qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1" />
                                                    <button type="button" class="qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>

                                <div class="product-box product-white-bg wow fadeIn" data-wow-delay="0.1s">
                                    <div class="product-image">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/furniture/8.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>
                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                          

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="wishlist.html" class="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="product-detail position-relative">
                                        <a href="product-left-thumbnail.html">
                                            <h6 class="name">Goddess Marble Hexagon Party Plates</h6>
                                        </a>

                                        <h6 class="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 class="price theme-color">$ 80.00</h6>

                                        <div class="add-to-cart-btn-2 addtocart_btn">
                                            <button class="btn addcart-button btn buy-button"><i
                                                    class="fa-solid fa-plus"></i></button>
                                            <div class="cart_qty qty-box-2">
                                                <div class="input-group">
                                                    <button type="button" class="qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1" />
                                                    <button type="button" class="qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="product-box product-white-bg wow fadeIn">
                                    <div class="product-image">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/furniture/9.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>
                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                      

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="wishlist.html" class="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="product-detail position-relative">
                                        <a href="product-left-thumbnail.html">
                                            <h6 class="name">Handmade Brown Mango Wooden Tray Square</h6>
                                        </a>

                                        <h6 class="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 class="price theme-color">$ 80.00</h6>

                                        <div class="add-to-cart-btn-2 addtocart_btn">
                                            <button class="btn addcart-button btn buy-button"><i
                                                    class="fa-solid fa-plus"></i></button>
                                            <div class="cart_qty qty-box-2">
                                                <div class="input-group">
                                                    <button type="button" class="qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1" />
                                                    <button type="button" class="qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>

                                <div class="product-box product-white-bg wow fadeIn" data-wow-delay="0.1s">
                                    <div class="product-image">
                                        <a href="product-left-thumbnail.html">
                                            <img src="../assets/images/furniture/10.png"
                                                class="img-fluid blur-up lazyload" alt="" />
                                        </a>
                                        <ul class="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>


                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="wishlist.html" class="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="product-detail position-relative">
                                        <a href="product-left-thumbnail.html">
                                            <h6 class="name">heavy duty cane round basket</h6>
                                        </a>

                                        <h6 class="sold weight text-content fw-normal">1 KG</h6>

                                        <h6 class="price theme-color">$ 80.00</h6>

                                        <div class="add-to-cart-btn-2 addtocart_btn">
                                            <button class="btn addcart-button btn buy-button"><i
                                                    class="fa-solid fa-plus"></i></button>
                                            <div class="cart_qty qty-box-2">
                                                <div class="input-group">
                                                    <button type="button" class="qty-left-minus" data-type="minus"
                                                        data-field="">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input class="form-control input-number qty-input" type="text"
                                                        name="quantity" value="1" />
                                                    <button type="button" class="qty-right-plus" data-type="plus"
                                                        data-field="">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="title">
                        <h2>Bowse by Categories</h2>
                        <span class="title-leaf">
                            <svg class="icon-width">
                                <use href="../assets/svg/leaf.svg#leaf"></use>
                            </svg>
                        </span>
                        <p>Top Categories Of The Week</p>
                    </div>

                    <div class="category-slider-2 product-wrapper no-arrow">
                        <div>
                            <a href="shop-left-sidebar.html" class="category-box category-dark">
                                <div>
                                    <img src="../assets/images/furniture/icon/decorations.svg" class="blur-up lazyload"
                                        alt="" />
                                    <h5>Decorations</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="shop-left-sidebar.html" class="category-box category-dark">
                                <div>
                                    <img src="../assets/images/furniture/icon/pillows.svg" class="blur-up lazyload"
                                        alt="" />
                                    <h5>Bed linen</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="shop-left-sidebar.html" class="category-box category-dark">
                                <div>
                                    <img src="../assets/images/furniture/icon/cushions.svg" class="blur-up lazyload"
                                        alt="" />
                                    <h5>Cushions</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="shop-left-sidebar.html" class="category-box category-dark">
                                <div>
                                    <img src="../assets/images/furniture/icon/blankets.svg" class="blur-up lazyload"
                                        alt="" />
                                    <h5>Blankets</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="shop-left-sidebar.html" class="category-box category-dark">
                                <div>
                                    <img src="../assets/images/furniture/icon/gift.svg" class="blur-up lazyload" alt="" />
                                    <h5>Giftwraps</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="shop-left-sidebar.html" class="category-box category-dark">
                                <div>
                                    <img src="../assets/images/furniture/icon/sleepware.svg" class="blur-up lazyload"
                                        alt="" />
                                    <h5>Sleepwear</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="shop-left-sidebar.html" class="category-box category-dark">
                                <div>
                                    <img src="../assets/images/furniture/icon/bakeware.svg" class="blur-up lazyload"
                                        alt="" />
                                    <h5>Cookware & Bakeware</h5>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="section-t-space section-b-space">
                        <div class="row g-md-4 g-3">
                            <div class="col-md-6">
                                <div class="banner-contain hover-effect">
                                    <img src="../assets/images/furniture/banner/4.jpg" class="bg-img blur-up lazyload"
                                        alt="" />
                                    <div class="banner-details p-center-left p-4">
                                        <div>
                                            <h3 class="text-kaushan text-yellow">50% offer</h3>
                                            <h4 class="theme-color mb-2 fw-normal"><span
                                                    class="theme-color fw-bold">Restyling</span> your Home</h4>
                                            <button onclick="location.href = 'shop-left-sidebar.html';"
                                                class="btn btn-furniture btn-sm mend-auto">Shop Now <i
                                                    class="fa-solid fa-arrow-right icon"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="banner-contain hover-effect">
                                    <img src="../assets/images/furniture/banner/5.jpg" class="bg-img blur-up lazyload"
                                        alt="" />
                                    <div class="banner-details p-center-left p-4">
                                        <div>
                                            <h3 class="text-kaushan text-yellow">50% offer</h3>
                                            <h4 class="theme-color mb-2 fw-normal"><span class="theme-color fw-bold">New
                                                    Elite</span> Collections</h4>
                                            <button onclick="location.href = 'shop-left-sidebar.html';"
                                                class="btn btn-furniture btn-sm mend-auto">Shop Now <i
                                                    class="fa-solid fa-arrow-right icon"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="title d-block">
                        <h2>Food Cupboard</h2>
                        <span class="title-leaf">
                            <svg class="icon-width">
                                <use href="../assets/svg/leaf.svg#leaf"></use>
                            </svg>
                        </span>
                        <p>A virtual assistant collects the products from your list</p>
                    </div>

                    <div class="row row-cols-xxl-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-sm-4 g-3 no-arrow">
                        <div>
                            <div class="product-box product-white-bg wow fadeIn">
                                <div class="product-image">
                                    <a href="product-left-thumbnail.html">
                                        <img src="../assets/images/furniture/13.png" class="img-fluid blur-up lazyload"
                                            alt="" />
                                    </a>
                                    <ul class="product-option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                <i data-feather="eye"></i>
                                            </a>
                                        </li>


                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                            <a href="wishlist.html" class="notifi-wishlist">
                                                <i data-feather="heart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="product-detail position-relative">
                                    <a href="product-left-thumbnail.html">
                                        <h6 class="name">Elama Fine Round Gloss Dinnerware Dish Set</h6>
                                    </a>

                                    <h6 class="sold weight text-content fw-normal">1 KG</h6>

                                    <h6 class="price theme-color">$ 80.00</h6>

                                    <div class="add-to-cart-btn-2 addtocart_btn">
                                        <button class="btn addcart-button btn buy-button"><i
                                                class="fa-solid fa-plus"></i></button>
                                        <div class="cart_qty qty-box-2">
                                            <div class="input-group">
                                                <button type="button" class="qty-left-minus" data-type="minus"
                                                    data-field="">
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="1" />
                                                <button type="button" class="qty-right-plus" data-type="plus"
                                                    data-field="">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="product-box product-white-bg wow fadeIn" data-wow-delay="0.1s">
                                <div class="product-image">
                                    <a href="product-left-thumbnail.html">
                                        <img src="../assets/images/furniture/8.png" class="img-fluid blur-up lazyload"
                                            alt="" />
                                    </a>
                                    <ul class="product-option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                <i data-feather="eye"></i>
                                            </a>
                                        </li>


                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                            <a href="wishlist.html" class="notifi-wishlist">
                                                <i data-feather="heart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="product-detail position-relative">
                                    <a href="product-left-thumbnail.html">
                                        <h6 class="name">Goddess Marble Hexagon Party Plates</h6>
                                    </a>

                                    <h6 class="sold weight text-content fw-normal">1 KG</h6>

                                    <h6 class="price theme-color">$ 80.00</h6>

                                    <div class="add-to-cart-btn-2 addtocart_btn">
                                        <button class="btn addcart-button btn buy-button"><i
                                                class="fa-solid fa-plus"></i></button>
                                        <div class="cart_qty qty-box-2">
                                            <div class="input-group">
                                                <button type="button" class="qty-left-minus" data-type="minus"
                                                    data-field="">
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="1" />
                                                <button type="button" class="qty-right-plus" data-type="plus"
                                                    data-field="">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="product-box product-white-bg wow fadeIn">
                                <div class="product-image">
                                    <a href="product-left-thumbnail.html">
                                        <img src="../assets/images/furniture/10.png" class="img-fluid blur-up lazyload"
                                            alt="" />
                                    </a>
                                    <ul class="product-option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                <i data-feather="eye"></i>
                                            </a>
                                        </li>

                                     

                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                            <a href="wishlist.html" class="notifi-wishlist">
                                                <i data-feather="heart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="product-detail position-relative">
                                    <a href="product-left-thumbnail.html">
                                        <h6 class="name">heavy duty cane round basket</h6>
                                    </a>

                                    <h6 class="sold weight text-content fw-normal">1 KG</h6>

                                    <h6 class="price theme-color">$ 80.00</h6>

                                    <div class="add-to-cart-btn-2 addtocart_btn">
                                        <button class="btn addcart-button btn buy-button"><i
                                                class="fa-solid fa-plus"></i></button>
                                        <div class="cart_qty qty-box-2">
                                            <div class="input-group">
                                                <button type="button" class="qty-left-minus" data-type="minus"
                                                    data-field="">
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="1" />
                                                <button type="button" class="qty-right-plus" data-type="plus"
                                                    data-field="">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="product-box product-white-bg wow fadeIn" data-wow-delay="0.1s">
                                <div class="product-image">
                                    <a href="product-left-thumbnail.html">
                                        <img src="../assets/images/furniture/6.png" class="img-fluid blur-up lazyload"
                                            alt="" />
                                    </a>
                                    <ul class="product-option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                <i data-feather="eye"></i>
                                            </a>
                                        </li>


                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                            <a href="wishlist.html" class="notifi-wishlist">
                                                <i data-feather="heart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="product-detail position-relative">
                                    <a href="product-left-thumbnail.html">
                                        <h6 class="name">Nature Baby Merino Knit Bassinet Blanket</h6>
                                    </a>

                                    <h6 class="sold weight text-content fw-normal">1 KG</h6>

                                    <h6 class="price theme-color">$ 80.00</h6>

                                    <div class="add-to-cart-btn-2 addtocart_btn">
                                        <button class="btn addcart-button btn buy-button"><i
                                                class="fa-solid fa-plus"></i></button>
                                        <div class="cart_qty qty-box-2">
                                            <div class="input-group">
                                                <button type="button" class="qty-left-minus" data-type="minus"
                                                    data-field="">
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="1" />
                                                <button type="button" class="qty-right-plus" data-type="plus"
                                                    data-field="">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="product-box product-white-bg wow fadeIn">
                                <div class="product-image">
                                    <a href="product-left-thumbnail.html">
                                        <img src="../assets/images/furniture/4.png" class="img-fluid blur-up lazyload"
                                            alt="" />
                                    </a>
                                    <ul class="product-option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                                                <i data-feather="eye"></i>
                                            </a>
                                        </li>

                                    

                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                            <a href="wishlist.html" class="notifi-wishlist">
                                                <i data-feather="heart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="product-detail position-relative">
                                    <a href="product-left-thumbnail.html">
                                        <h6 class="name">ELSTONE HOME White Colour Bath Towel</h6>
                                    </a>

                                    <h6 class="sold weight text-content fw-normal">1 KG</h6>

                                    <h6 class="price theme-color">$ 80.00</h6>

                                    <div class="add-to-cart-btn-2 addtocart_btn">
                                        <button class="btn addcart-button btn buy-button"><i
                                                class="fa-solid fa-plus"></i></button>
                                        <div class="cart_qty qty-box-2">
                                            <div class="input-group">
                                                <button type="button" class="qty-left-minus" data-type="minus"
                                                    data-field="">
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                                <input class="form-control input-number qty-input" type="text"
                                                    name="quantity" value="1" />
                                                <button type="button" class="qty-right-plus" data-type="plus"
                                                    data-field="">
                                                    <i class="fa fa-plus"></i>
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




<Footer />
        {/* <!-- Quick View Modal Box Start --> */}
    <div class="modal fade theme-modal view-modal" id="view" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
            <div class="modal-content">
                <div class="modal-header p-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row g-sm-4 g-2">
                        <div class="col-lg-6">
                            <div class="slider-image">
                                <img src="../assets/images/product/category/1.jpg" class="img-fluid blur-up lazyload"
                                    alt="" />
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="right-sidebar-modal">
                                <h4 class="title-name">Peanut Butter Bite Premium Butter Cookies 600 g</h4>
                                <h4 class="price">$36.99</h4>
                                <div class="product-rating">
                                    <ul class="rating">
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" class="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <span class="ms-2">8 Reviews</span>
                                    <span class="ms-2 text-danger">6 sold in last 16 hours</span>
                                </div>

                                <div class="product-detail">
                                    <h4>Product Details :</h4>
                                    <p>Candy canes sugar plum tart cotton candy chupa chups sugar plum chocolate I love.
                                        Caramels marshmallow icing dessert candy canes I love soufflé I love toffee.
                                        Marshmallow pie sweet sweet roll sesame snaps tiramisu jelly bear claw. Bonbon
                                        muffin I love carrot cake sugar plum dessert bonbon.</p>
                                </div>

                                <ul class="brand-list">
                                    <li>
                                        <div class="brand-box">
                                            <h5>Brand Name:</h5>
                                            <h6>Black Forest</h6>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="brand-box">
                                            <h5>Product Code:</h5>
                                            <h6>W0690034</h6>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="brand-box">
                                            <h5>Product Type:</h5>
                                            <h6>White Cream Cake</h6>
                                        </div>
                                    </li>
                                </ul>

                                <div class="select-size">
                                    <h4>Cake Size :</h4>
                                    <select class="form-select select-form-size">
                                        <option selected>Select Size</option>
                                        <option value="1.2">1/2 KG</option>
                                        <option value="0">1 KG</option>
                                        <option value="1.5">1/5 KG</option>
                                        <option value="red">Red Roses</option>
                                        <option value="pink">With Pink Roses</option>
                                    </select>
                                </div>

                                <div class="modal-button">
                                    <button onclick="location.href = 'cart.html';"
                                        class="btn btn-md add-cart-button icon">Add
                                        To Cart</button>
                                    <button onclick="location.href = 'product-left-thumbnail.html';"
                                        class="btn theme-bg-color view-button icon text-white fw-bold btn-md">
                                        View More Details</button>
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