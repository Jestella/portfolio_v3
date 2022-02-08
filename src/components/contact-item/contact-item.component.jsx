import React from "react";
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";

import "./contact-item.styles.scss";

class ContactItem extends React.Component {
  constructor() {
    super();

    this.state = {
      social_media: [
        {
          id: 1,
          social_media: (
            <a href="https://linkedin.com/in/jestellaa" target="_blank">
              <FaLinkedinIn className="social_media_item" />
            </a>
          ),
        },
        {
          id: 1,
          social_media: (
            <a href="https://github.com/Jestella" target="_blank">
              <FaGithub className="social_media_item" />
            </a>
          ),
        },
        {
          id: 1,
          social_media: (
            <a href="mailto:je.stella.lee@gmail.com" target="_blank">
              <FaEnvelope className="social_media_item mail" />
            </a>
          ),
        },
      ],
    };
  }

  render() {
    return (
      <div className="contact_item">
        {this.state.social_media.map((social_media) => (
          <div key={social_media.id}>
            <div className="social_media">
              <div className="social_media_container">
                {social_media.social_media}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ContactItem;
