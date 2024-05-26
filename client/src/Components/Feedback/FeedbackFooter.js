import React from "react";

import "./footer.css";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter className="text-center bg-light w-100 fc">
      <div className="footer-container">
        <footer className="footer">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-12 col-md-12 mb-4 mb-md-0 ">
                <h5 className="text-uppercase">
                  Make a donation to support our cause.{" "}
                  <a
                    href="https://bhumi.ngo/bhumi-donate/"
                    style={{ color: "#e81224" }}
                  >
                    Donate ❤️
                  </a>
                </h5>
                <h6>
                  Contact us at example@example.com for any questions or
                  support.
                </h6>
              </div>
              <div className="text-center p-3  av">
                © {new Date().getFullYear()} Bhumi | CodeRed
              </div>
            </div>
          </div>
        </footer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
