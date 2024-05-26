import React from "react";
import "./donationFooter.css";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MDBFooter } from "mdb-react-ui-kit";
const DonationFooter = () => {
  return (
    <MDBFooter className="text-center bg-light">
      <footer className="donationFooter">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="footer-text">
                We are immensely grateful for your generous support
              </h5>
              <h4 className="contact">Contact Us</h4>
            </div>
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="footer-link">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact </a>
                  <FaTwitter />
                  <FaInstagram />
                  <FaFacebook />
                </li>
              </ul>
            </div>
            <div className="text-center p-3 ay">
              © {new Date().getFullYear()} CodeRed
            </div>
          </div>
        </div>
      </footer>
    </MDBFooter>
  );
};
export default DonationFooter;
