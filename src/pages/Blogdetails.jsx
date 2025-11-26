import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Blogdetails = () => {
  return (
    <>
       <Navbar />
       
    {/* <!-- Breadcrumb Section Start/ --> */}
    <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-contain">
                        <h2>Blog Details </h2>
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">Blog</li>
                                <li className="breadcrumb-item active">Blog Details</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End -//-> */}

    {/* <!-- Blog Details Section Start --> */}
    <section className="blog-section section-b-space">
        <div className="container-fluid-lg">
            <div className="row g-sm-4 g-3">
                   <div className="col-xxl-9 col-xl-8 col-lg-7 ratio_50">
                    <div className="blog-detail-image rounded-3 mb-4">
                        <img src="/assets/images/unnamed.jpg" className="bg-img blur-up lazyload" alt="img" />
                        <div className="blog-image-contain">
                            <ul className="contain-list">
                                           <li>whey protein</li>
                            <li>fitness</li>
                            <li>supplements</li>
                        </ul>
                        <h2>Premium Whey Protein – Science Behind Faster Muscle Growth</h2>
                            <ul className="contain-comment-list">
                                <li>
                                    <div className="user-list">
                                        <i data-feather="user"></i>
                                     <span>Shubham</span>
                                    </div>
                                </li>

                                <li>
                                    <div className="user-list">
                                        <i data-feather="calendar"></i>
                                        <span>April 19, 2022</span>
                                    </div>
                                </li>

                                <li>
                                    <div className="user-list">
                                        <i data-feather="message-square"></i>
                                        <span>82 Comment</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="blog-detail-contain">
                        <p>
                        <span className="first">P</span> rotein is the key nutrient your body needs for muscle repair,
                        strength improvement, and faster recovery. Whether you are an athlete, bodybuilder, or a beginner,
                        adding whey protein to your diet ensures your muscles get complete amino acids required for growth.
                        High-quality whey protein absorbs quickly and speeds up post-workout recovery.
                    </p>


                             <div className="blog-details-quote">
                        <h3>“Right nutrition + right workout = Guaranteed results. Protein is the fuel your muscles can’t grow without.”</h3>
                        <h5>- Fitness Expert</h5>
                    </div>

                       <p>
                        Whey protein helps reduce muscle soreness, boosts stamina, and enhances metabolism.
                        Many fitness enthusiasts fail to progress because their daily protein intake is low.
                        With a clean protein supplement, you can improve strength levels and support lean muscle
                        building more effectively.
                    </p>


                          <p className="mb-0">
                        Always choose a protein powder that is low in sugar, easy to digest, and made with pure ingredients.
                        Our premium whey protein is lab-tested and provides essential amino acids for maximum results.
                        Consistent use improves muscle mass, energy levels, and overall performance. If you want faster,
                        visible transformation — protein and consistency are the two most important pillars.
                    </p>
                    </div>

                    <div className="comment-box overflow-hidden">
                        <div className="leave-title">
                            <h3>Comments</h3>
                        </div>

                        <div className="user-comment-box">
                            <ul>
                                <li>
                                    <div className="user-box border-color">
                                        <div className="reply-button">
                                            <i className="fa-solid fa-reply"></i>
                                            <span className="theme-color">Reply</span>
                                        </div>
                                        <div className="user-image">
                                            <img src="/assets/images/user.png"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                            <div className="user-name">
                                                <h6>30 Jan, 2022</h6>
                                              <h5 className="text-content">Rahul Sharma</h5>
                                               </div>
                                        </div>

                                        <div className="user-contain">
                                             <p>"Amazing information! Whey protein has improved my recovery drastically."</p>

                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="user-box border-color">
                                        <div className="reply-button">
                                            <i className="fa-solid fa-reply"></i>
                                            <span className="theme-color">Reply</span>
                                        </div>
                                        <div className="user-image">
                                            <img src="/assets/images/user.png"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                            <div className="user-name">
                                                <h6>30 Jan, 2022</h6>
                                                <h5 className="text-content">Glenn Greer</h5>
                                            </div>
                                        </div>

                                        <div className="user-contain">
                                            <p>"Yeah, I think maybe you do. Right, gimme a Pepsi free. Of course, the
                                                Enchantment Under The Sea Dance they're supposed to go to this, that's
                                                where they kiss for the first time. You'll find out. Are you sure about
                                                this storm?"</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="li-padding">
                                    <div className="user-box">
                                        <div className="reply-button">
                                            <i className="fa-solid fa-reply"></i>
                                            <span className="theme-color">Reply</span>
                                        </div>
                                        <div className="user-image">
                                            <img src="/assets/images/user.png"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                            <div className="user-name">
                                                <h6>30 Jan, 2022</h6>
                                                <h5 className="text-content">Glenn Greer</h5>
                                            </div>
                                        </div>

                                        <div className="user-contain">
                                            <p>"Cheese slices goat cottage cheese roquefort cream cheese pecorino cheesy
                                                feet when the cheese comes out everybody's happy"</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="leave-box">
                        <div className="leave-title mt-0">
                            <h3>Leave Comment</h3>
                        </div>

                        <div className="leave-comment">
                            <div className="comment-notes">
                                <p className="text-content mb-4">Your email address will not be published. Required fields
                                    are marked</p>
                            </div>
                            <div className="row g-3">
                                <div className="col-xxl-4 col-lg-12 col-sm-6">
                                    <div className="blog-input">
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                            placeholder="Full Name" />
                                    </div>
                                </div>

                                <div className="col-xxl-4 col-lg-12 col-sm-6">
                                    <div className="blog-input">
                                        <input type="email" className="form-control" id="exampleFormControlInput2"
                                            placeholder="Enter Email Address" />
                                    </div>
                                </div>

                                <div className="col-xxl-4 col-lg-12 col-sm-6">
                                    <div className="blog-input">
                                        <input type="url" className="form-control" id="exampleFormControlInput3"
                                            placeholder="Enter URL" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="blog-input">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"
                                            placeholder="Comments"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="form-check d-flex mt-4 p-0">
                                <input className="checkbox_animated" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label text-content" for="flexCheckDefault">
                                    <span className="color color-1"> Save my name, email, and website in this
                                        browser for the next time I comment.</span>
                                </label>
                            </div>

                            <button className="btn btn-animation ms-xxl-auto mt-xxl-0 mt-3 btn-md fw-bold">Post
                                Comment</button>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-5 d-lg-block d-none">
                    <div className="left-sidebar-box">
                        <div className="left-search-box">
                            <div className="search-box">
                                <input type="search" className="form-control" id="exampleFormControlInput4"
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
                                        data-bs-target="#panelsStayOpen-collapseTwo">
                                        Category
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse collapse show">
                                    <div className="accordion-body p-0">
                                        <div className="category-list-box">
                                            <ul>
                                                <li>
                                                    <a href="/Blog">
                                                        <div className="category-name">
                                                            <h5>Latest Recipes</h5>
                                                            <span>10</span>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="/Blog">
                                                        <div className="category-name">
                                                            <h5>Diet Food</h5>
                                                            <span>6</span>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="/Blog">
                                                        <div className="category-name">
                                                            <h5>Low calorie Items</h5>
                                                            <span>8</span>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="/Blog">
                                                        <div className="category-name">
                                                            <h5>Cooking Method</h5>
                                                            <span>9</span>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="/Blog">
                                                        <div className="category-name">
                                                            <h5>Dairy Free</h5>
                                                            <span>12</span>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="/Blog">
                                                        <div className="category-name">
                                                            <h5>Vegetarian Food</h5>
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
                                        data-bs-target="#panelsStayOpen-collapseThree">
                                        Product Tags
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree"
                                    className="accordion-collapse collapse collapse show">
                                    <div className="accordion-body pt-0">
                                        <div className="product-tags-box">
                                            <ul>

                                                <li>
                                                    <a href="javascript:void(0)">Fruit Cutting</a>
                                                </li>

                                                <li>
                                                    <a href="javascript:void(0)">Meat</a>
                                                </li>

                                                <li>
                                                    <a href="javascript:void(0)">organic</a>
                                                </li>

                                                <li>
                                                    <a href="javascript:void(0)">cake</a>
                                                </li>

                                                <li>
                                                    <a href="javascript:void(0)">pick fruit</a>
                                                </li>

                                                <li>
                                                    <a href="javascript:void(0)">backery</a>
                                                </li>

                                                <li>
                                                    <a href="javascript:void(0)">organix food</a>
                                                </li>

                                                <li>
                                                    <a href="javascript:void(0)">Most Expensive Fruit</a>
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
    {/* <!-- Blog Details Section End --> */}
       <Footer />
    </>
  )
}

export default Blogdetails