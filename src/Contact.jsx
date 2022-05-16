import React from "react";
import { Button, Table, Card } from "react-bootstrap";
import { Fade } from "react-reveal";

class Contact extends React.Component {
  render() {
    return (
      <>
        <h1 className="title_banner">Contact</h1>
        <div className="profile_contact">
          <Card>
            <Fade bottom cascade>
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
            </Fade>
          </Card>
        </div>
      </>
    );
  }
}

export default Contact;
