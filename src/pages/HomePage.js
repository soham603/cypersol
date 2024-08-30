import { useState, useEffect } from 'react';
import React from 'react'
import MainLayout from '../components/Layout/Layout';
import "../styles/homepage.css";
import "../App.css";
import home1 from ".././assets/home11.png";
import home2 from ".././assets/home2.png";
import home3 from ".././assets/home3.png";
import home4 from ".././assets/home4.avif";
import home5 from ".././assets/home5.avif";
import home6 from ".././assets/home6.png";

import five1 from "../assets/five1.png";
import five2 from "../assets/five2.png";
import five3 from "../assets/five3.png";
import five4 from "../assets/five4.png";
import five5 from "../assets/five5.png";

import visitlogo from "../assets/visit-logo.png";
import scrolllogo from "../assets/scroll_logo.png"

import leftbg from "../assets/left-bg.avif";
import rightbg from "../assets/right-bg.png";

import zig1 from "../assets/zig1.png";
import zig2 from "../assets/zig2.png";
import zig3 from "../assets/zig3.png";
import zig4 from "../assets/zig4.png";

import forteen1 from "../assets/forteen1.png";
import forteen2 from "../assets/forteen2.png";
import forteen3 from "../assets/forteen3.png";
import forteen4 from "../assets/forteen4.png";
import forteen5 from "../assets/forteen5.png";
import forteen6 from "../assets/forteen6.png";
import forteen7 from "../assets/forteen7.png";
import forteen8 from "../assets/forteen8.png";
import forteen9 from "../assets/forteen9.png";
import forteen10 from "../assets/forteen10.png";
import forteen11 from "../assets/forteen11.png";
import forteen12 from "../assets/forteen12.png";
import forteen13 from "../assets/forteen13.png";
import forteen14 from "../assets/forteen14.png";

import top1 from "../assets/top1.png";
import top2 from "../assets/top2.png";

