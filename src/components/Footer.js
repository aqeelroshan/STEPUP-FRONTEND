import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-black mb-4">Contact Us</h4>
              <div>
                <address className="text-black fs-6">
                  Near Kalpetta Old Bus Stand <br /> Kalpetta, Wayanad <br />
                  PinCode: 673121
                </address>
                <a 
                  href="tel:+91 9746033838"
                  className=" text-black mt-3 d-block mb-1 "
                  id="black-color"
                >
                  +91 9746033838 
                </a>
                <a
                  href="stepupstore@gmail.com"
                  className="mt-2 d-block mb-0 text-black"
                  id="black-color"
                >
                  stepupstore@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4" >
                  <a className="text-black" href="# "id="black-color">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-black" href="#" id="black-color">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-black" href="#" id="black-color">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-black" href="#" id="black-color">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-black mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-black py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-black py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-black py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="text-black py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link className="text-black py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-black mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-black py-2 mb-1">About Us</Link>
                <Link className="text-black py-2 mb-1">Faq</Link>
                <Link className="text-black py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-black mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-black py-2 mb-1">Laptops</Link>
                <Link className="text-black py-2 mb-1">Headphones</Link>
                <Link className="text-black py-2 mb-1">Tablets</Link>
                <Link className="text-black py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-black">
                &copy; {new Date().getFullYear()}; Powered by Stepup Store
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
