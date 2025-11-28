import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Labdoor = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animate only once
      disable: window.innerWidth < 768,
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO BANNER */}
      <section data-aos="zoom-in" style={{paddingTop:'0px'}}>
        <img
          src="/assets/images/bulk2.jpg"
          alt="img"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover"
          }}
        />
      </section>

      {/* TOP BANNER */}
      <section
        data-aos="fade-up"
        style={{
          backgroundColor: "#ffffff",
          padding: "70px 20px",
          textAlign: "center",
          color: "#333"
        }}
      >
        <div className="container">
          <h1 style={{ fontWeight: 700, fontSize: "40px", color: "#000" }}>
           Project Protein – Premium Quality, Guaranteed Purity
          </h1>
          <p
            style={{
              marginTop: "15px",
              fontSize: "18px",
              color: "#666",
              maxWidth: "800px",
              marginInline: "auto"
            }}
          >
            Every product is tested for purity, safety, and nutritional accuracy.
          </p>
        </div>
      </section>

      {/* WHY QUALITY MATTERS */}
      <section
        style={{
          padding: "0px 20px",
          backgroundColor: "#ffffff",
          color: "#333"
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            <div className="col-12 col-md-6 mb-4 mb-md-0 fresh-image-2" data-aos="fade-right">
              <img
                src="/assets/images/prd_3977707-MuscleBlaze.webp"
              alt="Fresh Image"
              className="resimg"
                style={{ width: "100%", maxWidth: "500px" }}
              />
            </div>

            <div className="col-12 col-md-6" data-aos="fade-left">
              <h2 style={{ fontSize: "32px", fontWeight: 700 }}>
                Why Protein is the Right Choice for You
              </h2>

              <div
                style={{
                  width: "60px",
                  height: "4px",
                  backgroundColor: "#0d6efd",
                  margin: "15px 0"
                }}
              ></div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  fontSize: "18px",
                  color: "#666",
                  lineHeight: "30px"
                }}
              >
                <li style={{ fontSize: '17px' }}>✔ 100% purity & accurate protein profile</li><br />
                <li style={{ fontSize: '17px' }}>✔ Lab-tested for safety & genuine ingredients</li><br />
                <li style={{ fontSize: '17px' }}>✔ No duplicate, no fillers — only real nutrition</li><br />
                <li style={{ fontSize: '17px' }}>✔ Supports faster muscle recovery & strength</li><br />
                <li style={{ fontSize: '17px' }}>✔ Trusted quality you can rely on for fitness results</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* DANGER SECTION */}
      <section
        data-aos="fade-up"
        style={{
          padding: "100px 20px",
          backgroundColor: "#ffffff",
          color: "#333",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "34px", fontWeight: 700, color: "#000" }}>
          The Risks of Using Non-Verified Supplements
        </h2>

        <p style={{ color: "#666", marginTop: "10px" }}>
          Project Protein warns you against these common dangers.
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "40px",
            gridTemplateColumns: "repeat(2, 1fr)",
            maxWidth: "900px",
            marginInline: "auto"
          }}
        >
          {[
            "Inaccurate nutrition labels that mislead your progress",
            "Presence of harmful, banned, or unknown substances",
            "Protein spiking that fakes higher protein content",
            "Low-grade or contaminated raw materials",
            "High chances of duplicate or fake market products"
          ].map((text, i) => (
            <div
              key={i}
              data-aos="fade-up"
              style={{
                backgroundColor: "#fff",
                padding: "18px",
                borderRadius: "10px",
                fontSize: "18px",
                color: "#333",
                border: "1px solid #e2e2e2",
                boxShadow: "0 4px 10px rgba(0,0,0,0.07)"
              }}
            >
              ⚠ &nbsp; {text}
            </div>
          ))}
        </div>
      </section>

      {/* QUESTION BOX */}
     <section
  data-aos="fade-up"
  style={{
    padding: "60px 20px",
    backgroundColor: "rgb(220 234 255)",
    color: "#333"
  }}
