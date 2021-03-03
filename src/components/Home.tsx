import React from 'react';

import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';

import Art from '../assets/conversation-animate.svg';

function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron style={{backgroundColor: "white"}}>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Jumbotron>
                </Col>
                <Col><img src={Art} alt="Art" /></Col>
            </Row>
        </Container>
    );
}

export default Home;