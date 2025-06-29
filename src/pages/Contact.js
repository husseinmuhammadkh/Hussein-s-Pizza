import React from 'react';
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";
function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" 
      style={{ backgroundImage: `url(${PizzaLeft})` }}
      >
      </div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <form id="contact-form" method="POST">
            <label htmlFor='name'> Your Name </label>
            <input name="name" placeholder="Enter full name..." type='text'/>
            <label htmlFor='email'> Your Email </label>
            <input name="email" placeholder="Enter full email..." type='email'/>
            <label htmlFor='message'> Message </label>
            <textearea rows="6" placeholder="Enter Message..." name="message" required></textearea>
            <button type='submit'> Send Message </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
