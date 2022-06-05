import React from "react";
import { Button, Card } from "react-bootstrap";
import { Fade } from "react-reveal";

class Contact extends React.Component {
  render() {
    return (
      <>
        <h1 className="title_banner" id="contact">
          Contact
        </h1>
        <div className="profile_contact">
          <Fade bottom cascade>
            <Card className="contact-card">
              <Card.Body>
                <Card.Title>Contact Information</Card.Title>
                <Card.Text>
                  Email:{" "}
                  <Card.Link
                    aria-label="Email address"
                    href="mailto:christian.nikodemus@gmail.com"
                  >
                    christian.nikodemus@gmail.com
                  </Card.Link>
                </Card.Text>
                <Card.Text>
                  Phone:{" "}
                  <Card.Link aria-label="Phone number" href="tel:+16479201062">
                    +1 (647) 920-1062
                  </Card.Link>
                </Card.Text>

                <Button
                  href="mailto:christian.nikodemus@gmail.com"
                  variant="outline-primary"
                >
                  Contact Me!
                </Button>
              </Card.Body>
            </Card>
          </Fade>
        </div>
      </>
    );
  }
}

export default Contact;
