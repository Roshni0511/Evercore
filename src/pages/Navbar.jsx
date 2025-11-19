import React from 'react'

export default function Navbar() {
  return (
    <div>
        {/* <!-- Header Start --> */}
    <header class="">
     

        <div class="top-nav top-header sticky-header">
            <div class="container-fluid-lg">
                <div class="row">
                    <div class="col-12">
                        <div class="navbar-top">
                            <button class="navbar-toggler d-xl-none d-inline navbar-menu-button me-2" type="button"
                                data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                                <span class="navbar-toggler-icon">
                                    <i class="fa-solid fa-bars"></i>
                                </span>
                            </button>
                            <a href="/" class="web-logo nav-logo">
                                <img src="../assets/images/logo/6.png" class="img-fluid blur-up lazyload" alt="" />
                            </a>

                            <div class="header-nav-middle">
                                <div class="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                                    <div class="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                                        <div class="offcanvas-header navbar-shadow">
                                            <h5>Menu</h5>
                                            <button class="btn-close lead" type="button"
                                                data-bs-dismiss="offcanvas"></button>
                                        </div>
                                        <div class="offcanvas-body">
                                            <ul class="navbar-nav">
                                               
                                                 <li className="nav-item ">
                                                      <a className="nav-link nav-link1 ps-xl-2 ps-0" href="/">Home</a>
                                                 </li>

                                              

                                                <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)"
                                                        data-bs-toggle="dropdown">Crazy Deals</a>

                                                    <div class="dropdown-menu dropdown-menu-3 dropdown-menu-2">
                                                        <div class="row">
                                                            <div class="col-xl-3">
                                                                <div class="dropdown-column m-0">
                                                                    
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3">
                                                                <div class="dropdown-column m-0">
                                                                  
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3">
                                                                <div class="dropdown-column m-0">
                                                                   
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3 d-xl-block d-none">
                                                                <div class="dropdown-column m-0">
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                 <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)"
                                                        data-bs-toggle="dropdown">Authenticity</a>

                                                    <div class="dropdown-menu dropdown-menu-3 dropdown-menu-2">
                                                        <div class="row">
                                                            <div class="col-xl-3">
                                                                <div class="dropdown-column m-0">
                                                                    <h5 class="dropdown-header">
                                                                        Product Pages </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-left-thumbnail.html">Product
                                                                        Thumbnail</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-4-image.html">Product Images</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-slider.html">Product Slider</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-sticky.html">Product Sticky</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-accordion.html">Product
                                                                        Accordion</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-circle.html">Product Tab</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-digital.html">Product Digital</a>

                                                                    <h5 class="custom-mt dropdown-header">Product
                                                                        Features
                                                                    </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-circle.html">Bundle (Cross
                                                                        Sale)</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-left-thumbnail.html">Hot Stock
                                                                        Progress <label class="menu-label">New</label>
                                                                    </a>
                                                                    <a class="dropdown-item"
                                                                        href="product-sold-out.html">SOLD OUT</a>
                                                                    <a class="dropdown-item" href="product-circle.html">
                                                                        Sale Countdown</a>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3">
                                                                <div class="dropdown-column m-0">
                                                                    <h5 class="dropdown-header">
                                                                        Product Variants Style </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-rectangle.html">Variant
                                                                        Rectangle</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-circle.html">Variant Circle <label
                                                                            class="menu-label">New</label></a>
                                                                    <a class="dropdown-item"
                                                                        href="product-color-image.html">Variant Image
                                                                        Swatch</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-color.html">Variant Color</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-radio.html">Variant Radio
                                                                        Button</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-dropdown.html">Variant
                                                                        Dropdown</a>
                                                                    <h5 class="custom-mt dropdown-header">Product
                                                                        Features
                                                                    </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-left-thumbnail.html">Sticky
                                                                        Checkout</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-dynamic.html">Dynamic Checkout</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-sticky.html">Secure Checkout</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-bundle.html">Active Product
                                                                        view</a>
                                                                    <a class="dropdown-item" href="product-bundle.html">
                                                                        Active
                                                                        Last Orders
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3">
                                                                <div class="dropdown-column m-0">
                                                                    <h5 class="dropdown-header">
                                                                        Product Features </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-image.html">Product Simple</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-rectangle.html">
                                                                        Product Classified <label
                                                                            class="menu-label">New</label>
                                                                    </a>
                                                                    <a class="dropdown-item"
                                                                        href="product-size-chart.html">Size Chart <label
                                                                            class="menu-label">New</label></a>
                                                                    <a class="dropdown-item"
                                                                        href="product-size-chart.html">Delivery &
                                                                        Return</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-size-chart.html">Product
                                                                        Review</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-expert.html">Ask
                                                                        an Expert</a>
                                                                    <h5 class="custom-mt dropdown-header">Product
                                                                        Features
                                                                    </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-bottom-thumbnail.html">Product
                                                                        Tags</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-image.html">Store
                                                                        Information</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-image.html">Social Share <label
                                                                            class="menu-label warning-label">Hot</label>
                                                                    </a>
                                                                    <a class="dropdown-item"
                                                                        href="product-left-thumbnail.html">Related
                                                                        Products
                                                                        <label
                                                                            class="menu-label warning-label">Hot</label>
                                                                    </a>
                                                                    <a class="dropdown-item"
                                                                        href="product-right-thumbnail.html">Wishlist &
                                                                        Compare</a>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3 d-xl-block d-none">
                                                                <div class="dropdown-column m-0">
                                                                    <div class="menu-img-banner">
                                                                        <a class="text-title"
                                                                            href="product-circle.html">
                                                                            <img src="../assets/images/mega-menu.png"
                                                                                alt="banner" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)"
                                                        data-bs-toggle="dropdown">Shop By Goal</a>

                                                    <div class="dropdown-menu dropdown-menu-3 dropdown-menu-2">
                                                        <div class="row">
                                                            <div class="col-xl-3">
                                                                <div class="dropdown-column m-0">
                                                                    <h5 class="dropdown-header">
                                                                        Product Pages </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-left-thumbnail.html">Product
                                                                        Thumbnail</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-4-image.html">Product Images</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-slider.html">Product Slider</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-sticky.html">Product Sticky</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-accordion.html">Product
                                                                        Accordion</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-circle.html">Product Tab</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-digital.html">Product Digital</a>

                                                                    <h5 class="custom-mt dropdown-header">Product
                                                                        Features
                                                                    </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-circle.html">Bundle (Cross
                                                                        Sale)</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-left-thumbnail.html">Hot Stock
                                                                        Progress <label class="menu-label">New</label>
                                                                    </a>
                                                                    <a class="dropdown-item"
                                                                        href="product-sold-out.html">SOLD OUT</a>
                                                                    <a class="dropdown-item" href="product-circle.html">
                                                                        Sale Countdown</a>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3">
                                                                <div class="dropdown-column m-0">
                                                                    <h5 class="dropdown-header">
                                                                        Product Variants Style </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-rectangle.html">Variant
                                                                        Rectangle</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-circle.html">Variant Circle <label
                                                                            class="menu-label">New</label></a>
                                                                    <a class="dropdown-item"
                                                                        href="product-color-image.html">Variant Image
                                                                        Swatch</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-color.html">Variant Color</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-radio.html">Variant Radio
                                                                        Button</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-dropdown.html">Variant
                                                                        Dropdown</a>
                                                                    <h5 class="custom-mt dropdown-header">Product
                                                                        Features
                                                                    </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-left-thumbnail.html">Sticky
                                                                        Checkout</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-dynamic.html">Dynamic Checkout</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-sticky.html">Secure Checkout</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-bundle.html">Active Product
                                                                        view</a>
                                                                    <a class="dropdown-item" href="product-bundle.html">
                                                                        Active
                                                                        Last Orders
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3">
                                                                <div class="dropdown-column m-0">
                                                                    <h5 class="dropdown-header">
                                                                        Product Features </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-image.html">Product Simple</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-rectangle.html">
                                                                        Product Classified <label
                                                                            class="menu-label">New</label>
                                                                    </a>
                                                                    <a class="dropdown-item"
                                                                        href="product-size-chart.html">Size Chart <label
                                                                            class="menu-label">New</label></a>
                                                                    <a class="dropdown-item"
                                                                        href="product-size-chart.html">Delivery &
                                                                        Return</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-size-chart.html">Product
                                                                        Review</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-expert.html">Ask
                                                                        an Expert</a>
                                                                    <h5 class="custom-mt dropdown-header">Product
                                                                        Features
                                                                    </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-bottom-thumbnail.html">Product
                                                                        Tags</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-image.html">Store
                                                                        Information</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-image.html">Social Share <label
                                                                            class="menu-label warning-label">Hot</label>
                                                                    </a>
                                                                    <a class="dropdown-item"
                                                                        href="product-left-thumbnail.html">Related
                                                                        Products
                                                                        <label
                                                                            class="menu-label warning-label">Hot</label>
                                                                    </a>
                                                                    <a class="dropdown-item"
                                                                        href="product-right-thumbnail.html">Wishlist &
                                                                        Compare</a>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3 d-xl-block d-none">
                                                                <div class="dropdown-column m-0">
                                                                    <div class="menu-img-banner">
                                                                        <a class="text-title"
                                                                            href="product-circle.html">
                                                                            <img src="../assets/images/mega-menu.png"
                                                                                alt="banner" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item ">
                                                      <a className="nav-link nav-link1 ps-xl-2 ps-0" href="/">Bulk Order</a>
                                                 </li>
                                                 <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)"
                                                        data-bs-toggle="dropdown">Recipe</a>

                                                    <div class="dropdown-menu dropdown-menu-3 dropdown-menu-2">
                                                        <div class="row">
                                                            <div class="col-xl-3">
                                                                <div class="dropdown-column m-0">
                                                                    <h5 class="dropdown-header">
                                                                        Product Pages </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-left-thumbnail.html">Product
                                                                        Thumbnail</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-4-image.html">Product Images</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-slider.html">Product Slider</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-sticky.html">Product Sticky</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-accordion.html">Product
                                                                        Accordion</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-circle.html">Product Tab</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-digital.html">Product Digital</a>

                                                                    <h5 class="custom-mt dropdown-header">Product
                                                                        Features
                                                                    </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-circle.html">Bundle (Cross
                                                                        Sale)</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-left-thumbnail.html">Hot Stock
                                                                        Progress <label class="menu-label">New</label>
                                                                    </a>
                                                                    <a class="dropdown-item"
                                                                        href="product-sold-out.html">SOLD OUT</a>
                                                                    <a class="dropdown-item" href="product-circle.html">
                                                                        Sale Countdown</a>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3">
                                                                <div class="dropdown-column m-0">
                                                                    <h5 class="dropdown-header">
                                                                        Product Variants Style </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-rectangle.html">Variant
                                                                        Rectangle</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-circle.html">Variant Circle <label
                                                                            class="menu-label">New</label></a>
                                                                    <a class="dropdown-item"
                                                                        href="product-color-image.html">Variant Image
                                                                        Swatch</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-color.html">Variant Color</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-radio.html">Variant Radio
                                                                        Button</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-dropdown.html">Variant
                                                                        Dropdown</a>
                                                                    <h5 class="custom-mt dropdown-header">Product
                                                                        Features
                                                                    </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-left-thumbnail.html">Sticky
                                                                        Checkout</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-dynamic.html">Dynamic Checkout</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-sticky.html">Secure Checkout</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-bundle.html">Active Product
                                                                        view</a>
                                                                    <a class="dropdown-item" href="product-bundle.html">
                                                                        Active
                                                                        Last Orders
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3">
                                                                <div class="dropdown-column m-0">
                                                                    <h5 class="dropdown-header">
                                                                        Product Features </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-image.html">Product Simple</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-rectangle.html">
                                                                        Product Classified <label
                                                                            class="menu-label">New</label>
                                                                    </a>
                                                                    <a class="dropdown-item"
                                                                        href="product-size-chart.html">Size Chart <label
                                                                            class="menu-label">New</label></a>
                                                                    <a class="dropdown-item"
                                                                        href="product-size-chart.html">Delivery &
                                                                        Return</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-size-chart.html">Product
                                                                        Review</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-expert.html">Ask
                                                                        an Expert</a>
                                                                    <h5 class="custom-mt dropdown-header">Product
                                                                        Features
                                                                    </h5>
                                                                    <a class="dropdown-item"
                                                                        href="product-bottom-thumbnail.html">Product
                                                                        Tags</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-image.html">Store
                                                                        Information</a>
                                                                    <a class="dropdown-item"
                                                                        href="product-image.html">Social Share <label
                                                                            class="menu-label warning-label">Hot</label>
                                                                    </a>
                                                                    <a class="dropdown-item"
                                                                        href="product-left-thumbnail.html">Related
                                                                        Products
                                                                        <label
                                                                            class="menu-label warning-label">Hot</label>
                                                                    </a>
                                                                    <a class="dropdown-item"
                                                                        href="product-right-thumbnail.html">Wishlist &
                                                                        Compare</a>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3 d-xl-block d-none">
                                                                <div class="dropdown-column m-0">
                                                                    <div class="menu-img-banner">
                                                                        <a class="text-title"
                                                                            href="product-circle.html">
                                                                            <img src="../assets/images/mega-menu.png"
                                                                                alt="banner" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item ">
                                                      <a className="nav-link nav-link1 ps-xl-2 ps-0" href="/Faq">FAQ's</a>
                                                 </li>
                                                <li class="nav-item dropdown dropdown-mega">
                                                    <a class="nav-link dropdown-toggle ps-xl-2 ps-0"
                                                        href="javascript:void(0)" data-bs-toggle="dropdown">Shop
                                                    </a>

                                                    <div class="dropdown-menu dropdown-menu-2">
                                                        <div class="row">
                                                            <div class="dropdown-column col-xl-3">
                                                                <h5 class="dropdown-header">Daily Vegetables</h5>
                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Beans & Brinjals</a>

                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Broccoli &
                                                                    Cauliflower</a>

                                                                <a href="shop-left-sidebar.html"
                                                                    class="dropdown-item">Chilies, Garlic</a>

                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Vegetables &
                                                                    Salads</a>

                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Gourd, Cucumber</a>

                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Herbs & Sprouts</a>

                                                                <a href="demo-personal-portfolio.html"
                                                                    class="dropdown-item">Lettuce & Leafy</a>
                                                            </div>

                                                            <div class="dropdown-column col-xl-3">
                                                                <h5 class="dropdown-header">Baby Tender</h5>
                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Beans & Brinjals</a>

                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Broccoli &
                                                                    Cauliflower</a>

                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Chilies, Garlic</a>

                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Vegetables &
                                                                    Salads</a>

                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Gourd, Cucumber</a>

                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Potatoes &
                                                                    Tomatoes</a>

                                                                <a href="shop-left-sidebar.html"
                                                                    class="dropdown-item">Peas & Corn</a>
                                                            </div>

                                                            <div class="dropdown-column col-xl-3">
                                                                <h5 class="dropdown-header">Exotic Vegetables</h5>
                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Asparagus &
                                                                    Artichokes</a>

                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Avocados & Peppers</a>

                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Broccoli &
                                                                    Zucchini</a>

                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Celery, Fennel &
                                                                    Leeks</a>

                                                                <a class="dropdown-item"
                                                                    href="shop-left-sidebar.html">Chilies & Lime</a>
                                                            </div>

                                                            <div class="dropdown-column dropdown-column-img col-3">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                              
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="rightside-box">
                                <div class="search-full">
                                    <div class="input-group">
                                        <span class="input-group-text">
                                            <i data-feather="search" class="font-light"></i>
                                        </span>
                                        <input type="text" class="form-control search-type" placeholder="Search here.." />
                                        <span class="input-group-text close-search">
                                            <i data-feather="x" class="font-light"></i>
                                        </span>
                                    </div>
                                </div>
                                <ul class="right-side-menu">
                                    <li class="right-side">
                                        <div class="delivery-login-box">
                                            <div class="delivery-icon">
                                                <div class="search-box">
                                                    <i data-feather="search"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="right-side">
                                        <a href="/Wishlist" class="btn p-0 position-relative header-wishlist">
                                            <i data-feather="bookmark"></i>
                                        </a>
                                    </li>
                                    <li class="right-side">
                                        <div class="onhover-dropdown header-badge">
                                            <button type="button" class="btn p-0 position-relative header-wishlist">
                                                <i data-feather="shopping-cart"></i>
                                                <span class="position-absolute top-0 start-100 translate-middle badge">2
                                                    <span class="visually-hidden">unread messages</span>
                                                </span>
                                            </button>

                                            <div class="onhover-div">
                                                <ul class="cart-list">
                                                    <li class="product-box-contain">
                                                        <div class="drop-cart">
                                                            <a href="product-left-thumbnail.html" class="drop-image">
                                                                <img src="../assets/images/vegetable/product/1.png"
                                                                    class="blur-up lazyload" alt="" />
                                                            </a>

                                                            <div class="drop-contain">
                                                                <a href="product-left-thumbnail.html">
                                                                    <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                                                                </a>
                                                                <h6><span>1 x</span> $80.58</h6>
                                                                <button class="close-button close_button">
                                                                    <i class="fa-solid fa-xmark"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li class="product-box-contain">
                                                        <div class="drop-cart">
                                                            <a href="product-left-thumbnail.html" class="drop-image">
                                                                <img src="../assets/images/vegetable/product/2.png"
                                                                    class="blur-up lazyload" alt="" />
                                                            </a>

                                                            <div class="drop-contain">
                                                                <a href="product-left-thumbnail.html">
                                                                    <h5>Peanut Butter Bite Premium Butter Cookies 600 g
                                                                    </h5>
                                                                </a>
                                                                <h6><span>1 x</span> $25.68</h6>
                                                                <button class="close-button close_button">
                                                                    <i class="fa-solid fa-xmark"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>

                                                <div class="price-box">
                                                    <h5>Total :</h5>
                                                    <h4 class="theme-color fw-bold">$106.58</h4>
                                                </div>

                                                <div class="button-group">
                                                    <a href="/Cart" class="btn btn-sm cart-button">View Cart</a>
                                                    <a href="checkout.html" class="btn btn-sm cart-button theme-bg-color
                                                    text-white">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="right-side">
                                        <a href="/Wishlist" class="btn p-0 position-relative header-wishlist">
                                             <i data-feather="user"></i>
                                        </a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- Header End --> */}

    {/* <!-- mobile fix menu start --> */}
    <div class="mobile-menu d-md-none d-block mobile-cart">
        <ul>
            <li class="active">
                <a href="/">
                    <i class="iconly-Home icli"></i>
                    <span>Home</span>
                </a>
            </li>

          

            <li>
                <a href="search.html" class="search-box">
                    <i class="iconly-Search icli"></i>
                    <span>Search</span>
                </a>
            </li>

            <li>
                <a href="/Wishlist" class="notifi-wishlist">
                    <i class="iconly-Heart icli"></i>
                    <span>My Wish</span>
                </a>
            </li>

            <li>
                <a href="/Cart">
                    <i class="iconly-Bag-2 icli fly-cate"></i>
                    <span>Cart</span>
                </a>
            </li>
        </ul>
    </div>
    {/* <!-- mobile fix menu end --> */}
    </div>
  )
}
