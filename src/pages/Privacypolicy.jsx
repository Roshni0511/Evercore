import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Privacypolicy = ({
  companyName = "MD Mart",
  effectiveDate = "November 10, 2025",
}) => {
  return (
    <>
      <Navbar />

  

      {/* Breadcrumb */}
  <section class="breadcrumb-section pt-0">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb-contain">
                        <h2>Privacy Policy</h2>
                        <nav>
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item">
                                    <a href="/">
                                        <i class="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li class="breadcrumb-item active">Privacy Policy</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <div className="pp2-wrapper">

        {[
          {
            title: "1. Information We Collect",
            content: [
              "Personal details such as your name, phone number, email and address.",
              "Information automatically collected, including device details and IP address.",
              "Data received through third-party integrations such as payment systems.",
            ],
          },
          {
            title: "2. How We Use Your Information",
            content: [
              "To process orders and deliver services.",
              "To improve website performance and user experience.",
              "To detect and prevent fraudulent activity.",
            ],
          },
          {
            title: "3. Data Sharing",
            text: "We do not sell your personal information. Data is shared only with trusted service providers or when required by law.",
          },
          {
            title: "4. Cookies & Tracking",
            text: "Cookies help enhance your experience. You may disable them anytime in browser settings.",
          },
          {
            title: "5. Security Measures",
            text: "We implement strong security practices but no method is completely foolproof.",
          },
          {
            title: "6. Your Rights",
            text: "You may request access, correction or deletion of your personal information.",
          },
          {
            title: "7. Updates to this Policy",
            text: "We may revise this policy occasionally. Updated versions will be posted here.",
          },
        ].map((sec, i) => (
          <section className="pp2-card" key={i}>
            <h2>{sec.title}</h2>

            {sec.text && <p>{sec.text}</p>}

            {sec.content && (
              <ul>
                {sec.content.map((c, index) => (
                  <li key={index}>{c}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Contact */}
        <section className="pp2-card">
          <h2>8. Contact Us</h2>
          <p>
            For questions about this Privacy Policy, contact:
          </p>
          <p>
            <strong>{companyName}</strong> <br />
            Email:{" "}
            <a href="mailto:mdmart.superstore@gmail.com">
              mdmart.superstore@gmail.com
            </a>
          </p>
        </section>

      </div>


      <Footer />
    </>
  );
};

export default Privacypolicy;
