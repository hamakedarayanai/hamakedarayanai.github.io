/* ========================================
   Global Reset & Base Styles
   ======================================== */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body.dark-theme {
  background-color: #121212;
  color: #e0e0e0;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

/* ========================================
   Sidebar Styles
   ======================================== */

#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 0; /* Hidden by default */
  height: 100%;
  background-color: #333;
  overflow-x: hidden;
  transition: width 0.3s ease;
  padding-top: 60px;
  z-index: 1000;
}

#sidebar a {
  padding: 12px 8px 12px 32px;
  text-decoration: none;
  font-size: 20px;
  color: #f1f1f1;
  display: block;
  transition: background-color 0.3s ease;
}

#sidebar a:hover {
  background-color: #575757;
}

/* Close button inside sidebar */
#closebtn {
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 36px;
  cursor: pointer;
  color: #f1f1f1;
}

/* Show button (hamburger) */
#showbtn {
  font-size: 30px;
  cursor: pointer;
  position: fixed;
  top: 15px;
  left: 15px;
  color: #ffffff;
  z-index: 1100;
}

/* ========================================
   Header, Images & Main Content
   ======================================== */

/* Profile image (or page-specific image) */
.profile-picture {
  display: block;
  margin: 20px auto;
  max-width: 150px;
  border-radius: 50%;
}

/* Main headings */
h1 {
  text-align: center;
  margin: 20px 0 10px 0;
}

/* Description or subheading text */
#description-text {
  text-align: center;
  margin: 0 auto 20px auto;
  max-width: 600px;
  font-size: 1.1rem;
}

/* ========================================
   Link Container & Button Styles
   ======================================== */

/* Container for social media/contact links */
.link-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin: 20px;
}

/* Each link block */
.link {
  margin: 10px;
}

/* Link styling (buttons) */
.link a {
  text-decoration: none;
  color: #fff;
  background-color: #1E90FF;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.link a:hover {
  background-color: #0b6aa1;
}

/* ========================================
   Footer Styles
   ======================================== */

footer {
  text-align: center;
  padding: 15px;
  background-color: #222;
  color: #ccc;
  font-size: 0.9rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}

/* ========================================
   Form Styles (For WhatsApp Chat Form)
   ======================================== */

form {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
  background-color: #222;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

form input[type="text"],
form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
}

form button {
  background-color: #1E90FF;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #0b6aa1;
}

/* ========================================
   Responsive & Utility Classes
   ======================================== */

/* Center container utility */
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive image */
img {
  max-width: 100%;
  height: auto;
}

/* Utility spacing classes */
.mt-20 { margin-top: 20px; }
.mb-20 { margin-bottom: 20px; }
.p-20  { padding: 20px; }
