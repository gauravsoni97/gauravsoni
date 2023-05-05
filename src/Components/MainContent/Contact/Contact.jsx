import React from 'react'
import "../../../index.css";

const Contact = () => {
  return (
    <article className="contact" data-page="contact">
    <header>
      <h2 className="h2 article-title">Contact</h2>
    </header>
    <section className="mapbox" data-mapbox>
      <figure>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27757.822112668426!2d74.31366902965594!3d29.582523301355387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39168cb43c941537%3A0x3537015abc38d416!2sHanumangarh%2C%20Rajasthan%20335513!5e0!3m2!1sen!2sin!4v1672070349567!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </figure>
    </section>
    <section className="contact-form">
      <h3 className="h3 form-title">Contact Form</h3>
      <form action="https://formspree.io/f/mlekbqkq" method="POST" className="form" data-form>
        <div className="input-wrapper">
          <input type="text" autoComplete="off" name="name" className="form-input" placeholder="Full name" required data-form-input />
          <input type="email" autoComplete="off" name="email" className="form-input" placeholder="Email address" required data-form-input />
        </div>
        <input type="text" autoComplete="off" name="subject" className="form-input" placeholder="Subject" required data-form-input />
        <br />
        <textarea autoComplete="off" name="message" className="form-input" placeholder="Your Message" required data-form-input defaultValue={""} />
        <button className="form-btn" type="submit">
          <ion-icon name="paper-plane" />
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
  )
}

export default Contact