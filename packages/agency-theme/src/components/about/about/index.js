import React from 'react';
import config from '../../../../client-config';
import Link from 'gatsby-link';
import { isEmpty } from 'lodash';

/*css*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';

 
const About = ( props ) => {

    const { aboutHeading, aboutOne, aboutTwo } = props.data;


    return (
        <div>
            <Container className="aboutComponentApproach">
                <Row>
                    <Col>
                        <div className="aboutHeader">
                            <h1>About<span>*</span></h1>
                        </div>
                    </Col>        
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <div className="aboutContent">
                            <p className="headingAboutContent">{ aboutHeading }</p>
                            <div className="dividerAbout" />
                            <p>{ aboutOne }</p>
                            <p>{ aboutTwo }</p>
                        </div>
                    </Col>        
                </Row>
            </Container>
        </div>
    )
};

export default About;