import React, { useState } from "react";

export default function Blog() {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  const toggleReadMore1 = () => {
    setShowMore1(!showMore1);
  };

  const toggleReadMore2 = () => {
    setShowMore2(!showMore2);
  };

  // Blog slider logic
  const blogTexts = [
    " Dive into the world of wooden furniture and discover the warmth and natural beauty it can bring to your home.",
    " Explore the psychology of colors in interior design and how to pick the perfect shades for your living spaces.",
    "Discover clever space-saving furniture ideas and decorating tips for making the most of your compact living areas.",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const showNextText = () => {
    setCurrentTextIndex((prevIndex) =>
      prevIndex < blogTexts.length - 1 ? prevIndex + 1 : 0
    );
  };

  const showPreviousText = () => {
    setCurrentTextIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : blogTexts.length - 1
    );
  };

  return (
    <div className="blog" id='blog'>
      <div className="op">
        <div className="opacity2">
          <div className="blog-left">
            <span className="bl-1">Read our blog</span>
            <p className="bl-2">{blogTexts[currentTextIndex]}</p>
            <div className="lr">
              <div className="lr1" onClick={showPreviousText}>
                <i className="fa-solid fa-chevron-left"></i>
              </div>
              <div className="lr2" onClick={showNextText}>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="blogright">
            <div className="br1">
              <div className="br1img"></div>
              <p className="br1p">
                Our best chair design, the Elysian Comfort Chair, offers unparalleled comfort and timeless elegance, adding luxury to any space.
              </p>
              {showMore1 ? (
                <>
                  <p className="br1p1 br1p">
                    Crafted with sustainably sourced wood, customizable materials, ensuring both durability and aesthetic appeal.
                  </p>
                  <button type="button" className="br1btn" onClick={toggleReadMore1}>
                    -Less
                  </button>
                </>
              ) : (
                <button type="button" className="br1btn" onClick={toggleReadMore1}>
                  +More
                </button>
              )}
            </div>
            <div className="br2">
              <div className="br2img"></div>
              <p className="br2p">
                The "Harmony Haven Sofa" effortlessly combines comfort and style, redefining the centerpiece of relaxation and elegance in your living space.
              </p>
              {showMore2 ? (
                <>
                  <p className="br1p1 br2p">
                    Crafted with the finest materials ensuring both durability and aesthetic excellence.
                  </p>
                  <button type="button" className="br2btn" onClick={toggleReadMore2}>
                    -Less
                  </button>
                </>
              ) : (
                <button type="button" className="br2btn" onClick={toggleReadMore2}>
                  +More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
