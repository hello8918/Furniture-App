import React, { useRef } from 'react';


function ContactUs() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name || !email || !message) {
      alert('All fields are required. Please fill them out.');
    } else {
      alert('Our team will contact you shortly.');
      // You can also clear the form fields here if needed
      nameRef.current.value = '';
      emailRef.current.value = '';
      messageRef.current.value = '';
    }
  };

  return (
    <div className="maincc">
    <div className="contact-container">
    <div className="head2-1">
          <p className="lefthca">
            <span style={{ color: 'grey' }}>THE</span>
            <span style={{ color: 'rgb(6, 94, 182)', fontFamily: 'Montserrat' }}>
              SPACIOUS
            </span>
          </p>
          <p className="headlineca">
            Transform your living spaces into dreamscapes with our exquisite furniture collections
          </p>
        </div>
      <h1 className='cc'>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} className="input-field" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} className="input-field" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" ref={messageRef} className="input-field" required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default ContactUs;
