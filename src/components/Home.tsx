import React, {useRef} from 'react';

import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Art from '../assets/conversation-animate.svg';
import chatButton from '../assets/example-animate.svg';


function Home() {
    // useEffect(() => {
    //     new Pageable("#container");
    // });

    const chatRef = useRef<HTMLDivElement>(null!);

    function scrollToChat() {
        chatRef.current.scrollIntoView({behavior:'smooth'})
    }


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
            <Row>
                <Col>
                    <div className="arrow" onClick={scrollToChat}>
                        <span onClick={scrollToChat}></span>
                        <span onClick={scrollToChat}></span>
                        <span onClick={scrollToChat}></span>
                    </div>
                    <div className="patting">
                    </div>
                </Col>  
            </Row>
            <Row className="justfiy-content-md-center">
                <Col xs lg="2">
                </Col>
                <Col>
                    <div ref={chatRef}>
                        <Link to="/anon">
                            <img src={chatButton} alt="chatButton"/>
                        </Link>
                    </div>
                </Col>
                <Col xs lg="2">
                </Col>
            </Row>
        </Container>
    );
}

export default Home;