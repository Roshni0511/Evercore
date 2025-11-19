import React from 'react'
import Navbar from './Navbar'
// import Navbar from './Navbar'
// import Footer from './Footer'

const Faq = () => {
  return (
    <>
   <Navbar/>

    {/* <!-- Faq Section Start --> */}
    <section class="faq-box-contain section-b-space">
        <div class="container">
            <div class="row">
                <div class="col-xl-5">
                    <div class="faq-contain">
                        <h2>Frequently Asked Questions</h2>
                        <p>We are answering most frequent questions. No worries if you not find exact one. You can contact us and ask.</p>
                        <div class="Protein-faq">
                            <img src="/assets/images/Protein-Faq.jpg" alt="Protein FAQ illustration"></img>
                        </div>
                    </div>
                </div>
                


                <div class="col-xl-7">
                    <div class="faq-accordion">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne">
                                        What is Evercode and what do we offer? <i
                                            class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            <strong>Evercode</strong> is a premium fitness nutrition brand dedicated to helping athletes, gym enthusiasts, and everyday health-seekers achieve their goals. We offer high-quality protein powders, pre-workouts, BCAAs, mass gainers, vitamins, and performance supplements formulated for maximum results and safety.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo">
                                         Which protein is best for beginners? <i
                                            class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                         <p>
                                            For beginners, Evercode Whey Protein is ideal because it’s easy to digest, supports muscle recovery, and helps build lean muscle mass. It can be used pre- or post-workout and even as a meal supplement.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree">
                                      How do I choose the right protein for my fitness goal? <i class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                         <ul>
                                            <li><strong>Weight Loss / Lean Muscle:</strong> Whey Protein Isolate</li><br/>
                                            <li><strong>Muscle Gain:</strong> Whey Protein Concentrate or Mass Gainer</li><br/>
                                            <li><strong>Endurance & Recovery:</strong> BCAA or EAA</li><br/>
                                            <li><strong>Energy & Strength:</strong> Pre-Workout Formula</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour">
                                        How long does delivery take? <i class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Orders are usually delivered within 2–5 business days, depending on your location. You will receive real-time tracking updates after your purchase.  </p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive">
                                        What is your return or refund policy? <i class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p> We offer a hassle-free return and replacement policy for damaged, incorrect, or sealed-pack products. Simply contact our support team within the return window.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingSix">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix">
                                        How can I contact Evercode customer support? <i
                                            class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>You can reach our support team through email, phone, or live chat on our website. We’re available to help with orders, product guidance, or any other queries.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingSeven">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven">
                                        Do Evercode products help with weight loss? <i
                                        class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseSeven" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Yes. Supplements like Whey Protein Isolate, L-Carnitine, and Fat Burners can support fat loss by boosting metabolism, reducing cravings, and preserving lean muscle.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingEight">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseEight">
                                         Do you ship internationally? <i
                                            class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseEight" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Yes, Evercode provides international shipping to selected countries. Shipping availability may vary by region.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingNine">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseNine">
                                        How do I store Evercode supplements? <i class="fa-solid fa-angle-down"></i>
                                    </button>
                                </h2>
                                <div id="collapseNine" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Store in a cool, dry place away from sunlight.
Ensure the container is tightly sealed to maintain freshness.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Faq Section End --> */}
    {/* <Footer /> */}
    </>
  )
}

export default Faq