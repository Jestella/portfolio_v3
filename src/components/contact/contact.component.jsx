import React from "react";

import SectionTitle from "../section-title/section-title.component";
import ContactItem from "../contact-item/contact-item.component";

import "./contact.styles.scss";

function Contact() {
  return (
    <div className="contact">
      <SectionTitle>contact</SectionTitle>

      <div className="contact_container">
        <h1>I love coffee chats!</h1>
        <ContactItem />
      </div>
    </div>
  );
}

export default Contact;
