import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Labdoor = () => {
  return (
    <>
      <Navbar />

      {/* HERO BANNER */}
      <section>
        <img
          src="../assets/images/grocery/banner/1.jpg"
          alt=""
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover"
          }}
        />
      </section>

      {/* TOP BANNER */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "70px 20px",
          textAlign: "center",
          color: "#333"
        }}
      >
        <div className="container">
          <h1 style={{ fontWeight: 700, fontSize: "40px", color: "#c25f31" }}>
            Trusted Protein Quality You Can Count On
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
          padding: "80px 20px",
          backgroundColor: "#ffffff",
          color: "#333"
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            <div className="col-6">
              <img
                src="protein-bottle.png"
                alt="Protein Supplement"
                style={{ width: "100%", maxWidth: "420px" }}
              />
            </div>

            <div className="col-6">
              <h2 style={{ fontSize: "32px", fontWeight: 700 }}>
                Why choosing the right supplement matters
              </h2>

              <div
                style={{
                  width: "60px",
                  height: "4px",
                  backgroundColor: "#c25f31",
                  margin: "15px 0"
                }}
              ></div>

              <ul style={{ listStyle: "none", padding: 0, fontSize: "18px", color: "#666" }}>
                <li>✔ Guaranteed purity & accurate nutrition</li>
                <li>✔ No duplicate or low-quality ingredients</li>
                <li>✔ Helps you meet fitness goals safely</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DANGER SECTION */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#ffffff",
          color: "#333",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "34px", fontWeight: 700, color: "#c25f31" }}>
          Common Issues with Unverified Supplements
        </h2>
        <p style={{ color: "#666", marginTop: "10px" }}>
          These dangers can affect your results & health.
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
            "Inaccurate protein or ingredient values",
            "Harmful or banned substances mixed inside",
            "Protein spiking to fake higher content",
            "Low-quality or contaminated raw material",
            "Risk of duplicate or fake products"
          ].map((text, i) => (
            <div
              key={i}
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
        style={{
          padding: "80px 20px",
          backgroundColor: "#ffffff",
          color: "#333"
        }}
      >
        <div className="container" style={{justifyContent:'center',display:'flex'}}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "12px",
              border: "1px solid #e2e2e2",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              width:'500px'
            }}
          >
            <h3
              style={{
                textAlign: "center",
                fontSize: "28px",
                fontWeight: 700,
                color: "#c25f31"
              }}
            >
              What are your biggest concerns<br />when choosing a Protein supplement?
            </h3>

            <div
              style={{
                marginTop: "30px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "18px",
                color: "#555"
              }}
            >
              <label><input type="checkbox" /> Protein quality & purity</label>
              <label><input type="checkbox" /> No harmful or banned substances</label>
              <label><input type="checkbox" /> Authentic & certified product</label>
              <label><input type="checkbox" /> Transparent label values</label>
            </div>

            <button
              style={{
                marginTop: "30px",
                backgroundColor: "#c25f31",
                padding: "14px 25px",
                borderRadius: "6px",
                border: "none",
                fontWeight: "700",
                width: "100%",
                color: "white"
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT NUTRICHECK */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#ffffff",
          color: "#333"
        }}
      >
        <div className="container">
          <h4 style={{ color: "#c25f31" }}>Who is NutriCheck™?</h4>
          <p style={{ color: "#666" }}>
            NutriCheck™ is a trusted independent testing body…
          </p>

          <h4 style={{ color: "#c25f31" }}>How does NutriCheck™ evaluate supplements?</h4>
          <p style={{ color: "#666" }}>
            We conduct chemical, microbiological & nutritional tests…
          </p>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section
        style={{
          backgroundColor: "#ffffff",
          color: "#333",
          padding: "100px 20px"
        }}
      >
        <div className="container">
          <div className="row">

            <div className="col-6">
              <div
                style={{
                  width: "60px",
                  height: "4px",
                  backgroundColor: "#c25f31"
                }}
              ></div>

              <h1
                style={{
                  fontSize: "52px",
                  fontWeight: 800,
                  marginTop: "20px",
                  color: "#c25f31"
                }}
              >
                BIOZYME <br /> PERFORMANCE <br /> WHEY
              </h1>

              <ul style={{ marginTop: "20px", fontSize: "18px", color: "#666" }}>
                <li>✔ 100% Whey Concentrate</li>
                <li>✔ Patented EAF Formula</li>
                <li>✔ Better digestion & absorption</li>
                <li>✔ Available in 10+ flavors</li>
              </ul>

              {/* Nutrition */}
              <div
                style={{
                  marginTop: "30px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "15px"
                }}
              >
                <div>
                  <p>Energy: <b>140.94 kcal</b></p>
                  <p>Protein: <b>25g</b></p>
                  <p>Carbs: <b>5.58g</b></p>
                  <p>Fat: <b>1.98g</b></p>
                </div>
                <div>
                  <p>EAA: <b>11.75g</b></p>
                  <p>Semi-EAA: <b>3.80g</b></p>
                  <p>NEAA: <b>9.45g</b></p>
                </div>
              </div>

              {/* Buttons */}
              <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
                <button
                  style={{
                    backgroundColor: "#c25f31",
                    padding: "12px 24px",
                    borderRadius: "6px",
                    fontWeight: 600,
                    border: "none",
                    color: "white"
                  }}
                >
                  SHOP NOW
                </button>

                <button
                  style={{
                    border: "2px solid #c25f31",
                    padding: "12px 24px",
                    borderRadius: "6px",
                    fontWeight: 600,
                    background: "transparent",
                    color: "#c25f31"
                  }}
                >
                  VISIT ON LABDOOR
                </button>
              </div>
            </div>

            <div className="col-6" style={{ textAlign: "center" }}>
              <img
                src="/protein.png"
                alt="Product"
                style={{
                  width: "460px",
                  filter: "drop-shadow(0px 4px 25px rgba(0,0,0,0.15))"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Labdoor
