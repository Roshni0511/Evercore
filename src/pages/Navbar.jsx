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
        <div class="col-xl-3 col-lg-6 col-md-6 col-12">
            <div class="dropdown-column m-0">
                <img src="/assets/images/nav1.webp" alt="Offer 1" class="img-fluid w-100 rounded" />
            </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-12">
            <div class="dropdown-column m-0">
                <img src="/assets/images/nav2.webp" alt="Offer 2" class="img-fluid w-100 rounded" />
            </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-12">
            <div class="dropdown-column m-0">
                <img src="/assets/images/nav3.webp" alt="Offer 3" class="img-fluid w-100 rounded" />
            </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-12">
            <div class="dropdown-column m-0">
                <img src="/assets/images/nav1.webp" alt="Offer 4" class="img-fluid w-100 rounded" />
            </div>
        </div>
    </div>
</div>

                                                </li>
                                                 <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)"
                                                        data-bs-toggle="dropdown">Authenticity</a>

                                                    <div class="dropdown-menu dropdown-menu-3 dropdown-menu-2">
    <div class="row justify-content-center">

        <div class="col-xl-3 col-lg-4 col-md-4 col-6" style={{background:'#ff7272',margin:'10px',borderRadius:'7px'}}> 
            <div class="dropdown-column text-center ">
                <img src="/assets/images/authencity.svg" class="img-fluid mb-2" width="60" />
            </div>
                <p class="mb-2 text-center">Check Authenticity</p>
        </div>

        <div class="col-xl-3 col-lg-4 col-md-4 col-6" style={{background:'#ff7272',margin:'10px',borderRadius:'7px'}}>
            <div class="dropdown-column text-center ">
                <img src="/assets/images/lab_certificate_icon.svg" class="img-fluid mb-2" width="60" />
            </div>
                <p class="mb-2 text-center">Protein Lab Certificate</p>
        </div>

        <div class="col-xl-3 col-lg-4 col-md-4 col-6" style={{background:'#ff7272',margin:'10px',borderRadius:'7px'}}>
            <div class="dropdown-column text-center " >
                <img src="/assets/images/labdoor.svg" class="img-fluid mb-2" width="60" />
            </div>
                <p class="mb-2 text-center">Labdoor</p>
        </div>

    </div>
