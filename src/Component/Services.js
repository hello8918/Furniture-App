import React, { useState } from "react";

export default function Services() {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className={`categories ${showMore ? "show-more" : ""}`}>
        <div className="categories-left">
          <div className="featured">Featured Categories</div>
          <p className="featured-2">
          These represent our finest featured categories, carefully curated for you. Explore these top choices for an exceptional experience in shopping
          </p>
          <p className="featured-3">
          Discover our handpicked selection of premium featured categories for an unparalleled shopping experience
          </p>
          <button type="button" className="featured-button" onClick={toggleContent}>
            {showMore ? "View Less Categories" : "View All Categories"}
          </button>
        </div>
        <div className="categories-right">
          <div className="box1 box">
            <div className="box-img box1"></div>
            <div className="box-content">
              <h5>FancyChairs</h5>
            </div>
          </div>
          <div className="box2 box">
            <div className="box-img box2"></div>
            <div className="box-content">
              <h5>Wooden Tables</h5>
            </div>
          </div>
          <div className="box3 box">
                <div className="box-img box3"></div>
                <div className="box-content">
                  <h5>Beds</h5>
                </div>
              </div>
              <div className="box4 box">
                <div className="box-img box4"></div>
                <div className="box-content">
                  <h5>KITCHENWARE</h5>
                </div>
              </div>
              <div className="box5 box">
                <div className="box-img box5"></div>
                <div className="box-content">
                  <h5>KITCHENITEMS</h5>
                </div>
              </div>
              <div className="box6 box">
                <div className="box-img box6"></div>
                <div className="box-content">
                  <h5>WINDOWCURTAINS</h5>
                </div>
              </div>
          {showMore && (
            <>
             
              <div className="box7 box">
                <div className="box-img box7"></div>
                <div className="box-content">
                  <h5>Fancy Tables</h5>
                </div>
              </div>
              <div className="box8 box">
                <div className="box-img box8"></div>
                <div className="box-content">
                  <h5>Classy Sofaset</h5>
                </div>
              </div>
              <div className="box9 box">
                <div className="box-img box9"></div>
                <div className="box-content">
                  <h5>Ancient Chairs</h5>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
