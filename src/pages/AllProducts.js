import React, { useState } from 'react';
import MainLayout from '../components/Layout/Layout';
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
import "../styles/allproduct.css";
import { FaSearch } from 'react-icons/fa';

const AllProduct = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const forteenCardHeaders = [
    "Upto 10% Discount", "Cashless Anywhere", "In-Built Life Cover", "Upto 85% Discount", "null", "Upto 25% Discount", "null",
    "Upto 20% Cheaper", "null", "null", "Premium Waiver", "null", "Upto 65% Discount", "Upto 25% Discount",
    "null", "No Medical Check-Up", "Lifetime Renewability", "Immediate Coverage", "Cashless Facility", "High Sum Assured", "No Age Limit",
    "Discount on Family Plans", "Coverage for Pre-Existing Conditions", "null", "Customizable Plans", "Special Offers for Senior Citizens",
    "Quick Claim Settlement", "null", "Extra Benefits on Renewal", "Flexible Coverage Options", "Annual Premium Discounts"
  ];
  

  const forteenCardImages = [
    forteen1, forteen2, forteen3, forteen4, forteen5, forteen6, forteen7, forteen8, forteen9, forteen10, forteen11, forteen12, forteen13, forteen14,
    forteen12, forteen3, forteen13, forteen5, forteen14, forteen8, forteen1, forteen10, forteen13, forteen2, forteen11, forteen12, forteen13, forteen14,
    forteen1,forteen10,forteen5
  ];

  const forteenCardTitles = [
    "Term Life Insurance", "Health Insurance", "Investment Plans", "Car Insurance", "2 Wheeler Insurance", "Family Health Insurance", "Travel Insurance",
    "Term Insurance (Women)", "Free of Cost Term Plan", "Guaranteed Return Plans", "Child Savings Plan", "Retirement Plans", "Employee Group Health Plan", "Home Insurance",
    "Pet Insurance", "Critical Illness Coverage", "Personal Accident Insurance", "Medical Reimbursement Plan", "Hospital Daily Cash Plan", "Income Protection Insurance",
    "Business Insurance", "Mortgage Protection Insurance", "Income Protection Plan", "Disability Insurance", "Long-Term Care Insurance", "Debt Protection Insurance",
    "Liability Insurance", "Renters Insurance", "Short-Term Health Insurance", "Short-Term Disability Insurance", "Investment-linked Insurance Plan"
  ];
  

  // Filter the cards based on the search query
  const filteredCards = forteenCardTitles
    .map((title, index) => ({
      title,
      image: forteenCardImages[index],
      header: forteenCardHeaders[index]
    }))
    .filter(card => card.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <MainLayout>

<div className="input-box">
  <FaSearch className="icon" /> {/* Add the class for consistent styling */}
  <input
    type="text"
    placeholder="Search here..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <button
    className="button"
    onClick={() => setSearchQuery(searchQuery.trim())}
  >
    Search
  </button>
</div>


      <div className="cards-grid allproduct-main">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => {
            const hasHeader = card.header !== "null";
            const headerClass = card.header === "Premium Waiver" || card.header === "Quick Claim Settlement" ? "card-header-red" : "card-header";

            return (
              <div key={index} className="card-container">
                <div className={`prod-card-home ${!hasHeader ? 'no-header' : ''}`}>
                  {hasHeader && (
                    <div className={headerClass}>
                      {card.header}
                    </div>
                  )}
                  <div className={`card-body ${!hasHeader ? 'full-image' : ''}`}>
                    <img
                      src={card.image}
                      alt={`Card ${index + 1}`}
                      className="card-image"
                    />
                  </div>
                </div>
                <div className="card-title">{card.title}</div>
              </div>
            );
          })
        ) : (
          <div className="no-results">No results found</div>
        )}
      </div>

    </MainLayout>
  );
}

export default AllProduct;
