import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Blog = () => {
  return (
    <>
      <Navbar />
           {/* <!-- Breadcrumb Section Start --> */}
    <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-contain">
                        <h2>Blog Grid</h2>
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item active">Blog Grid</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- Blog Section Start --> */}
    <section className="blog-section section-b-space">
        <div className="container-fluid-lg">
            <div className="row g-4">
                <div className="col-xxl-9 col-xl-8 col-lg-7 order-lg-2">
                    <div className="row g-4 ratio_65">
                        <div className="col-xxl-4 col-sm-6">
                            <div className="blog-box wow fadeInUp">
                                <div className="blog-image">
                                    <a href="/Blogdetails">
                                        <img src="/assets/images/blog1.jpg"
                                            className="bg-img blur-up lazyload" alt="img" />
                                    </a>
                                </div>

                                <div className="blog-contain">
                                    <div className="blog-label">
                                        <span className="time"><i data-feather="clock"></i> <span>25 Feg, 2022</span></span>
                                        <span className="super"><i data-feather="user"></i> <span>Mark J.
                                                Speight</span></span>
                                    </div>
                                    <a href="/Blogdetails">
                                        <h3>one pot creamy mediterranean chicken pasta cream.</h3>
                                    </a>
                                    <a href='/Blogdetails'>

                                    <button  className="blog-button">Read More
                                        <i className="fa-solid fa-right-long"></i></button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4 col-sm-6">
                            <div className="blog-box wow fadeInUp" data-wow-delay="0.05s">
                                <div className="blog-image">
                                    <a href="/Blogdetails">
                                        <img src="/assets/images/blog2.webp" className="bg-img" alt="img" />
                                    </a>
                                </div>

                                <div className="blog-contain">
                                    <div className="blog-label">
                                        <span className="time"><i data-feather="clock"></i> <span>25 Feg, 2022</span></span>
                                        <span className="super"><i data-feather="user"></i> <span>rebeus
                                                hagrid</span></span>
                                    </div>
                                    <a href="/Blogdetails">
                                        <h3>Crispy Frozen Vegetable is the on the Tempura.</h3>
                                    </a>
                                    <a href='/Blogdetails'>

                                    <button className="blog-button">Read More
                                        <i className="fa-solid fa-right-long"></i></button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4 col-sm-6">
                            <div className="blog-box wow fadeInUp" data-wow-delay="0.1s">
                                <div className="blog-image">
                                    <a href="/Blogdetails">
                                        <img src="/assets/images/blog3.jpg"
                                            className="bg-img blur-up lazyload" alt="img" />
                                    </a>
                                    <label><i className="fa-solid fa-bolt-lightning"></i> popular</label>
                                </div>

                                <div className="blog-contain">
                                    <div className="blog-label">
                                        <span className="time"><i data-feather="clock"></i> <span>25 Feg, 2022</span></span>
                                        <span className="super"><i data-feather="user"></i> <span>Chris C.
                                                Hall</span></span>
                                    </div>
                                    <a href="/Blogdetails">
                                        <h3>How to start regrowing green onions and other vegetables.</h3>
                                    </a>
                                    <a href='/Blogdetails'>

                                    <button  className="blog-button">Read More
                                        <i className="fa-solid fa-right-long"></i></button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4 col-sm-6">
                            <div className="blog-box wow fadeInUp" data-wow-delay="0.15s">
                                <div className="blog-image">
                                    <a href="/Blogdetails">
                                        <img src="/assets/images/blog4.jpg"
                                            className="bg-img blur-up lazyload" alt="img" />
                                    </a>
                                </div>

                                <div className="blog-contain">
                                    <div className="blog-label">
                                        <span className="time"><i data-feather="clock"></i> <span>25 Feg, 2022</span></span>
                                        <span className="super"><i data-feather="user"></i> <span>James M.
                                                Martin</span></span>
                                    </div>
                                    <a href="/Blogdetails">
                                        <h3>Starting a vegetable garden: the basics.</h3>
                                    </a>
                                    <a href='/Blogdetails'>

                                    <button className="blog-button">Read More
                                        <i className="fa-solid fa-right-long"></i></button>
                                    </a>
                                </div>
                            </div>
                        </div>

                     

                     
                    </div>

                    <nav className="custom-pagination">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="javascript:void(0)" tabindex="-1">
                                    <i className="fa-solid fa-angles-left"></i>
                                </a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="javascript:void(0)">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">
                                    <i className="fa-solid fa-angles-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="col-xxl-3 col-xl-4 col-lg-5 order-lg-1">
                    <div className="left-sidebar-box wow fadeInUp">
                        <div className="left-search-box">
                            <div className="search-box1 search-box">
                                <input type="search" className="form-control" id="exampleFormControlInput1"
                                    placeholder="Search...." />
                            </div>
                        </div>

                        <div className="accordion left-accordion-box" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne">
                                        Recent Post
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body pt-0">
                                        <div className="recent-post-box">
                                            <div className="recent-box">
                                                <a href="/Blogdetails" className="recent-image">
                                                    <img src="/assets/images/product1.webp"
                                                        className="img-fluid blur-up lazyload" alt="img" style={{width:'90px'}}/>
                                                </a>

                                                <div className="recent-detail">
                                                    <a href="/Blogdetails">
                                                        <h5 className="recent-name">Green onion knife and salad placed</h5>
                                                    </a>
                                                    <h6>25 Jan, 2022 <i data-feather="thumbs-up"></i></h6>
                                                </div>
                                            </div>

                                            <div className="recent-box">
                                                <a href="/Blogdetails" className="recent-image">
                                                    <img src="/assets/images/product2.webp" style={{width:'90px'}}
                                                        className="img-fluid blur-up lazyload" alt="img" />
                                                </a>

                                                <div className="recent-detail">
                                                    <a href="/Blogdetails">
                                                        <h5 className="recent-name">Health and skin for your organic</h5>
                                                    </a>
                                                    <h6>25 Jan, 2022 <i data-feather="thumbs-up"></i></h6>
                                                </div>
                                            </div>

                                            <div className="recent-box">
                                                <a href="/Blogdetails" className="recent-image">
                                                    <img src="/assets/images/product3.webp" style={{width:'90px'}}
                                                        className="img-fluid blur-up lazyload" alt="img" />
                                                </a>

                                                <div className="recent-detail">
                                                    <a href="/Blogdetails">
                                                        <h5 className="recent-name">Organics mix masala fresh & soft</h5>
                                                    </a>
                                                    <h6>25 Jan, 2022 <i data-feather="thumbs-up"></i></h6>
                                                </div>
                                            </div>

                                            <div className="recent-box">
                                                <a href="/Blogdetails" className="recent-image">
                                                    <img src="/assets/images/product5.webp" style={{width:'90px'}}
                                                        className="img-fluid blur-up lazyload" alt="img" />
                                                </a>

                                                <div className="recent-detail">
                                                    <a href="/Blogdetails">
                                                        <h5 className="recent-name">Fresh organics brand and picnic</h5>
                                                    </a>
                                                    <h6>25 Jan, 2022 <i data-feather="thumbs-up"></i></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo">Category</button>
    </h2>

    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
        <div className="accordion-body p-0">
            <div className="category-list-box">
                <ul>

                    <li>
                        <a href="/Blog">
                            <div className="category-name">
                                <h5>Whey Protein Guides</h5>
                                <span>14</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/Blog">
                            <div className="category-name">
                                <h5>Muscle Building Tips</h5>
                                <span>9</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/Blog">
                            <div className="category-name">
                                <h5>Fat Loss & Diet Plans</h5>
                                <span>11</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/Blog">
                            <div className="category-name">
                                <h5>Workout Nutrition</h5>
                                <span>7</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/Blog">
                            <div className="category-name">
                                <h5>Creatine & Supplements</h5>
                                <span>13</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="/Blog">
                            <div className="category-name">
                                <h5>Beginner Fitness Tips</h5>
                                <span>10</span>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</div>


                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseThree">Product Tags</button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree"
                                    className="accordion-collapse collapse collapse show">
                                    <div className="accordion-body pt-0">
                                        <div className="product-tags-box">
                                            <ul>

    <li>
        <a href="">Whey Protein</a>
    </li>

    <li>
        <a href="">Isolate Protein</a>
    </li>

    <li>
        <a href="">Mass Gainer</a>
    </li>

    <li>
        <a href="">Pre-Workout</a>
    </li>

    <li>
        <a href="">Creatine</a>
    </li>

    <li>
        <a href="">Amino Acids (BCAA/EAA)</a>
    </li>

    <li>
        <a href="">Fat Burners</a>
    </li>

    <li>
        <a href="">Health & Wellness</a>
    </li>

</ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseFour">Trending Products</button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse collapse show">
                                    <div className="accordion-body">
                                        <ul className="product-list product-list-2 border-0 p-0">
                                            <li>
                                                <div className="offer-product">
                                                    <a href="/Shop" className="offer-image">
                                                         <img src="/assets/images/product1.webp"
                                                        className="img-fluid blur-up lazyload" alt="img" style={{width:'90px'}}/>
                                                    </a>

                                                    <div className="offer-detail">
                                                        <div>
                                                            <a href="/Shop">
                                                                <h6 className="name">Meatigo Premium Goat Curry</h6>
                                                            </a>
                                                            <span>450 G</span>
                                                            <h6 className="price theme-color">₹ 70.00</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="offer-product">
                                                    <a href="/Shop" className="offer-image">
                                                             <img src="/assets/images/product2.webp" style={{width:'90px'}}
                                                        className="img-fluid blur-up lazyload" alt="img" />
                                                    </a>

                                                    <div className="offer-detail">
                                                        <div>
                                                            <a href="/Shop">
                                                                <h6 className="name">Dates Medjoul Premium Imported</h6>
                                                            </a>
                                                            <span>450 G</span>
                                                            <h6 className="price theme-color">₹ 40.00</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="mb-0">
                                                <div className="offer-product">
                                                    <a href="/Shop" className="offer-image">
                                                        <img src="/assets/images/product5.webp" style={{width:'90px'}}
                                                        className="img-fluid blur-up lazyload" alt="img" />
                                                    </a>

                                                    <div className="offer-detail">
                                                        <div>
                                                            <a href="/Shop">
                                                                <h6 className="name">Apple Red Premium Imported</h6>
                                                            </a>
                                                            <span>1 KG</span>
                                                            <h6 className="price theme-color">₹ 80.00</h6>
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
    </section>
    {/* <!-- Blog Section End --> */}
      <Footer />
    </>
  )
}

export default Blog