>
  <div className="container">
    <div className="row align-items-start">

      {/* LEFT SIDE CARD */}
      <div className="col-12 col-md-6 mb-4" data-aos="fade-right">
        <div
          style={{
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "12px",
            border: "1px solid #e2e2e2",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            width: "100%",              // 🔥 FULL responsive
            maxWidth: "520px",          // 🔥 Desktop limit
            margin: "0 auto"            // center on mobile
          }}
        >
          <h3
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: 700,
              color: "#000",
              lineHeight: "32px"
            }}
            data-aos="fade-down"
          >
            What Concerns Do You Have <br /> Before Buying a Protein Supplement?
          </h3>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginTop: "8px",
              fontSize: "15px"
            }}
            data-aos="fade-up"
          >
            Tell us what matters most so Project Protein can guide you better.
          </p>

          <div
            style={{
              marginTop: "25px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              color: "#555",
              fontSize: "16px"
            }}
            data-aos="fade-up"
          >
            <label><input type="checkbox" /> Pure & lab-tested protein quality</label>
            <label><input type="checkbox" /> Zero harmful or banned substances</label>
            <label><input type="checkbox" /> Genuine, certified & non-duplicate</label>
            <label><input type="checkbox" /> Transparent and accurate label values</label>
          </div>

          <button
            style={{
              marginTop: "25px",
              backgroundColor: "#0d6efd",
              padding: "12px 20px",
              borderRadius: "6px",
              border: "none",
              fontWeight: 700,
              width: "100%",
              color: "#fff",
              cursor: "pointer",
              fontSize: "16px"
            }}
            data-aos="zoom-in"
          >
            SUBMIT
          </button>
        </div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="col-12 col-md-6" data-aos="fade-left">
        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>

          <h4 style={{ color: "#000", fontWeight: 700 }}>Who is NutriCheck™?</h4>
          <p style={{ color: "#666", marginTop: "6px" }}>
            NutriCheck™ is a trusted third-party lab that verifies supplement safety, purity, and nutritional accuracy.
          </p>

          <h4 style={{ color: "#000", marginTop: "25px", fontWeight: 700 }}>How does NutriCheck™ evaluate supplements?</h4>
          <p style={{ color: "#666", marginTop: "6px" }}>
            Each product is tested for chemical composition, microbes, and nutritional content to ensure authenticity and accuracy.
          </p>

          <h4 style={{ color: "#000", marginTop: "25px", fontWeight: 700 }}>Why is third-party testing important?</h4>
          <p style={{ color: "#666", marginTop: "6px" }}>
            It prevents misleading labels, detects contaminants, and ensures the product is safe and effective.
          </p>

          <h4 style={{ color: "#000", marginTop: "25px", fontWeight: 700 }}>What does NutriCheck™ look for during testing?</h4>
          <p style={{ color: "#666", marginTop: "6px" }}>
            NutriCheck™ checks protein content, amino acids, banned substances, heavy metals, and overall ingredient authenticity.
          </p>

          <h4 style={{ color: "#000", marginTop: "25px", fontWeight: 700 }}>Why does Project Protein choose NutriCheck™?</h4>
          <p style={{ color: "#666", marginTop: "6px" }}>
            Because it delivers unbiased testing and transparent results that consumers can trust.
          </p>

          <h4 style={{ color: "#000", marginTop: "25px", fontWeight: 700 }}>Do all batches get tested?</h4>
          <p style={{ color: "#666", marginTop: "6px" }}>
            Yes. Every batch is tested to ensure consistent purity, potency, and nutritional value.
          </p>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* ABOUT NUTRICHECK */}


      {/* PRODUCT SECTION */}
      <section
        data-aos="fade-up"
        style={{
          backgroundColor: "#ffffff",
          color: "#333",
          padding: "100px 20px"
        }}
      >
        <div className="container">
          <div className="row">

            <div className="col-12 col-md-6 mb-4 mb-md-0" data-aos="fade-right">
              <div style={{ width: "60px", height: "4px", backgroundColor: "#0d6efd" }}></div>

              <h3
                style={{
                  // fontSize: "52px",
                  fontWeight: 800,
                  marginTop: "20px",
                  color: "#000",
                  lineHeight: "62px"
                }}
              >
                PROJECT PROTEIN PERFORMANCE WHEY
              </h3>
              <div className="col-12">
                <div className="row">
                  <div className="col-6">
      <ul style={{ marginTop: "20px", fontSize: "18px", color: "#666", lineHeight: "30px" }}>
                <li>✔ Clean & Verified Whey Protein</li><br />
                <li>✔ Enhanced Absorption Formula</li><br />
                <li>✔ Superior digestion & bioavailability</li><br />
                <li>✔ Available in 10+ delicious flavors</li>
              </ul>
                  </div>
                  <div className="col-6">
                    <div style={{ marginTop: "30px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" }}>
                <div style={{ color: "#444", fontSize: "16px" }}>
                  <p>Energy: <b style={{color:"#000"}}>140.94 kcal</b></p>
                  <p>Protein: <b style={{color:"#000"}}>25g</b></p>
                  <p>Carbs: <b style={{color:"#000"}}>5.58g</b></p>
                  <p>Fat: <b style={{color:"#000"}}>1.98g</b></p>
                </div>
           
                  </div>
               
                  </div>
                </div>
              </div>

        

              

              <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
                <a href="/Shop">
                <button
             
                  className='pro-acc-logout-btn '
                >
                  SHOP NOW
                </button>
                </a>

          
              </div>
            </div>

            <div className="col-12 col-md-6" data-aos="fade-left" style={{ textAlign: "center" }}>
              <img
                src="	https://mynutramart.com/cdn/shop/files/AS-IT-ISL-GlutaminePowder250gSlide1_500x.jpg?v=1706529144"
                  alt="Fresh Image"
                                  className="resimg"
                style={{
                  width: "100%",
                  maxWidth:'460px'
                
                }}
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Labdoor;
