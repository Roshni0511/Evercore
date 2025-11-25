import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ProteinCerti() {
  return (
    <>
      <Navbar />
      <section class="lab-hero" style={{backgroundImage:"url(https://m.media-amazon.com/images/S/aplus-media-library-service-media/cae63ca0-3469-411f-b299-62c245625702.__CR0,0,970,300_PT0_SX970_V1___.jpg)",padding:'0px'}}> 
    <div class="overlay"></div>
    <div class="hero-content" >
        {/* <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/cae63ca0-3469-411f-b299-62c245625702.__CR0,0,970,300_PT0_SX970_V1___.jpg" class="hero-icon" /> */}
        <h1>PROTEIN QUALITY VERIFIED</h1>
        <p>Your product is tested in certified laboratories</p>
    </div>
</section>

<section class="lab-info-box">
    <div class="info-card new-style">
        <h2>Certified Lab Report</h2>
        <p class="desc">
            Every batch is tested for purity, quality, and nutritional accuracy.
            Report values may vary (±5%) depending on testing conditions.
        </p>

        <div class="new-features">
            <div class="new-feature">
                <div class="icon-circle">
                   <i class="fa-solid fa-shield-alt"></i>

                </div>
                <h5>Authenticity Verified</h5>
                <p>Guaranteed genuine & certified quality.</p>
            </div>

            <div class="new-feature">
                <div class="icon-circle">
                    <i class="fa-solid fa-flask"></i>

                </div>
                <h5>Lab Tested</h5>
                <p>Each batch tested for protein purity.</p>
            </div>

            <div class="new-feature">
                <div class="icon-circle">
                    <i class="fa-solid fa-leaf"></i>
                </div>
                <h5>Clean Sourcing</h5>
                <p>Ingredients sourced responsibly.</p>
            </div>
        </div>
    </div>
</section>


<section class="search-section">
    <div class="search-box1">
        <input type="text" placeholder="Enter Batch Number... e.g: AWPFCF165" />
        <button>Search</button>
    </div>
</section>

<div className="container">
    <section class="report-table-section">
    <div class="report-table-box">
        <table class="report-table">
            <thead>
                <tr>
                    <th>Date of Manufacturing</th>
                    <th>Batch Number</th>
                    <th>Product</th>
                    <th>Protein Content</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>06/09/2020</td>
                    <td>AIZDVF0050</td>
                    <td>Iso-Zero, 4.4 lb Dutch Vanilla</td>
                    <td>86.09g / 100g <a href="#" class="view-btn">View Report</a></td>
                </tr>
                <tr>
                    <td>06/09/2020</td>
                    <td>AWPFCF0294</td>
                    <td>Whey Performance 2.2 lb Chocolate</td>
                    <td>70.21g / 100g <a href="#" class="view-btn">View Report</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
</div>


      <Footer />
    </>
  )
}
