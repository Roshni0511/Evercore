import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ProteinCerti() {
  return (
    <>
      <Navbar />
      <section class="lab-hero">
    <div class="overlay"></div>
    <div class="hero-content">
        <img src="lab-icon.png" class="hero-icon" />
        <h1>PROTEIN QUALITY VERIFIED</h1>
        <p>Your product is tested in certified laboratories</p>
    </div>
</section>

<section class="lab-info-box">
    <div class="info-card">
        <h2>Certified Lab Report</h2>
        <p class="desc">
            Each batch undergoes strict laboratory testing to ensure accurate 
            nutritional values. Tested results may vary by (±5%) from declared values.
        </p>

        <div class="info-features">
            <div class="feature">
                <i class="fa-solid fa-shield-check"></i>
                <span>Authenticity Approved</span>
            </div>
            <div class="feature">
                <i class="fa-solid fa-flask"></i>
                <span>Lab Tested</span>
            </div>
            <div class="feature">
                <i class="fa-solid fa-earth-americas"></i>
                <span>Sourced Responsibly</span>
            </div>
        </div>
    </div>
</section>

<section class="search-section">
    <div class="search-box">
        <input type="text" placeholder="Enter Batch Number... e.g: AWPFCF165" />
        <button>Search</button>
    </div>
</section>

<section class="report-table">
    <table>
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
                <td>86.09g / 100g <a href="#">View Report</a></td>
            </tr>
            <tr>
                <td>06/09/2020</td>
                <td>AWPFCF0294</td>
                <td>Whey Performance 2.2 lb Chocolate</td>
                <td>70.21g / 100g <a href="#">View Report</a></td>
            </tr>
        </tbody>
    </table>
</section>

      <Footer />
    </>
  )
}
