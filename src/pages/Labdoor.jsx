import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Labdoor = () => {
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
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Home Section End --> */}
       <section class="top-banner">
        <div className='container'> 

  <div class="banner-content">
    <h1>Trusted Protein Quality You Can Count On</h1>
    <p>
      Every product is tested for purity, safety, and nutritional accuracy to ensure
      you get only the best for your fitness journey.
    </p>
  </div>
        </div>
</section>

<section class="quality-block">
  <div class="quality-container">
<div className="col-12">
    <div className="row">
        <div className="col-6">
   <div class="qb-left">
      <img src="protein-bottle.png" alt="Protein Supplement" />
    </div>
        </div>
        <div className="col-6">
 <div class="qb-right">
      <h2>Why choosing the right supplement matters</h2>
      <div class="line"></div>

      <ul class="points">
        <li><span>✔</span> Guaranteed purity & accurate nutrition</li>
        <li><span>✔</span> No duplicate or low-quality ingredients</li>
        <li><span>✔</span> Ensures you meet your fitness goals safely</li>
      </ul>
    </div>

        </div>
    </div>
</div>
 

   
  </div>
</section>

<section class="danger-sec">
  <div class="danger-title">
    <h2>Common Issues with Unverified Supplements</h2>
    <p>These dangers can impact your performance, health, and results.</p>
  </div>

  <div class="danger-grid">

    <div class="danger-box" style={{fontSize:'18px',marginBottom:'5px'}}>
      <i class="icon" style={{marginRight:'7px'}}>⚠</i>
      Inaccurate protein or ingredient values
    </div>

    <div class="danger-box" style={{fontSize:'18px',marginBottom:'5px'}}>
      <i class="icon" style={{marginRight:'7px'}}>⚠</i>
      Harmful or banned substances mixed inside
    </div>

    <div class="danger-box" style={{fontSize:'18px',marginBottom:'5px'}}>
      <i class="icon" style={{marginRight:'7px'}}>⚠</i>
      Protein spiking to fake higher protein content
    </div>

    <div class="danger-box" style={{fontSize:'18px',marginBottom:'5px'}}>
      <i class="icon" style={{marginRight:'7px'}}>⚠</i>
      Low-quality or contaminated raw material
    </div>

    <div class="danger-box" style={{fontSize:'18px',marginBottom:'5px'}}>
      <i class="icon" style={{marginRight:'7px'}}>⚠</i>
      Risk of duplicate or fake products
    </div>

  </div>
</section>

<section class="protein-section">
  <div class="container">

    {/* <!-- Question Box --> */}
    <div class="question-box">
      <h3>What according to you are the most common concerns<br />when choosing a Protein supplement?</h3>

      <div class="checkbox-group">
        <label><input type="checkbox" /> Protein quality and purity</label>
        <label><input type="checkbox" /> No harmful or banned substances</label>
        <label><input type="checkbox" /> Authentic & certified product</label>
        <label><input type="checkbox" /> Accurate and transparent label</label>
      </div>

      <button class="submit-btn">SUBMIT</button>
    </div>
  </div>
</section>


{/* <!-- About NutriCheck --> */}
<section class="about-section">
  <div class="container">
    <h4>Who is NutriCheck™?</h4>
    <p>
      NutriCheck™ is an internationally trusted independent testing body that evaluates
      the quality, safety, and authenticity of health supplements. Our mission is to make
      sure every consumer gets a product that delivers exactly what it promises.
    </p>

    <h4>How does NutriCheck™ evaluate supplements?</h4>
    <p>
      We conduct advanced chemical, microbiological and nutritional tests to ensure:
      <br />• The protein amount is accurate
      <br />• No harmful/banned substances are present
      <br />• Label claims match the real product composition
    </p>

    <h4>NutriCheck™ Testing & Scoring Process</h4>
    
    <h5>Purity</h5>
    <p>
      We check if the product contains only what is claimed, with no fillers or adulteration.
    </p>

    <h5>Accuracy</h5>
    <p>
      We verify if the nutritional values match what’s printed on the product label.
    </p>

    <h5>Safety</h5>
    <p>
      Ensures zero presence of harmful chemicals, heavy metals, or banned ingredients.
    </p>

    <p>
      After full testing, NutriCheck™ issues a detailed report and certifies only the safest
      and highest-quality supplements with the “NutriCheck™ Certified” badge.
    </p>

  </div>
</section>


       <Footer />
    </>
  )
}

export default Labdoor
