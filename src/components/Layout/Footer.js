import "../../styles/footer.css";
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-list footer-list-circle">
          <p className="list-heading">Insurance</p>
            <ul>
              <li>
                <span className="plus-circle">+</span>
                <a href="https://www.policybazaar.com/motor-insurance/car-insurance/">General Insurance</a>
              </li>
              <li>
                <span className="plus-circle">+</span>
                <a href="https://www.policybazaar.com/motor-insurance/two-wheeler-insurance/">Life Insurance</a>
              </li>
              <li>
                <span className="plus-circle">+</span>
                <a href="https://www.policybazaar.com/motor-insurance/">Term Insurance</a>
              </li>
              <li>
                <span className="plus-circle">+</span>
                <a href="https://www.policybazaar.com/motor-insurance/third-party-insurance/">Investment Insurance</a>
              </li>
              <li>
                <span className="plus-circle">+</span>
                <a href="https://www.policybazaar.com/motor-insurance/third-party-two-wheeler-insurance/">Health Insurance</a>
              </li>
              <li>
                <span className="plus-circle">+</span>
                <a href="https://www.policybazaar.com/motor-insurance/third-party-two-wheeler-insurance/">Other Insurance</a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <p className="list-heading">Calculators</p>
            <ul>
              <li><a href="https://www.policybazaar.com/sip/sip-calculator/">SIP Calculator</a></li>
              <li><a href="https://www.policybazaar.com/financial-tools-calculators/income-tax-calculator/">Income Tax Calculator</a></li>
              <li><a href="https://www.policybazaar.com/life-insurance/pension-plans/nps-calculator/">NPS Calculator</a></li>
              <li><a href="https://www.policybazaar.com/life-insurance/term-insurance/term-insurance-calculator/">Term Insurance Calculator</a></li>
              <li><a href="https://www.policybazaar.com/life-insurance/term-insurance/term-insurance-calculator/">HLV Calculator</a></li>
              <li><a href="https://www.policybazaar.com/life-insurance/life-insurance-calculator/">Life Insurance Calculator</a></li>            </ul>
          </div>
          <div className="footer-list">
            <p className="list-heading">Resources</p>
            <ul>
              <li><a href="https://www.policybazaar.com/insurance-articles/">Articles</a></li>
              <li><a href="https://www.policybazaar.com/blog/">Customer reviews</a></li>
              <li><a href="https://www.policybazaar.com/faq/">Insurance companies</a></li>
              <li><a href="https://www.policybazaar.com/terms-and-conditions/">Newsroom</a></li>
              <li><a href="https://www.policybazaar.com/privacy-policy/">Awards</a></li>
              <li><a href="https://www.policybazaar.com/life-insurance/term-insurance/term-insurance-calculator/">PB Life</a></li>
            </ul>
          </div>
          <div className="footer-list">
            <p className="list-heading">Company</p>
            <ul>
              <li><a href="https://www.policybazaar.com/about-us/">About Us</a></li>
              <li><a href="https://www.policybazaar.com/about-us/">Sitemap</a></li>
              <li><a href="https://www.policybazaar.com/career/">Careers</a></li>
              <li><a href="https://www.policybazaar.com/about-us/">Legal & Admin policies</a></li>
              <li><a href="https://www.policybazaar.com/about-us/">ISNP</a></li>
              <li><a href="https://www.policybazaar.com/contact-us/">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="disclaimer-section">
          <p className="footer-disclaimer white bold" style={{ textAlign: 'center' }}>
            © Copyright 2008-2024 policybazaar.com. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
