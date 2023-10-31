import React, { useState } from "react";

export default function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validInfo, setValidInfo] = useState(false);

  const handleSubscribe = () => {
    if (name && email) {
     
      window.alert("Thanks for Subscribing:)");
      setValidInfo(false);

      
    } else {
      
      window.alert("Enter valid information");
      setValidInfo(true);
    }
  };

  return (
    <div className="newslettermain">
      <div className="newsletter">
        <div className="nlleft">NEWSLETTER</div>
        <div className="nlright">
          <input
            placeholder="Your name"
            className={`input2 ${validInfo && !name ? "error" : ""}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Your email id"
            className={`input3 ${validInfo && !email ? "error" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" className="newsbtn" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