import { Link } from 'react-router-dom';
import ScrollingLogos from '../components/brands_scroll_Card.js';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const cards = [home1, home2, home3, home4, home5, home6];
  const [cardsToShow, setCardsToShow] = useState(3); 
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const fifteenCards = [
    'https://static.pbcdn.in/cdn/images/home-v1/banner-24x7.png',
    'https://static.pbcdn.in/cdn/images/home-v1/pbaskci_banner_1.png',
    'https://static.pbcdn.in/cdn/images/home-v1/homepage-g20-banner.png',
    'https://static.pbcdn.in/cdn/images/home/fraud_detection_policy.png',
    'https://static.pbcdn.in/cdn/images/home-v1/beware-of-fraudsters.png',
    'https://static.pbcdn.in/cdn/images/home-v1/banner-24x7.png',
    'https://static.pbcdn.in/cdn/images/home-v1/pbaskci_banner_1.png',
    'https://static.pbcdn.in/cdn/images/home-v1/homepage-g20-banner.png',
    'https://static.pbcdn.in/cdn/images/home/fraud_detection_policy.png',
    'https://static.pbcdn.in/cdn/images/home-v1/beware-of-fraudsters.png',
    'https://static.pbcdn.in/cdn/images/home-v1/banner-24x7.png',
    'https://static.pbcdn.in/cdn/images/home-v1/pbaskci_banner_1.png',
    'https://static.pbcdn.in/cdn/images/home-v1/homepage-g20-banner.png',
    'https://static.pbcdn.in/cdn/images/home/fraud_detection_policy.png',
    'https://static.pbcdn.in/cdn/images/home-v1/beware-of-fraudsters.png',
  ];

  const logos = [
    'https://www.policybazaar.com/pblife/assets/images/art_thumb_img/pb_life_1665575605.png',
    visitlogo,
    'https://www.paisabazaar.com/PBHP/assets/images/paisabazaar-logo.svg',
    'https://www.docprime.com/assets/images/logos/quick-fix.png',
    'https://trademaklogos.s3.ap-south-1.amazonaws.com/5299150.jpeg',
    'https://techstory.in/wp-content/uploads/2018/09/DocPrime.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jhjPnLqBo-Qfiv619-a7KAYBoQI-N2JD02zx21qDwIPB36-8',
    scrolllogo
  ];

  const forteenCardHeaders = [
    "Upto 10% Discount", "Cashless Anywhere", "In-Built Life Cover", "Upto 85% Discount", "null", "Upto 25% Discount", "null",
    "Upto 20% Cheaper", "null", "null", "Premium Waiver", "null", "Upto 65% Discount", "Upto 25% Discount"
  ];
  
  const forteenCardImages = [
    forteen1,forteen2,forteen3,forteen4,forteen5,forteen6,forteen7,forteen8,forteen9,forteen10,forteen11,forteen12,forteen13,forteen14
  ];
  
  const forteenCardTitles = [
    "Term Life Insurance", "Health Insurance", "Investment Plans", "Car Insurance", "2 Wheeler Insurance", "Family Health Insurance", "Travel Insurance",
    "Term Insurance (Women)", "Free of Cost Term Plan", "Guaranteed Return Plans", "Child Savings Plan", "Retirement Plans", "Employee Group Health Plan", "Home Insurance"
  ];

  useEffect(() => {
    const updateCardsToShow = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) { 
        setCardsToShow(1);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);

    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex2((prevIndex) => (prevIndex + 1) % Math.ceil(cards.length / cardsToShow));
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length, cardsToShow]); 

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleDotClick2 = (index) => {
    setCurrentIndex2(index);
  };

  const startIndex = currentIndex2 * cardsToShow;
  const displayedCards = cards.slice(startIndex, startIndex + cardsToShow);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex3((prevIndex) => (prevIndex + 1) % Math.ceil(fifteenCards.length / cardsToShow));
    }, 1000);

    return () => clearInterval(interval);
  }, [fifteenCards.length, cardsToShow]);


  const handleDotClick3 = (index) => {
    setCurrentIndex3(index);
  };

  const displayedCards3 = fifteenCards.slice(currentIndex3 * cardsToShow, currentIndex3 * cardsToShow + cardsToShow);

  const smallCardTitles = [
    "Investment", "Term Life", "Term Life", "Health Insurance", "Health Insurance", "Health Insurance"
  ];
  
  const smallCardBodies = [
    "LIC Plans", "Return of Premium", "Life Insurance for Housewives", "Day 1 Coverage", "1 Cr Health Insurance","Unlimited Restoration of Cover"
  ];

  const smallCardTitles2 = [
    "Health Insurance", "Business Insurance","Business Insurance", "Business Insurance", "Business Insurance", "Others"
  ];

  const smallCardBodies2 = [
    "Personal Accident", "Marine Insurance", "Professional Indemnity of Doctors",
    "Directors & Officers Liability", "Workmen Compensation", "Pet Insurance"
  ];


  return (
    <MainLayout >

      
      <div className="first-container">
        {/* Left Side */}
        <div className="left-content">
          <h1 className='first-con-title'>Let's find you<br /> the <span className='first-con-bold'>Best Insurance</span></h1>
          <div className="button-container">
            <div className="btn">
              <img src={top1} />
              <div className="btn-text1">
                50+ issuers with one
                <br />
                of the best prices
              </div>
            </div>
            <div className="btn">
              <img src={top2} />
              <div className="btn-text2">
                Quick, easy &
                <br />
                hassle free
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div id="indicators-carousel" className="carousel" data-carousel="static">
          <div className="carousel-wrapper">
            <div className={`carousel-item ${currentIndex === 0 ? 'active' : ''}`}>
              <img src="https://static.pbcdn.in/cdn/images/home/health-web-desktop.png" alt="Slide 1" />
            </div>
            <div className={`carousel-item ${currentIndex === 1 ? 'active' : ''}`}>
              <img src="https://static.pbcdn.in/cdn/images/home/term_crore_desktop.png?v=10" alt="Slide 2" />
            </div>
            <div className={`carousel-item ${currentIndex === 2 ? 'active' : ''}`}>
              <img src="https://static.pbcdn.in/cdn/images/home/investment_new_domestic.png" alt="Slide 3" />
            </div>
          </div>
          <div className="carousel-dots">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* 7 x 7 14 cards new page one*/}
      
      <div className="cards-grid">
      {forteenCardHeaders.map((header, index) => {
        const headerClass = header === "Premium Waiver" ? "card-header-red" : "card-header";
        const hasHeader = header !== "null";

        return (
          <div key={index} className="card-container">
            <div className={`prod-card-home ${!hasHeader ? 'no-header' : ''}`}>
              {hasHeader && (
                <div className={headerClass}>
                  {header}
                </div>
              )}
              <div className={`card-body ${!hasHeader ? 'full-image' : ''}`}>
                <img
                  src={forteenCardImages[index]}
                  alt={`Card ${index + 1}`}
                  className="card-image"
                />
              </div>
            </div>
            <div className="card-title">{forteenCardTitles[index]}</div>
          </div>
        );
      })}
    </div>
    <div className="view-all-scheme-container">
      <Link to="/all-products">
      <button className="view-all-button">View all Products</button>
      </Link>
    </div>

    {/* 12 mini home cards */}    

    <div className="smallcards-grid-main">
  <div className="smallcards-grid">
    {smallCardTitles.map((title, index) => (
      <div key={index} className="smallcard-container">
        <div
          className="smallcard-header"
          style={{
            display: 'flex',
            alignItems: 'center', 
            color: title === 'Health Insurance' ? '#ff9a9a' : title === 'Term Life' ? '#998dd9' : title === 'Investment' ? '#998dd9' : title === 'Business Insurance' ? '#00b8d9' : '#6b778c',
            gap: '4px', 
          }}
        >
          <span
            style={{
              color: title === 'Health Insurance' ? '#ff9a9a' : title === 'Term Life' ? '#998dd9' : title === 'Investment' ? '#998dd9' : title === 'Business Insurance' ? '#00b8d9' : '#6b778c',
              fontSize: '16px',
              transform: 'scale(1.3)',
              display: 'inline-block',
            }}
          >
            •
          </span>
          {title}
        </div>
        <div className="smallcard-body">{smallCardBodies[index]}</div>
      </div>
    ))}
  </div>
  <div className="smallcards-grid smallcards-grid2">
    {smallCardTitles2.map((title, index) => (
      <div key={index} className="smallcard-container">
        <div
          className="smallcard-header"
          style={{
            display: 'flex',
            alignItems: 'center', // Centers the dot vertically with the text
            color: title === 'Health Insurance' ? '#ff9a9a' : title === 'Term Life' ? '#998dd9' : title === 'Investment' ? '#998dd9' : title === 'Business Insurance' ? '#00b8d9' : '#6b778c',
            gap: '4px', // Space between the dot and the text
          }}
        >
          <span
            style={{
              color: title === 'Health Insurance' ? '#ff9a9a' : title === 'Term Life' ? '#998dd9' : title === 'Investment' ? '#998dd9' : title === 'Business Insurance' ? '#00b8d9' : '#6b778c',
              fontSize: '16px',
              transform: 'scale(1.3)',
              display: 'inline-block',
            }}
          >
            •
          </span>
          {title}
        </div>
        <div className="smallcard-body">{smallCardBodies2[index]}</div>
      </div>
    ))}
  </div>
