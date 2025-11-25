import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Aboutus = () => {
  return (
    <>
       <Navbar />
                {/* <!-- Breadcrumb Section Start --> */}
    <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-contain">
                        <h2>About Us</h2>
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item active">About Us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}
      {/* <!-- Fresh Vegetable Section Start --> */}
    <section className="fresh-vegetable-section section-lg-space">
        <div className="container-fluid-lg">
            <div className="row gx-xl-5 gy-xl-0 g-3 ratio_148_1">
                <div className="col-xl-6 col-12">
                    <div className="row g-sm-4 g-2">
                     <div className="col-12">
                            <div className="fresh-image-2">
                              <div>
                                <img
                                  src="/assets/images/prd_3977707-MuscleBlaze.webp"
                                  alt="Fresh Image"
                                  className="resimg"
                                  width={"80%"}
                                />
                              </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-12">
                    <div className="fresh-contain p-center-left">
                        <div>
                            <div className="review-title">
                                <h4>About Us</h4>
                                <h2>Your Trusted Online Shopping Destination</h2>
                            </div>

                            <div className="delivery-list">
                                <p className="text-content " style={{textAlign:'justify'}} >
                                    Founded in 2019, our journey began with a simple vision — to make quality products accessible and affordable for everyone.
                                     What started as a small online store has now grown into a trusted eCommerce brand serving thousands of happy customers across the country.
                                     <br /><br />
                                     We believe shopping should be easy, enjoyable, and reliable. That’s why we handpick every product with care,
                                     ensuring the best quality and unbeatable value. From everyday essentials to the latest trends,
                                     we constantly update our collection with new arrivals every month, keeping your shopping experience fresh and exciting.
                                     <br /><br />
                                     Our dedicated team works 24/7 to bring innovation, style, and convenience to your doorstep.
                                     With secure payment options, fast delivery, and a responsive support team,
                                     we’re not just an online store — we’re your trusted shopping partner.
                                </p>
                                <ul className="delivery-box">
                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/delivery.svg" className="blur-up lazyload" alt="img" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Free delivery for all orders</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/leaf.svg" className="blur-up lazyload" alt="img" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Top Quality Products</h5>
                                            </div>
                                        </div>
                                    </li>
                                            
                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/delivery.svg" className="blur-up lazyload" alt="img" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Genuine & Authentic Items</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/leaf.svg" className="blur-up lazyload" alt="img" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Trusted & Verified</h5>
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
    </section>
    {/* <!-- Fresh Vegetable Section End --> */}
       <section class="client-section section-lg-space">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="about-us-title text-center">
                        <h4>What We Do</h4>
                        <h2 class="center">We are Trusted by Clients</h2>
                    </div>

                    <div class="slider-3_1 product-wrapper">
                        <div>
                            <div class="clint-contain">
                                <div className="client-icon">
  <img
    src="../assets/svg/3/work.svg"
    alt="img"
    style={{
      filter:
        "brightness(0) saturate(100%) invert(39%) sepia(54%) saturate(700%) hue-rotate(346deg) brightness(95%) contrast(90%)"
    }}
  />
</div>

                                <h2>10</h2>
                                <h4>Business Years</h4>
                                <p>A coffee shop is a small business that sells coffee, pastries, and other morning
                                    goods. There are many different types of coffee shops around the world.</p>
                            </div>
                        </div>

                        <div>
                            <div class="clint-contain">
                                <div class="client-icon">
                                    <img src="../assets/svg/3/buy.svg" class="blur-up lazyload" alt="img"     style={{
      filter:
        "brightness(0) saturate(100%) invert(39%) sepia(54%) saturate(700%) hue-rotate(346deg) brightness(95%) contrast(90%)"
    }}/>
                                </div>
                                <h2>80 K+</h2>
                                <h4>Products Sales</h4>
                                <p>Some coffee shops have a seating area, while some just have a spot to order and then
                                    go somewhere else to sit down. The coffee shop that I am going to.</p>
                            </div>
                        </div>

                        <div>
                            <div class="clint-contain">
                                <div class="client-icon">
                                    <img src="../assets/svg/3/user.svg" class="blur-up lazyload" alt="img"     style={{
      filter:
        "brightness(0) saturate(100%) invert(39%) sepia(54%) saturate(700%) hue-rotate(346deg) brightness(95%) contrast(90%)"
    }}/>
                                </div>
                                <h2>90%</h2>
                                <h4>Happy Customers</h4>
                                <p>My goal for this coffee shop is to be able to get a coffee and get on with my day.
                                    It's a Thursday morning and I am rushing between meetings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     <section class="team-section section-lg-space">
        <div class="container-fluid-lg">
            <div class="about-us-title text-center">
                <h4 class="text-content">Our Creative Team</h4>
                <h2 class="center">Evercore team member</h2>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="slider-user product-wrapper">
                        <div>
                            <div class="team-box">
                                <div class="team-image">
                                    <img src="/assets/images/user.png" class="img-fluid blur-up lazyload"
                                        alt="img" />
                                </div>

                                <div class="team-name">
                                    <h3>Rahul Patel</h3>
                                    <h5>Founder & CEO</h5>
                                    <p>Leading Evercore with passion, ensuring premium protein products for every fitness enthusiast.</p>
                                    <ul class="team-media">
                                        <li>
                                            <a href="https://www.facebook.com/" class="fb-bg">
                                                <i class="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        

                                        <li>
                                            <a href="https://twitter.com/" class="twitter-bg">
                                                <i class="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.instagram.com/" class="insta-bg">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="team-box">
                                <div class="team-image">
                                    <img src="/assets/images/user.png" class="img-fluid blur-up lazyload"
                                        alt="img" />
                                </div>

                                <div class="team-name">
                                    <h3>Mahek Shah</h3>
                                    <h5>Product Research Head</h5>
                                    <p>Develops science-based formulas to deliver pure, effective, and result-driven nutrition supplements.</p>
                                    <ul class="team-media">
                                        <li>
                                            <a href="https://www.facebook.com/" class="fb-bg">
                                                <i class="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        

                                        <li>
                                            <a href="https://twitter.com/" class="twitter-bg">
                                                <i class="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.instagram.com/" class="insta-bg">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="team-box">
                                <div class="team-image">
                                    <img src="/assets/images/user.png" class="img-fluid blur-up lazyload"
                                        alt="img" />
                                </div>

                                <div class="team-name">
                                    <h3>Mahesh Patel</h3>
                                   <h5>Creative Lead</h5>
                                    <p>Creates bold branding, strong visuals, and inspiring campaigns for Evercore’s fitness vision.</p>
                                    <ul class="team-media">
                                        <li>
                                            <a href="https://www.facebook.com/" class="fb-bg">
                                                <i class="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        

                                        <li>
                                            <a href="https://twitter.com/" class="twitter-bg">
                                                <i class="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.instagram.com/" class="insta-bg">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="team-box">
                                <div class="team-image">
                                    <img src="/assets/images/user.png" class="img-fluid blur-up lazyload"
                                        alt="img" />
                                </div>

                                <div class="team-name">
                                    <h3>Laksh Agraval</h3>
                                    <h5>Quality Manager</h5>
                                    <p>Maintains strict quality checks, ensuring every product meets trusted safety and purity standards.</p>
                                    <ul class="team-media">
                                        <li>
                                            <a href="https://www.facebook.com/" class="fb-bg">
                                                <i class="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>

                                       

                                        <li>
                                            <a href="https://twitter.com/" class="twitter-bg">
                                                <i class="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.instagram.com/" class="insta-bg">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="team-box">
                                <div class="team-image">
                                    <img src="/assets/images/user.png" class="img-fluid blur-up lazyload"
                                        alt="img" />
                                </div>

                                <div class="team-name">
                                    <h3>Kishan Varma</h3>
                                   <h5>Customer Success Manager</h5>
                                    <p>Guides customers, offering support and helping them choose perfect supplements for their goals.</p>
                                    <ul class="team-media">
                                        <li>
                                            <a href="https://www.facebook.com/" class="fb-bg">
                                                <i class="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>


                                        <li>
                                            <a href="https://twitter.com/" class="twitter-bg">
                                                <i class="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.instagram.com/" class="insta-bg">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* <!-- Review Section Start --> */}
    <section class="review-section section-lg-space">
        <div class="container-fluid">
            <div class="about-us-title text-center">
                <h4 class="text-content">Latest Testimonials</h4>
                <h2 class="center">What people say</h2>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="slider-4-half product-wrapper">
                        <div>
                            <div class="reviewer-box">
                                <i class="fa-solid fa-quote-right"></i>
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
                                </div>

                                <h3>Amazing Protein Quality</h3>

                                <p>"Evercore protein tastes great, mixes smoothly, and gives fast recovery results."</p>

                                <div class="reviewer-profile">
                                    <div class="reviewer-image">
                                        <img src="/assets/images/user.png" class="blur-up lazyload"
                                            alt="img" />
                                    </div>

                                    <div class="reviewer-name">
                                        <h4>Rohan Sharma</h4>
                                        <h6>Fitness Enthusiast</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="reviewer-box">
                                <i class="fa-solid fa-quote-right"></i>
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
                                </div>

                               <h3>Best Supplement Experience</h3>

                                <p>"I feel more energetic and focused during workouts after switching to Evercore."</p>
                                <div class="reviewer-profile">
                                    <div class="reviewer-image">
                                        <img src="/assets/images/user.png" class="blur-up lazyload"
                                            alt="img" />
                                    </div>

                                    <div class="reviewer-name">
                                        <h4>Neha Patel</h4>
                                        <h6>Gym Trainer</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="reviewer-box">
                                <i class="fa-solid fa-quote-right"></i>
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
                                </div>

                                <h3>Super Clean Formula</h3>
<p>"No bloating, no heaviness — Evercore protein is clean and very effective."</p>
                                <div class="reviewer-profile">
                                    <div class="reviewer-image">
                                        <img src="/assets/images/user.png" class="blur-up lazyload"
                                            alt="img" />
                                    </div>

                                    <div class="reviewer-name">
                                       <h4>Arjun Verma</h4>
<h6>Athlete</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="reviewer-box">
                                <i class="fa-solid fa-quote-right"></i>
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
                                </div>

                                <h3>Great Taste & Results</h3>
<p>"The flavor is perfect and results are visible within weeks of regular use."</p>
                                <div class="reviewer-profile">
                                    <div class="reviewer-image">
                                        <img src="/assets/images/user.png" class="blur-up lazyload"
                                            alt=" " />
                                    </div>

                                    <div class="reviewer-name">
<h4>Simran Kaur</h4>
<h6>Nutrition Coach</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="reviewer-box">
                                <i class="fa-solid fa-quote-right"></i>
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
                                </div>

                               <h3>High Performance Protein</h3>
<p>"Evercore helped improve my strength and stamina without any side effects."</p>
                                <div class="reviewer-profile">
                                    <div class="reviewer-image">
                                        <img src="/assets/images/user.png" class="blur-up lazyload"
                                            alt="img" />
                                    </div>

                                    <div class="reviewer-name">
                                      <h4>Vivek Pandya</h4>
<h6>Fitness Model</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="reviewer-box">
                                <i class="fa-solid fa-quote-right"></i>
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
                                </div>
<h3>Value for Money</h3>
<p>"Premium-quality protein at a reasonable price. Totally worth it for daily use."</p>

                                <div class="reviewer-profile">
                                    <div class="reviewer-image">
                                        <img src="/assets/images/user.png" class="blur-up lazyload"
                                            alt="img" />
                                    </div>

                                    <div class="reviewer-name">
                                       <h4>Mitali Desai</h4>
<h6>Customer</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="reviewer-box">
                                <i class="fa-solid fa-quote-right"></i>
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
                                </div>

                               <h3>Best Choice So Far</h3>
<p>"I switched from other brands to Evercore — the improvement is unbelievable."</p>
                                <div class="reviewer-profile">
                                    <div class="reviewer-image">
                                        <img src="/assets/images/user.png" class="blur-up lazyload"
                                            alt="img" />
                                    </div>

                                    <div class="reviewer-name">
                                     <h4>Karan Singh</h4>
<h6>Bodybuilder</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="reviewer-box">
                                <i class="fa-solid fa-quote-right"></i>
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
                                </div>
<h3>Excellent Digestion</h3>
<p>"Light on the stomach and easy to digest. Highly recommended protein powder."</p>
                                <div class="reviewer-profile">
                                    <div class="reviewer-image">
                                        <img src="/assets/images/user.png" class="blur-up lazyload"
                                            alt="img" />
                                    </div>

                                    <div class="reviewer-name">
<h4>Ayesha Khan</h4>
<h6>Wellness Coach</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Review Section End --> */}

  
       <Footer />
    </>
  )
}

export default Aboutus