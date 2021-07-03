import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const message = this.props.data.contactmessage;
    const email = this.props.data.email;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
              <p className="address">
                    <span>{email}</span>
              </p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Contact;
