import React from 'react'

export default function Navbar() {
  return (
    <div>
        {/* <!-- Header Start --> */}
    <header className="">
     

        <div className="top-nav top-header sticky-header">
            <div className="container-fluid-lg">
                <div className="row">
                    <div className="col-12">
                        <div className="navbar-top">
                            <button className="navbar-toggler d-xl-none d-inline navbar-menu-button me-2" type="button"
                                data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                                <span className="navbar-toggler-icon">
                                    <i className="fa-solid fa-bars"></i>
                                </span>
                            </button>
                            <a href="/" className="web-logo nav-logo">
                           
                                <h2 style={{fontWeight:'800',fontSize:'35px'}}>Evercore</h2>   
                            </a>

                            <div className="header-nav-middle">
                                <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                                    <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                                        <div className="offcanvas-header navbar-shadow">
                                            <h5>Menu</h5>
                                            <button className="btn-close lead" type="button"
                                                data-bs-dismiss="offcanvas"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            <ul className="navbar-nav">
                                               
                                                 <li className="nav-item ">
                                                      <a className="nav-link nav-link1 ps-xl-2 ps-0" href="/">Home</a>
                                                 </li>

                                              

                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="javascript:void(0)"
                                                        data-bs-toggle="dropdown">Crazy Deals</a>

                                                    <div className="dropdown-menu dropdown-menu-3 dropdown-menu-2">
    <div className="row">
        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
            <div className="dropdown-column m-0">
                <img src="/assets/images/nav1.webp" alt="Offer 1" className="img-fluid w-100 rounded" />
            </div>
        </div>

        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
            <div className="dropdown-column m-0">
                <img src="/assets/images/nav2.webp" alt="Offer 2" className="img-fluid w-100 rounded" />
            </div>
        </div>

        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
            <div className="dropdown-column m-0">
                <img src="/assets/images/nav3.webp" alt="Offer 3" className="img-fluid w-100 rounded" />
            </div>
        </div>

        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
            <div className="dropdown-column m-0">
                <img src="/assets/images/nav1.webp" alt="Offer 4" className="img-fluid w-100 rounded" />
            </div>
        </div>
    </div>
</div>

                                                </li>
                                                 <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="javascript:void(0)"
                                                        data-bs-toggle="dropdown">Authenticity</a>

                                                    <div className="dropdown-menu dropdown-menu-3 dropdown-menu-2">
    <div className="row justify-content-center">

        <div className="col-xl-3 col-lg-4 col-md-4 col-6" style={{background:'#c25f31',margin:'10px',borderRadius:'7px'}}> 
            <a href="/Authenticity">
            <div className="dropdown-column text-center ">
                <img src="/assets/images/authencity.svg" className="img-fluid mb-2" width="60" />
            </div>
                <p className="mb-2 text-center " style={{color:'#000'}}>Check Authenticity</p>
                </a>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-4 col-6" style={{background:'#c25f31',margin:'10px',borderRadius:'7px'}}>
            <a href="/ProteinCerti">
            <div className="dropdown-column text-center ">
                <img src="/assets/images/lab_certificate_icon.svg" className="img-fluid mb-2" width="60" />
            </div>
                <p className="mb-2 text-center" style={{color:'#000'}}>Protein Lab Certificate</p>
                </a>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-4 col-6" style={{background:'#c25f31',margin:'10px',borderRadius:'7px'}}>
            <a href="/Labdoor">
            <div className="dropdown-column text-center " >
                <img src="/assets/images/labdoor.svg" className="img-fluid mb-2" width="60" />
            </div>
                <p className="mb-2 text-center" style={{color:'#000'}}>Labdoor</p>
                </a>
        </div>

    </div>
</div>

                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="javascript:void(0)"
                                                        data-bs-toggle="dropdown">Shop By Goal</a>

                                                   <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="/Shop">Faster Muscle Gains</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/Shop">Faster Recovery</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/Shop">Gain Weight</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/Shop">Get Shredded</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/Shop">Hydration & Endurance</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/Shop">Prepare Before Training</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/Shop">Vegan Supplements</a>
                                                </li>
                                            </ul>
                                                </li>
                                                <li className="nav-item ">
                                                      <a className="nav-link nav-link1 ps-xl-2 ps-0" href="/Bulkorder">Bulk Order</a>
                                                 </li>
                                                 <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="javascript:void(0)"
                                                        data-bs-toggle="dropdown">Recipe</a>

                                                    <div className="dropdown-menu dropdown-menu-3 dropdown-menu-2">
                                                        <div className="row">
                                                            <div className="col-xl-3">
                                                                <div className="dropdown-column m-0">
                                                                    <h5 className="dropdown-header">
                                                                        Whey Protein Unflavored </h5>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Whey Protein Unflavored</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Banana Oats Protein Shake</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Banana Almond Cream Shake</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Coffee Banana Protein Shake</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Fruity Fusion Protein Shake</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Oat Meal Shake</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Oreo Chocolate Protein Shake</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Pineapple Power Shake</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Strawberry Vanilla Shake</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Wild Berry Shake</a>

                                                                   
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3">
                                                                <div className="dropdown-column m-0">
                                                                    <h5 className="dropdown-header">
                                                                        Peanut Butter Recipes </h5>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Peanut Butter Balls</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Peanut Butter Chocolate Shake</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Peanut Butter Coconut Burfi</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Peanut Butter Fruit Smoothie</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Peanut Butter Icecream</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Peanut Butter Moong Dal Kheer</a>
                                                                    
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Peanut Butter Protein Bars</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Peanut Butter Puffed Rice Balls</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Peanut Butter Rice Kheer</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Peanut Butter Tilgud Laddu</a>
                                                                  
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3">
                                                                <div className="dropdown-column m-0">
                                                                    <h5 className="dropdown-header">
                                                                        Plant Protein Recipes </h5>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Plant Protein Brownies</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">
                                                                        Plant Protein Pizza
                                                                    </a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Vegan Veggie Soup</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Protein Rich Wheat Roti</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Instant Protein Oats Dosa</a>
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Protein Rich Ragi Dosa</a>
                                                                    
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Vegan Protein Doritos</a>
                                                                   
                                                                    <a className="dropdown-item"
                                                                        href="/Recipe">Spicy Protein Potato Wedges 
                                                                    </a>
                                                                   
                                                                       
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3 d-xl-block d-none">
                                                                <div className="dropdown-column m-0">
                                                                    <div className="menu-img-banner">
                                                                        <a className="text-title"
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
                                                <li className="nav-item dropdown dropdown-mega">
                                                    <a className="nav-link dropdown-toggle ps-xl-2 ps-0"
                                                        href="javascript:void(0)" data-bs-toggle="dropdown">Shop
                                                    </a>

                                                    <div className="dropdown-menu dropdown-menu-2">
                                                        <div className="row">
                                                            <div className="dropdown-column col-xl-3">
                                                                <h5 className="dropdown-header">AS-IT-IS Protein</h5>
                                                                <a className="dropdown-item"
                                                                    href="/Shop">Whey Protein Concentrate</a>

                                                                <a className="dropdown-item"
                                                                    href="/Shop">Whey Protein Sachet 30g</a>

                                                                <a href="/Shop"
                                                                    className="dropdown-item">Whey Protein Isolate</a>

                                                                <a className="dropdown-item"
                                                                    href="/Shop">Pea Protein Isolate</a>

                                                                <a className="dropdown-item"
                                                                    href="/Shop">Soy Protein Isolate</a>

                                                                <a className="dropdown-item"
                                                                    href="/Shop">Brown Rice Protein</a>

                                                                <a href="/Shop"
                                                                    className="dropdown-item">Peanut Butter</a>
                                                            </div>

                                                            <div className="dropdown-column col-xl-3">
                                                                <h5 className="dropdown-header">ATOM Protein</h5>
                                                                <a className="dropdown-item"
                                                                    href="/Shop">Whey Protein</a>

                                                                <a className="dropdown-item"
                                                                    href="/Shop">PWR Whey</a>

                                                                <a className="dropdown-item"
                                                                    href="/Shop">Pea Protein</a>

                                                                <a className="dropdown-item"
                                                                    href="/Shop">Nitro Whey Protein</a>

                                                                <a className="dropdown-item"
                                                                    href="/Shop">ISO Whey Gold</a>

                                                                <a className="dropdown-item"
                                                                    href="/Shop">Whey Protein Isolate</a>

                                                                <a href="/Shop"
                                                                    className="dropdown-item">Beginners Whey Protein</a>
                                                            </div>

                                                            <div className="dropdown-column col-xl-3">
                                                                <h5 className="dropdown-header">ATOM Amino Acid </h5>
                                                                <a className="dropdown-item"
                                                                    href="/Shop">BCAA</a>

                                                                <a className="dropdown-item"
                                                                    href="/Shop">Creatine Monohydrate</a>

                                                                <a className="dropdown-item"
                                                                    href="/Shop">L-Citrulline Malate</a>

                                                                <a className="dropdown-item"
                                                                    href="/Shop">Multivitamin</a>

                                                                <a className="dropdown-item"
                                                                    href="/Shop">L-Carnitine Liquid</a>
                                                            </div>

                                                            <div className="dropdown-column dropdown-column-img col-3">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                              
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rightside-box">
                                <div className="search-full">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i data-feather="search" className="font-light"></i>
                                        </span>
                                        <input type="text" className="form-control search-type" placeholder="Search here.." />
                                        <span className="input-group-text close-search">
                                            <i data-feather="x" className="font-light"></i>
                                        </span>
                                    </div>
                                </div>
                                <ul className="right-side-menu">
                                    <li className="right-side">
                                        <div className="delivery-login-box">
                                            <div className="delivery-icon">
                                                <div className="search-box">
                                                    <i data-feather="search"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="right-side">
                                        <a href="/" className="btn p-0 position-relative header-wishlist"      
                                        data-bs-toggle="modal"
                                        data-bs-target="#searchModal">
                                            <i data-feather="search"></i>
                                        </a>
                                    </li>
                                    
                                    <li className="right-side">
                                        <div className="onhover-dropdown header-badge">
                                            <button type="button" className="btn p-0 position-relative header-wishlist">
                                                <i data-feather="shopping-cart"></i>
                                                <span className="position-absolute top-0 start-100 translate-middle badge">2
                                                    <span className="visually-hidden">unread messages</span>
                                                </span>
                                            </button>

                                            <div className="onhover-div">
                                                <ul className="cart-list">
                                                    <li className="product-box-contain">
                                                        <div className="drop-cart">
                                                            <a href="/" className="drop-image">
                                                                <img src="../assets/images/vegetable/product/1.png"
                                                                    className="blur-up lazyload" alt="" />
                                                            </a>

                                                            <div className="drop-contain">
                                                                <a href="/">
                                                                    <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                                                                </a>
                                                                <h6><span>1 x</span> ₹80.58</h6>
                                                                <button className="close-button close_button">
                                                                    <i className="fa-solid fa-xmark"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="product-box-contain">
                                                        <div className="drop-cart">
                                                            <a href="/" className="drop-image">
                                                                <img src="../assets/images/vegetable/product/2.png"
                                                                    className="blur-up lazyload" alt="" />
                                                            </a>

                                                            <div className="drop-contain">
                                                                <a href="/">
                                                                    <h5>Peanut Butter Bite Premium Butter Cookies 600 g
                                                                    </h5>
                                                                </a>
                                                                <h6><span>1 x</span> ₹25.68</h6>
                                                                <button className="close-button close_button">
                                                                    <i className="fa-solid fa-xmark"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>

                                                <div className="price-box">
                                                    <h5>Total :</h5>
                                                    <h4 className="theme-color fw-bold">₹106.58</h4>
                                                </div>

                                                <div className="button-group">
                                                    <a href="/Cart" className="btn btn-sm cart-button">View Cart</a>
                                                    <a href="/Checkout" className="btn btn-sm cart-button theme-bg-color
                                                    text-white">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="right-side">
                                        <a href="/UserAccount" className="btn p-0 position-relative header-wishlist">
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
    <div className="mobile-menu d-md-none d-block mobile-cart">
        <ul>
            <li className="active">
                <a href="/">
                    <i className="iconly-Home icli"></i>
                    <span>Home</span>
                </a>
            </li>

          

            <li>
                <a href="" className="search-box"                                         data-bs-toggle="modal"
                                        data-bs-target="#searchModal">
                    <i className="iconly-Search icli"></i>
                    <span>Search</span>
                </a>
            </li>

            <li>
                <a href="/Wishlist" className="notifi-wishlist">
                    <i className="iconly-Heart icli"></i>
                    <span>My Wish</span>
                </a>
            </li>

            <li>
                <a href="/Cart">
                    <i className="iconly-Bag-2 icli fly-cate"></i>
                    <span>Cart</span>
                </a>
            </li>
        </ul>
    </div>
    {/* <!-- mobile fix menu end --> */}
    <div
  className="modal fade"
  id="searchModal"
  tabIndex="-1"
  aria-labelledby="searchModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog ">
    <div className="modal-content p-3">

      <div className="modal-header border-0">
        <h5 className="modal-title" id="searchModalLabel">Search Products</h5>
        <button 
          type="button" 
          className="btn-close" 
          data-bs-dismiss="modal" 
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body">
        <input
          type="text"
          className="form-control"
          placeholder="Search for protein, supplements..."
          autoFocus
        />
      </div>

    </div>
  </div>
</div>

    </div>
  )
}