</div>


    

      {/* six home cards */}        

      <div className='six-home-cards'>
        <div className='sixcard-main-cards'>
          {displayedCards.slice(0, cardsToShow).map((card, index) => (
            <div className='sixcard-main' key={index}>
              <img src={card} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="carousel-dots2">
          {Array.from({ length: Math.ceil(cards.length / cardsToShow) }).map((_, index) => (
            <button
              key={index}
              className={`dot2 ${currentIndex2 === index ? 'active' : ''}`}
              onClick={() => handleDotClick2(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Left right bg cards 4 */}


     
      <div className="styled-div">
      <img src={leftbg} alt="Left" className="bg-image left" />
      <img src={rightbg} alt="Right" className="bg-image right" />
      
      {/* Main content wrapper with specified margins */}
      <div className="styled-div-main">
        <div className="content">
          <div className="left-text">
            <p className='styled-div-main-p'>
            What makes<br />
            <span className='styled-div-bold'>Policybazaar</span> one of<br /><span className='styled-div-bold'>India's favourite places<br /></span>
            to <span className='styled-div-bold'>buy insurance</span>?
            </p>
          </div>

          <div className="right-cards">
            <div className="zig-card zig1">
              <img src={zig1} alt="Card 1" className="zig-card-image" />
              <h3 className="zig-card-title">Over 9 million</h3>
              <p className="zig-card-description">customers trust us & have bought their insurance on Policybazaar</p>
            </div>
            <div className="zig-card zig2">
              <img src={zig2} alt="Card 2" className="zig-card-image" />
              <h3 className="zig-card-title">50+ insurers</h3>
              <p className="zig-card-description">partnered with us so that you can compare easily & transparently</p>
            </div>
            <div className="zig-card zig3">
              <img src={zig3} alt="Card 3" className="zig-card-image" />
              <h3 className="zig-card-title">Great Price</h3>
              <p className="zig-card-description">for all kinds of insurance plans available online</p>
            </div>
            <div className="zig-card zig4">
              <img src={zig4} alt="Card 4" className="zig-card-image" />
              <h3 className="zig-card-title">Claims</h3>
              <p className="zig-card-description">support built in with every policy for help, when you need it the mos</p>
            </div>
          </div>
        </div>
      </div>
    </div>




      {/* 15 Cards UI */}
      <div className='fifteen-home-cards'>
        <div className='fifteen-main-cards'>
          {displayedCards3.map((card, index) => (
            <div className='fifteen-main' key={index}>
              <img src={card} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="carousel-dots3">
          {Array.from({ length: Math.ceil(fifteenCards.length / cardsToShow) }).map((_, index) => (
            <button
              key={index}
              className={`dot3 ${currentIndex3 === index ? 'active' : ''}`}
              onClick={() => handleDotClick3(index)}
            ></button>
          ))}
        </div>
      </div>



      {/* Popular Calculators */}
      <div className='pop-cal-main'>
        <div className='pop-cal-title'>
          <h1>Popular calculators</h1>
        </div>
        <div className='pop-cal-desc'>
          <p>
            Discover our user-friendly calculators tailored to help you make informed financial decisions. Our diverse range of insurance calculators ensures you find the perfect fit for your needs. Explore the options below to get started.
          </p>
        </div>
        <div className='pop-cal-cards'>

          <div className="investment-calculator calc-box">
            <div className="cal-box-header in">
              <p>Investment<br /> calculators</p>
              <img className='cal-box-problem' src='https://static.pbcdn.in/cdn/images/home/investment-calc.svg' alt="Investment Calculator" />
            </div>
            <ul className="listof">
              <li><a href="https://www.policybazaar.com/sip/sip-calculator/"> SIP Calculator  <img src="https://static.pbcdn.in/cdn/images/home/arrow-long.svg" alt="Arrow" class="arrow-icon" /></a></li>
              <li><a href="https://www.policybazaar.com/financial-tools-calculators/income-tax-calculator/"> Income Tax Calculator <img src="https://static.pbcdn.in/cdn/images/home/arrow-long.svg" alt="Arrow" class="arrow-icon" /></a></li>
              <li><a href="https://www.policybazaar.com/life-insurance/ulip-plans/ulip-calculator/"> ULIP Calculator  <img src="https://static.pbcdn.in/cdn/images/home/arrow-long.svg" alt="Arrow" class="arrow-icon" /></a></li>
              <li><a href="https://www.policybazaar.com/life-insurance/pension-plans/nps-calculator/">NPS Calculator  <img src="https://static.pbcdn.in/cdn/images/home/arrow-long.svg" alt="Arrow" class="arrow-icon" /></a></li>
            </ul>
          </div>

          <div className="loan-calculator calc-box">
            <div className="cal-box-header loan">
              <p>Loan<br /> calculators</p>
              <img src='https://static.pbcdn.in/cdn/images/home/term-life-calc.svg' alt="Loan Calculator" />
            </div>
            <ul className="listof">
              <li><a href="https://www.policybazaar.com/home-loan-emi-calculator/"> Home Loan EMI Calculator  <img src="https://static.pbcdn.in/cdn/images/home/arrow-long.svg" alt="Arrow" class="arrow-icon" /></a></li>
              <li><a href="https://www.policybazaar.com/car-loan-emi-calculator/"> Car Loan EMI Calculator  <img src="https://static.pbcdn.in/cdn/images/home/arrow-long.svg" alt="Arrow" class="arrow-icon" /></a></li>
              <li><a href="https://www.policybazaar.com/personal-loan-emi-calculator/"> Personal Loan EMI Calculator  <img src="https://static.pbcdn.in/cdn/images/home/arrow-long.svg" alt="Arrow" class="arrow-icon" /></a></li>
              <li><a href="https://www.policybazaar.com/loan-against-property-emi-calculator/"> Property Loan Calculator  <img src="https://static.pbcdn.in/cdn/images/home/arrow-long.svg" alt="Arrow" class="arrow-icon" /></a></li>
            </ul>
          </div>

          <div className="insurance-calculator calc-box">
            <div className="cal-box-header ins">
              <p>Insurance<br /> calculators</p>
              <img src='https://static.pbcdn.in/cdn/images/home/health-calc.svg' alt="Insurance Calculator" />
            </div>
            <ul className="listof">
              <li><a href="https://www.policybazaar.com/term-insurance-premium-calculator/"> Term Insurance Calculator  <img src="https://static.pbcdn.in/cdn/images/home/arrow-long.svg" alt="Arrow" class="arrow-icon" /></a></li>
              <li><a href="https://www.policybazaar.com/health-insurance/premium-calculator/"> Health Insurance Calculator  <img src="https://static.pbcdn.in/cdn/images/home/arrow-long.svg" alt="Arrow" class="arrow-icon" /></a></li>
              <li><a href="https://www.policybazaar.com/motor-insurance/calculator/"> Motor Insurance Calculator  <img src="https://static.pbcdn.in/cdn/images/home/arrow-long.svg" alt="Arrow" class="arrow-icon" /></a></li>
              <li><a href="https://www.policybazaar.com/travel-insurance-calculator/"> Travel Insurance Calculator  <img src="https://static.pbcdn.in/cdn/images/home/arrow-long.svg" alt="Arrow" class="arrow-icon" /></a></li>
            </ul>
          </div>
        </div>
        <div className="view-all-button-container">
          <button className="view-all-button">View All Calculators</button>
        </div>
      </div>

      {/* PB ADvantage */}


      <div className='pb-adv-main'>
        <div className='pb-adv-title'>
          <h2>PB Advantage</h2>
        </div>
        <div className='pb-adv-desc'>
          <p>
            When you buy insurance from us, you get more than just financial safety. You also<br />get: our promise of simplifying complex insurance terms and conditions, quick<br />stress-free claims, instant quotes from top insurers and being present for you in<br />the toughest of times.<br />
          </p>
          <h6 className='know-more-link'>Know More</h6>
        </div>
        <div className='pb-adv-cards'>
          <div className='pb-adv-card'>
            <img src={five1} alt='Image 1' />
            <h3>One of the best Prices</h3>
            <p>Guaranteed</p>
          </div>
          <div className='pb-adv-card'>
            <img src={five2} alt='Image 2' />
            <h3>Unbiased Advice</h3>
            <p>Keeping customers first</p>
          </div>
          <div className='pb-adv-card'>
            <img src={five3} alt='Image 3' />
            <h3>100% Reliable</h3>
            <p>Regulated by IRDAI</p>
          </div>
          <div className='pb-adv-card'>
            <img src={five4} alt='Image 4' />
            <h3>Claims Support</h3>
            <p>Made stress-free</p>
          </div>
          <div className='pb-adv-card'>
            <img src={five5} alt='Image 5' />
            <h3>Happy to Help</h3>
            <p>Every day of the week</p>
          </div>
        </div>
      </div>



      {/* Brands marque*/}
      <ScrollingLogos logos={logos} />


    </MainLayout>
  );
}

export default HomePage;
