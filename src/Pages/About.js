import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

export default class About extends Component {
  render() {
        const divStyle = {
        marginTop: "90px"
      }
      return (
  
      <Container style={divStyle}>
          <Tab.Container id="left-tab-example" defaultActiveKey="first">
              <Row>
                <Col sm={2} >
                  <Nav variant="pills" className="flex-column">
                   
                    <Nav.Item>
                      <Nav.Link eventKey="first">Design</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="second">Team</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="third">Programming</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                    </Nav.Item>

                  </Nav>
                </Col>

                <Col sm={10}>
                  <Tab.Content >
                    <Tab.Pane eventKey="first">
                      <img src="https://i.ytimg.com/vi/S9aAk8MbjWI/maxresdefault.jpg" alt='first' />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt, ab nemo velit perferendis eum beatae error adipisci obcaecati possimus voluptas laboriosam, numquam fuga accusamus.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <img src="https://www.lebegeil.de/wp-content/uploads/2021/07/teambuilding-in-berlin-die-besten-aktivitaeten-1.jpg" alt='second' />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt, ab nemo velit perferendis eum beatae error adipisci obcaecati possimus voluptas laboriosam, numquam fuga accusamus.</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, voluptates non. Hic libero molestias consequuntur doloribus, ullam assumenda obcaecati nulla sapiente. Ab saepe harum aut.
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <img src="https://tryengineering.org/wp-content/uploads/bigstock-School-Children-Learning-Codin-344363629-1024x645.jpg" alt='third'/>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt, ab nemo velit perferendis eum beatae error adipisci obcaecati possimus voluptas laboriosam, numquam fuga accusamus.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="fourth">
                      <img src="https://www.accelerate.uk.com/wp-content/uploads/2016/11/iStock-507025134.jpg" alt='fourth'/>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt, ab nemo velit perferendis eum beatae error adipisci obcaecati possimus voluptas laboriosam, numquam fuga accusamus.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="fifth">
                      <img src="https://pbs.twimg.com/media/EPjvd_RUYAEfF3r.jpg" alt='fifth'/>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt, ab nemo velit perferendis eum beatae error adipisci obcaecati possimus voluptas laboriosam, numquam fuga accusamus.</p>
                    </Tab.Pane>


                  </Tab.Content>
                </Col>
              </Row>
          </Tab.Container>

      </Container>
    );
  }
}