</div>

                                                </li>
                                                <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)"
                                                        data-bs-toggle="dropdown">Shop By Goal</a>

                                                   <ul class="dropdown-menu">
                                                <li>
                                                    <a class="dropdown-item" href="/">Faster Muscle Gains</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="/">Faster Recovery</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="/">Gain Weight</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="/">Get Shredded</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="/">Hydration & Endurance</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="/">Prepare Before Training</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="/">Vegan Supplements</a>
                                                </li>
                                            </ul>
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
                                                                        Whey Protein Unflavored </h5>
                                                                    <a class="dropdown-item"
                                                                        href="/">Whey Protein Unflavored</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Banana Oats Protein Shake</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Banana Almond Cream Shake</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Coffee Banana Protein Shake</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Fruity Fusion Protein Shake</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Oat Meal Shake</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Oreo Chocolate Protein Shake</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Pineapple Power Shake</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Strawberry Vanilla Shake</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Wild Berry Shake</a>

                                                                   
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3">
                                                                <div class="dropdown-column m-0">
                                                                    <h5 class="dropdown-header">
                                                                        Peanut Butter Recipes </h5>
                                                                    <a class="dropdown-item"
                                                                        href="/">Peanut Butter Balls</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Peanut Butter Chocolate Shake</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Peanut Butter Coconut Burfi</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Peanut Butter Fruit Smoothie</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Peanut Butter Icecream</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Peanut Butter Moong Dal Kheer</a>
                                                                    
                                                                    <a class="dropdown-item"
                                                                        href="/">Peanut Butter Protein Bars</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Peanut Butter Puffed Rice Balls</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Peanut Butter Rice Kheer</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Peanut Butter Tilgud Laddu</a>
                                                                  
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3">
                                                                <div class="dropdown-column m-0">
                                                                    <h5 class="dropdown-header">
                                                                        Plant Protein Recipes </h5>
                                                                    <a class="dropdown-item"
                                                                        href="/">Plant Protein Brownies</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">
                                                                        Plant Protein Pizza
                                                                    </a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Vegan Veggie Soup</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Protein Rich Wheat Roti</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Instant Protein Oats Dosa</a>
                                                                    <a class="dropdown-item"
                                                                        href="/">Protein Rich Ragi Dosa</a>
                                                                    
                                                                    <a class="dropdown-item"
                                                                        href="/">Vegan Protein Doritos</a>
                                                                   
                                                                    <a class="dropdown-item"
                                                                        href="/">Spicy Protein Potato Wedges 
                                                                    </a>
                                                                   
                                                                       
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3 d-xl-block d-none">
                                                                <div class="dropdown-column m-0">
                                                                    <div class="menu-img-banner">
                                                                        <a class="text-title"
                                                                            href="/">
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
                                                                <h5 class="dropdown-header">AS-IT-IS Protein</h5>
                                                                <a class="dropdown-item"
                                                                    href="/">Whey Protein Concentrate</a>

                                                                <a class="dropdown-item"
                                                                    href="/">Whey Protein Sachet 30g</a>

                                                                <a href="/"
                                                                    class="dropdown-item">Whey Protein Isolate</a>

                                                                <a class="dropdown-item"
                                                                    href="/">Pea Protein Isolate</a>

                                                                <a class="dropdown-item"
                                                                    href="/">Soy Protein Isolate</a>

                                                                <a class="dropdown-item"
                                                                    href="/">Brown Rice Protein</a>

                                                                <a href="/"
                                                                    class="dropdown-item">Peanut Butter</a>
                                                            </div>

                                                            <div class="dropdown-column col-xl-3">
                                                                <h5 class="dropdown-header">ATOM Protein</h5>
                                                                <a class="dropdown-item"
                                                                    href="/">Whey Protein</a>

                                                                <a class="dropdown-item"
                                                                    href="/">PWR Whey</a>

                                                                <a class="dropdown-item"
                                                                    href="/">Pea Protein</a>

                                                                <a class="dropdown-item"
                                                                    href="/">Nitro Whey Protein</a>

                                                                <a class="dropdown-item"
                                                                    href="/">ISO Whey Gold</a>

                                                                <a class="dropdown-item"
                                                                    href="/">Whey Protein Isolate</a>

                                                                <a href="/"
                                                                    class="dropdown-item">Beginners Whey Protein</a>
                                                            </div>

                                                            <div class="dropdown-column col-xl-3">
                                                                <h5 class="dropdown-header">ATOM Amino Acid </h5>
                                                                <a class="dropdown-item"
                                                                    href="/">BCAA</a>

                                                                <a class="dropdown-item"
                                                                    href="/">Creatine Monohydrate</a>

                                                                <a class="dropdown-item"
                                                                    href="/">L-Citrulline Malate</a>

                                                                <a class="dropdown-item"
                                                                    href="/">Multivitamin</a>

                                                                <a class="dropdown-item"
                                                                    href="/">L-Carnitine Liquid</a>
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
                                        <a href="/" class="btn p-0 position-relative header-wishlist">
                                            <i data-feather="search"></i>
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
                                                            <a href="/" class="drop-image">
                                                                <img src="../assets/images/vegetable/product/1.png"
                                                                    class="blur-up lazyload" alt="" />
                                                            </a>

                                                            <div class="drop-contain">
                                                                <a href="/">
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
                                                            <a href="/" class="drop-image">
                                                                <img src="../assets/images/vegetable/product/2.png"
                                                                    class="blur-up lazyload" alt="" />
                                                            </a>

                                                            <div class="drop-contain">
                                                                <a href="/">
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
                                                    <a href="/Checkout" class="btn btn-sm cart-button theme-bg-color
                                                    text-white">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="right-side">
                                        <a href="/UserAccount" class="btn p-0 position-relative header-wishlist">
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
                <a href="" class="search-box">
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
