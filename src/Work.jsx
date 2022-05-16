import React from "react";
import simpleIndexingApp from "./img/Simple-indexing-app-img.png";
import myFilmsClient from "./img/myFilms-client-img.png";
import meet from "./img/Meet-img.png";
import chatterBox from "./img/Chatter_Box-img.png";
import myFilmsAngular from "./img/myFilms-Angular-client.png";
import { Card, ListGroup, Button, Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";

class Work extends React.Component {
  render() {
    return (
      <>
        <h1 className="title_banner">Work</h1>
        <div className="work-grid">
          <Container>
            <Row lg={3} md={2} sm={1} xs={1} className="g-4">
              <Col>
                <Fade bottom>
                  <Card className="grid-card">
                    <Card.Header as="h2">Simple Indexing App</Card.Header>
                    <Card.Img
                      variant="top"
                      src={simpleIndexingApp}
                      alt="Simple indexing web application user interface"
                    />
                    <Card.Body>
                      <Card.Text>
                        A small web application with HTML, CSS, and JavaScript
                        that loads data from an external API and enables the
                        viewing of data points in detail. Through this, I
                        learned how to use Boostrap, and implement an external
                        API.
                      </Card.Text>
                      <Button
                        variant="outline-primary"
                        href="https://christiannikodemus.github.io/Simple-Indexing-App/"
                        target="_blank"
                      >
                        Open Project
                      </Button>
                      <Button
                        variant="outline-primary"
                        href="https://github.com/ChristianNikodemus/Simple-Indexing-App"
                        target="_blank"
                      >
                        See project on Github
                      </Button>
                      <ListGroup>
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>Bootstrap</ListGroup.Item>
                        <ListGroup.Item>jQuery</ListGroup.Item>
                        <ListGroup.Item>
                          Application Programming Interface (API)
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
              <Col>
                <Fade bottom>
                  <Card className="grid-card">
                    <Card.Header as="h2">myFilms Database</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        A server-side component of a “movies” web application.
                        The web application provides users with access to
                        information about different movies, directors, and
                        genres. Users are able to sign up, update their personal
                        information, and create a list of their favorite movies.
                        Through this, I learned how to create a database ready
                        to be used by a client-side application.
                      </Card.Text>

                      <Button
                        variant="outline-primary"
                        href="https://github.com/ChristianNikodemus/myFilmsDB"
                        target="_blank"
                      >
                        See project on Github
                      </Button>
                      <ListGroup>
                        <ListGroup.Item>Node.js</ListGroup.Item>
                        <ListGroup.Item>Express</ListGroup.Item>
                        <ListGroup.Item>MongoDB</ListGroup.Item>
                        <ListGroup.Item>Postman</ListGroup.Item>
                        <ListGroup.Item>Heroku</ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
              <Col>
                <Fade>
                  <Card className="grid-card">
                    <Card.Header as="h2">myFilms React Front-end</Card.Header>
                    <Card.Img
                      variant="top"
                      src={myFilmsClient}
                      alt="React front end user interface"
                    />
                    <Card.Body>
                      <Card.Text>
                        Using React, I built the client-side for an application
                        called myFilms based on its existing server-side code
                        (REST API and database). Through this, I learned how to
                        create a front-end react web application using React.
                      </Card.Text>
                      <Button
                        variant="outline-primary"
                        href="https://my-films-client.vercel.app/"
                        target="_blank"
                      >
                        Open Project
                      </Button>
                      <Button
                        variant="outline-primary"
                        href="https://github.com/ChristianNikodemus/myFilms-client"
                        target="_blank"
                      >
                        See project on Github
                      </Button>
                      <ListGroup>
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>React</ListGroup.Item>
                        <ListGroup.Item>React Bootstrap</ListGroup.Item>
                        <ListGroup.Item>React Redux</ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
              <Col>
                <Fade bottom>
                  <Card className="grid-card">
                    <Card.Header as="h2">Meet App</Card.Header>
                    <Card.Img
                      variant="top"
                      src={meet}
                      alt="React front end user interface"
                    />
                    <Card.Body>
                      <Card.Text>
                        A serverless, progressive web application (PWA) with
                        React using a test-driven development (TDD) technique.
                        The application uses the Google Calendar API to fetch
                        upcoming events. Through this, I learned the advantages
                        of utilizing an API in a React web application.
                      </Card.Text>
                      <Button
                        variant="outline-primary"
                        href="https://christiannikodemus.github.io/meet/"
                        target="_blank"
                      >
                        Open Project
                      </Button>
                      <Button
                        variant="outline-primary"
                        href="https://github.com/ChristianNikodemus/meet"
                        target="_blank"
                      >
                        See project on Github
                      </Button>
                      <ListGroup>
                        <ListGroup.Item>React</ListGroup.Item>
                        <ListGroup.Item>
                          Google Calendar API and OAuth2 authentication
                        </ListGroup.Item>
                        <ListGroup.Item>AWS lambda</ListGroup.Item>
                        <ListGroup.Item>
                          React axios and async/await
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Recharts (data visualization)
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
              <Col>
                <Fade bottom>
                  <Card className="grid-card">
                    <Card.Header as="h2">Chatter Box</Card.Header>
                    <Card.Img
                      variant="top"
                      src={chatterBox}
                      alt="React native mobile user interface"
                      style={{
                        maxWidth: "9em",
                        margin: "0 auto",
                        marginTop: "0.5em",
                      }}
                    />
                    <Card.Body>
                      <Card.Text>
                        A chat app for mobile devices using React Native. The
                        app provides users with a chat interface and options to
                        share images and their location. Through this, I learned
                        the transition to mobile development, and it's
                        differences from React.
                      </Card.Text>
                      <Button
                        variant="outline-primary"
                        href="https://github.com/ChristianNikodemus/Chatter-Box"
                        target="_blank"
                      >
                        See project on Github
                      </Button>
                      <ListGroup>
                        <ListGroup.Item>React Native</ListGroup.Item>
                        <ListGroup.Item>Expo</ListGroup.Item>
                        <ListGroup.Item>
                          Google Firestore Database
                        </ListGroup.Item>
                        <ListGroup.Item>Gifted Chat Library</ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
              <Col>
                <Fade bottom>
                  <Card className="grid-card">
                    <Card.Header as="h2">myFilms Angular Front-end</Card.Header>
                    <Card.Img
                      variant="top"
                      src={myFilmsAngular}
                      alt="Angular front end user interface"
                    />
                    <Card.Body>
                      <Card.Text>
                        Using Angular, I built the client-side for an
                        application called myFilms based on its existing
                        server-side code (REST API and database), with
                        supporting documentation. Through this, I learned
                        TypeScript and its advantage of scalability. As well as
                        how to play into Angular's intricate UI material.
                      </Card.Text>
                      <Button
                        variant="outline-primary"
                        href="https://christiannikodemus.github.io/myFilms-Angular-client/welcome"
                        target="_blank"
                      >
                        Open Project
                      </Button>
                      <Button
                        variant="outline-primary"
                        href="https://github.com/ChristianNikodemus/myFilms-Angular-client"
                        target="_blank"
                      >
                        See project on Github
                      </Button>
                      <ListGroup>
                        <ListGroup.Item>Angular</ListGroup.Item>
                        <ListGroup.Item>Angular Material</ListGroup.Item>
                        <ListGroup.Item>TypeScript</ListGroup.Item>
                        <ListGroup.Item>TypeDoc (documentation)</ListGroup.Item>
                      </ListGroup>
                      <Card.Link
                        href="https://trello.com/b/ttMAyK4v/myfilms-angular-client"
                        target="_blank"
                      >
                        Kanban board
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Work;
