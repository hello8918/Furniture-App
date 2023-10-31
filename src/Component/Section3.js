import React, { useState, useRef } from "react";

export default function Section3() {
  const [isViewMore, setIsViewMore] = useState(false);
  const contentRef = useRef(null);

  const productData = [
    {
      image: "7.png",
      name: "Beauty Corner Chair",
      rate: "$45.00",
    },
    {
      image: "cart2.png",
      name: "COFFEE CHAIRS",
      rate: "$45.00",
    },
    {
      image: "cart3.png",
      name: "BROWN CURTAINS",
      rate: "$45.00",
    },
    {
      image: "cart4.png",
      name: "BROWN CURTAINS",
      rate: "$45.00",
    },
    {
      image: "cart5.png",
      name: "Additional Product 1",
      rate: "$50.00",
    },
    {
      image: "cart6.png",
      name: "Additional Product 2",
      rate: "$55.00",
    },
  ];

  const additionalProductData = [
    {
      image: "cart4.png",
      name: "BROWN CURTAINS",
      rate: "$45.00",
    },
    {
      image: "cart5.png",
      name: "Additional Product 1",
      rate: "$50.00",
    },
    {
      image: "cart6.png",
      name: "Additional Product 2",
      rate: "$55.00",
    },
  ];

  const displayedProductData = isViewMore
    ? [...productData, ...additionalProductData]
    : productData;

  return (
    <div>
      <div className="ourstory">
        <div className="our-story">
          <span className="our-story-1">Our Story</span>
          <p
            className="line"
            style={{
              maxHeight: isViewMore ? contentRef.current.scrollHeight : "10em",
              // overflow: "hidden",
              transition: "max-height 0.5s ease-in",
            }}
            ref={contentRef}
          >
            A family-owned furniture company blended tradition and innovation, crafting eco-friendly designs that spread warmth and beauty to homes near and far.
            {isViewMore && (
              <div className="additional-content ">
                Our commitment to sustainable craftsmanship turned our small-town business into a beacon of quality and artistry in the world of furniture.
              </div>
            )}
          </p>
          <button
            type="button"
            className={`ourstorybtn ${isViewMore ? "shifted" : ""}`}
            onClick={() => setIsViewMore(!isViewMore)}
          >
            {isViewMore ? "Read Less -" : "Read More +"}
          </button>
        </div>
        <div className="opacity">
          <div className="opacity-content">
            As a family-owned furniture company, we're not just about crafting beautiful pieces; we're storytellers of tradition and innovation. Our journey began in a small town, where our founder's passion for woodworking met our commitment to eco-friendly practices. Over the years, we've grown, not just in size but in our dedication to timeless quality. Every item we create embodies our artisan spirit, carefully blending tradition with modernity. Our pieces find their way into homes near and far, spreading warmth, beauty, and a sense of heritage. We are a symbol of enduring craftsmanship, steadfastly providing timeless, handcrafted furniture to grace your living spaces. At the heart of our brand is a devotion to sustainability, community, and the unwavering pursuit of perfection in every piece of furniture that bears our name. Our commitment extends beyond craftsmanship; we plant a tree for every piece sold, nurturing the environment that inspires our designs. We continue to be a source of pride for our community and an embodiment of quality and tradition.
          </div>
        </div>
      </div>

      <div className="productsadded" id='shop'>
        <div className="productsadded1">
          <span className="pa1-1">Latest interior products added</span>
          <div className="space">
            <p className="pa1-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, Lorem <br /> ipsumLorem, ipsum dolor. dolor sit amet.
            </p>
          </div>
        </div>
        <div className="gr">
          {displayedProductData.map((product, index) => (
            <div className={`img${index + 1} img`} key={index}>
              <div
                className={`photo c${index + 1}`}
                style={{ backgroundImage: `url('${product.image}')` }}
              >
                <p className="data">
                  <a href="">{product.name}</a>
                </p>
                <div className="side">
                  <div className="rate">{product.rate}</div>
                  <div className="cart">
                    <a href="">
                      <i
                        className="fa-solid fa-cart-shopping fa-bounce fa-2x"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cartbtn">
          <button
            type="button"
            className="cartbtn-1"
            onClick={() => setIsViewMore(!isViewMore)}
          >
            {isViewMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
}
