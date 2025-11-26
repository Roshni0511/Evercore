import React, { useState, useEffect } from "react";

export default function Bulkorder_Form() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    Firm:"",
    address:"",
    GST:"",
    Landline:"",
    phone: "",
    whatsApp:"",
    sales: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!form.email.trim())
      newErrors.email = "Please enter a valid email address";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }
    if (!form.name.trim()) newErrors.name = "Please enter your full name";
    if (!form.Firm.trim()) newErrors.Firm = "Please enter Firm";
    if (!form.address.trim()) newErrors.address = "Please enter address";
    if (!form.phone.trim()) newErrors.phone = "Please enter Valid Mobile Number";
    if (!form.whatsApp.trim()) newErrors.whatsApp = "Please enter Valid WhatsApp Number";
    if (!form.sales.trim()) newErrors.sales = "Please enter Supplement Sales Per Month";

      newErrors.message = "Please enter at least 10 characters";
    if (form.Landline.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(form.Landline.replace(/[\s\-\(\)]/g, ""))) {
        newErrors.Landline = "Please enter a valid Landline number";
      }
    }
    if (form.phone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(form.phone.replace(/[\s\-\(\)]/g, ""))) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }
    if (form.whatsApp.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(form.whatsApp.replace(/[\s\-\(\)]/g, ""))) {
        newErrors.whatsApp = "Please enter a valid WhatsApp number";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);

      setTimeout(() => {
        setForm({
          name: "",
          email: "",
          Firm:"",
          address:"",
          GST:"",
          Landline:"",
          phone: "",
          whatsApp:"",
          sales: "",
        });
        setSuccess(false);
      }, 3000);
    }
  };

  return (
    <>
      {/* INLINE CSS (Guaranteed to work) */}
      <style>
        {`
            :root {
            --bg-primary: #1a1a17;
            --bg-secondary: #212118;
            --bg-card: #2a2a24;
            --text-primary: #f5f5dc;
            --text-secondary: #d4d4aa;
            --text-muted: #a8a882;
            --accent-yellow: #f4d03f;
            --accent-gold: #f7c14d;
            --accent-amber: #ffa726;
            --border-light: #3d3d32;
            --border-focus: #f4d03f;
            --shadow-light: 0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
            --shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
            --shadow-strong: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
            background-attachment: fixed;
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            padding: 2rem 1rem;
        }

        .container {
            max-width: 640px;
            margin: 0 auto;
            position: relative;
        }

        .header {
            text-align: center;
            margin-bottom: 3rem;
            animation: slideDown 0.6s ease-out;
        }

        .header h1 {
            font-size: 2.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, var(--accent-yellow) 0%, var(--accent-gold) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .header p {
            color: var(--text-secondary);
            font-size: 1.1rem;
            max-width: 480px;
            margin: 0 auto;
        }

        .form-container {
            background: var(--bg-card);
            border-radius: 24px;
            padding: 2.5rem;
            box-shadow: var(--shadow-strong);
            border: 1px solid var(--border-light);
            backdrop-filter: blur(10px);
            animation: slideUp 0.6s ease-out 0.2s both;
            position: relative;
            overflow: hidden;
        }

        .form-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--accent-yellow) 0%, var(--accent-amber) 100%);
        }

        .form-grid {
            display: grid;
            gap: 1.5rem;
        }

        .form-row {
            display: grid;
            gap: 1rem;
        }

        @media (min-width: 640px) {
            .form-row.two-cols {
                grid-template-columns: 1fr 1fr;
            }
        }

        .form-group {
            position: relative;
        }

        .form-label {
            display: block;
            font-weight: 500;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
            font-size: 0.9rem;
            letter-spacing: 0.025em;
            transition: color 0.2s ease;
        }

        .form-input, .form-select, .form-textarea {
            width: 100%;
            padding: 1rem 1.25rem;
            border: 2px solid var(--border-light);
            border-radius: 12px;
            font-family: inherit;
            font-size: 1rem;
            color: var(--text-primary);
            background: var(--bg-card);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            outline: none;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
            border-color: var(--border-focus);
            box-shadow: 0 0 0 3px rgba(244, 208, 63, 0.2);
            transform: translateY(-1px);
        }

        .form-input:hover, .form-select:hover, .form-textarea:hover {
            border-color: var(--accent-gold);
        }

        .form-textarea {
            resize: vertical;
            min-height: 120px;
            font-family: 'Inter', sans-serif;
        }

        .form-select {
            cursor: pointer;
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
            background-position: right 1rem center;
            background-repeat: no-repeat;
            background-size: 1.2rem;
            padding-right: 3rem;
            appearance: none;
        }

        .form-input::placeholder, .form-textarea::placeholder {
            color: var(--text-muted);
        }

        .submit-btn {
            background: linear-gradient(135deg, var(--accent-yellow) 0%, var(--accent-gold) 100%);
            color: #1a1a17;
            padding: 1.25rem 2rem;
            border: none;
            border-radius: 12px;
            font-family: inherit;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: var(--shadow-medium);
            position: relative;
            overflow: hidden;
            letter-spacing: 0.025em;
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-strong);
        }

        .submit-btn:active {
            transform: translateY(0);
        }

        .submit-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        .submit-btn:hover::before {
            left: 100%;
        }

        .privacy-notice {
            margin-top: 1.5rem;
            padding: 1rem;
            background: var(--bg-secondary);
            border-radius: 12px;
            font-size: 0.85rem;
            color: var(--text-secondary);
            border-left: 4px solid var(--accent-amber);
        }

        .required {
            color: var(--accent-amber);
        }

        .form-group.error .form-input,
        .form-group.error .form-select,
        .form-group.error .form-textarea {
            border-color: #ef4444;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .error-message {
            color: #ef4444;
            font-size: 0.8rem;
            margin-top: 0.5rem;
            display: none;
        }

        .form-group.error .error-message {
            display: block;
        }

        .success-message {
            background: linear-gradient(135deg, var(--accent-yellow), var(--accent-gold));
            color: #1a1a17;
            padding: 1rem;
            border-radius: 12px;
            margin-bottom: 1.5rem;
            display: none;
            animation: slideDown 0.5s ease-out;
            font-weight: 500;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        .floating-elements {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: -1;
        }

        .floating-circle {
            position: absolute;
            border-radius: 50%;
            opacity: 0.1;
            animation: float 6s ease-in-out infinite;
        }

        .circle-1 {
            width: 60px;
            height: 60px;
            background: var(--accent-yellow);
            top: 10%;
            left: 10%;
            animation-delay: 0s;
        }

        .circle-2 {
            width: 40px;
            height: 40px;
            background: var(--accent-gold);
            top: 20%;
            right: 15%;
            animation-delay: 2s;
        }

        .circle-3 {
            width: 80px;
            height: 80px;
            background: var(--accent-amber);
            bottom: 15%;
            left: 20%;
            animation-delay: 4s;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-20px) rotate(120deg); }
            66% { transform: translateY(10px) rotate(240deg); }
        }

        @media (max-width: 640px) {
            .header h1 {
                font-size: 2rem;
            }
            
            .form-container {
                padding: 2rem 1.5rem;
                border-radius: 20px;
            }
            
            body {
                padding: 1rem 0.5rem;
            }
        }
        `}
      </style>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>

      <div className="container">
        <div className="header">
          <h1>Become a Reseller- Retailer</h1>
          {/* <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p> */}
        </div>

        <div className="form-container">
          {success && (
            <div className="success-message">
              <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}

          {/* FORM */}
          <form className="form-grid" onSubmit={handleSubmit} noValidate>
            <div className="form-row two-cols">
                  <div className={`form-group ${errors.email ? "error" : ""}`}>
                <label className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter Email ID"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>

              <div className={`form-group ${errors.name ? "error" : ""}`}>
                <label className="form-label">
                  First & Last Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Enter Name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>

            
            </div>

            <div className="form-row two-cols">
                <div className={`form-group ${errors.Firm ? "error" : ""}`}>
                <label className="form-label">
                  Company Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="Firm"
                  className="form-input"
                  placeholder="Enter Company Name"
                  value={form.Firm}
                  onChange={handleChange}
                />
                {errors.Firm && <div className="error-message">{errors.Firm}</div>}
              </div>

              <div className={`form-group ${errors.address ? "error" : ""}`}>
                <label className="form-label">
                  Company Address <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  className="form-input"
                  placeholder="Enter Company Address"
                  value={form.address}
                  onChange={handleChange}
                />
                {errors.address && <div className="error-message">{errors.address}</div>}
              </div>
            </div>

            <div className="form-row two-cols">
                 <div >
                <label className="form-label">GST Number</label>
                <input
                  type="number"
                  name="GST"
                  className="form-input"
                  placeholder="Enter GST Number"
                  value={form.GST}
                  onChange={handleChange}
                />
                {errors.GST && <div className="error-message">{errors.GST}</div>}
              </div>

            <div className={`form-group ${errors.Landline ? "error" : ""}`}>
                <label className="form-label">Landline Number</label>
                <input
                  type="tel"
                  name="Landline"
                  className="form-input"
                  placeholder="+(91) 98756 87345"
                  value={form.Landline}
                  onChange={handleChange}
                />
                {errors.Landline && <div className="error-message">{errors.Landline}</div>}
              </div>
            </div>

            <div className="form-row two-cols">

              <div className={`form-group ${errors.phone ? "error" : ""}`}>
                <label className="form-label">Mobile Number <span className="required">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="+(91) 98756 87345"
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className="error-message">{errors.phone}</div>}
              </div>

            <div className={`form-group ${errors.whatsApp ? "error" : ""}`}>
                <label className="form-label">WhatsApp Number <span className="required">*</span></label>
                <input
                  type="tel"
                  name="whatsApp"
                  className="form-input"
                  placeholder="+(91) 98756 87345"
                  value={form.whatsApp}
                  onChange={handleChange}
                />
                {errors.whatsApp && <div className="error-message">{errors.whatsApp}</div>}
              </div>

           
            </div>
            
            <div className="form-row two-cols">
                <div className={`form-group ${errors.sales ? "error" : ""}`}>
                <label className="form-label">
                  Supplement Sales Per Month <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="sales"
                  className="form-input"
                  placeholder="Enter Supplement Sales "
                  value={form.sales}
                  onChange={handleChange}
                />
                {errors.sales && <div className="error-message">{errors.sales}</div>}
              </div>

            </div>

         

            <button type="submit" className="submit-btn">
              Submit
            </button>

            {/* <div className="privacy-notice">
              <strong>Privacy Notice:</strong> We respect your privacy and will never share your
              personal information. Your data is used solely to respond to your inquiry and improve
              our services.
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
} 


