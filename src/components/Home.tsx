import React, {useRef} from 'react';

import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Art from '../assets/conversation-animate.svg';
import chatButton from '../assets/example-animate.svg';
import Arrow from '../assets/arrow.svg';

function Home() {
    return (
        <>
        <Container>
            <Row>
                <Col md={6} bsPrefix="col align-self-center">
                    <Jumbotron className="mb-0" style={{backgroundColor: "white"}}>
                        <h1>Bienvenue</h1>
                        <p>
                            Nous sommes les pair aidants. Nous sommes içi pour vous aider. Chattez avec nous!
                        </p>
                        <p>
                            <Button as={Link} to="/about" variant="primary">Nous connaître plus</Button>
                        </p>
                    </Jumbotron>
                </Col>
                <Col md={6}><img src={Art} alt="Art" /></Col>
            </Row>
        </Container>
        <Container className="hatched">
            <Row>
                <Col className="text-center">
                    <h1 className="pt-5 font-weight-bold font-weight-italic">Chattez Maintenant!</h1>
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <Col className="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="justfiy-content-md-center">
                    <Link to="/anon">
                        <img src={chatButton} alt="chatButton"/>
                    </Link>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Home;